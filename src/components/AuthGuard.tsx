"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabase, adminSupabase } from "@/lib/supabase";
import { Loader2 } from "lucide-react";
import { isAdminEmail } from "@/lib/rbac";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname() || "";
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // The explicitly public pages that completely bypass Authentication locking rules natively.
  const publicRoutes = ["/", "/login", "/admin/login", "/pricing"];

  useEffect(() => {
    // Dynamically select the authentication client based on the routing context
    const isAdminPath = pathname.startsWith("/admin");
    const activeClient = isAdminPath ? adminSupabase : supabase;

    const strictAuthCheck = async () => {
       try {
          const { data, error } = await activeClient.auth.getSession();
          const session = data?.session;
          
          if (session) {
             const email = session.user?.email;
             let userIsAdmin = isAdminEmail(email);

             // Structural Segregation: Push Admins away from Student Portal (if needed), Push Students away from Admin Portal
             if (isAdminPath && !userIsAdmin && pathname !== "/admin/login") {
                // Force check the database if static email fails (fixes User Management roles)
                try {
                   const userDoc = await getDoc(doc(db, "users", session.user.id));
                   if (userDoc.exists() && userDoc.data()?.role === "admin") {
                      userIsAdmin = true;
                   }
                } catch (e) {
                   console.error("Firebase Role Check failed on guard payload");
                }

                if (!userIsAdmin) {
                   router.push("/admin/login");
                   return;
                }
             }
             
             if (pathname === "/admin/login" && userIsAdmin) {
                router.push("/admin");
                return;
             }
             
             // If we are on a user path, but logged in via user client, we are good.
             // If we are on an admin path, but logged in via admin client, we are good.
             setIsAuthenticated(true);
          } else {
             setIsAuthenticated(false);
             if (!publicRoutes.includes(pathname)) {
                if (isAdminPath) {
                   router.push("/admin/login");
                } else {
                   router.push("/login");
                }
             }
          }
       } catch (err) {
          setIsAuthenticated(false);
          router.push(isAdminPath ? "/admin/login" : "/login");
       }
    };

    strictAuthCheck();

    const { data: authData } = activeClient.auth.onAuthStateChange(async (_event: any, session: any) => {
       if (session) {
          const email = session.user?.email;
          let userIsAdmin = isAdminEmail(email);

          if (isAdminPath && !userIsAdmin && pathname !== "/admin/login") {
             try {
                const userDoc = await getDoc(doc(db, "users", session.user.id));
                if (userDoc.exists() && userDoc.data()?.role === "admin") {
                   userIsAdmin = true;
                }
             } catch (e) {}

             if (!userIsAdmin) {
                router.push("/admin/login");
                return;
             }
          }

          setIsAuthenticated(true);
       } else {
          setIsAuthenticated(false);
          if (!publicRoutes.includes(pathname)) {
             if (isAdminPath) {
                router.push("/admin/login");
             } else {
                router.push("/login");
             }
          }
       }
    });

    return () => {
        if (authData?.subscription) {
            authData.subscription.unsubscribe();
        }
    };
  }, [pathname, router]);

  // Pass-through explicitly if route is inherently public natively (Landing Page / Login Page)
  if (publicRoutes.includes(pathname)) {
      return <>{children}</>;
  }

  // Awaiting validation sequence securely. Prevents DOM-flash exposing locked features.
  // We explicitly show the Loader when auth is missing or redirecting, to prevent Next.js Router destruction by null returns.
  if (isAuthenticated === null || (!isAuthenticated && !publicRoutes.includes(pathname))) {
      return (
         <div className="min-h-screen bg-[#020617] flex flex-col justify-center items-center">
            <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mb-4" />
            <div className="text-white/40 text-[10px] font-black uppercase tracking-widest">Validating Ecosystem Connection...</div>
         </div>
      );
  }

  // Active Authenticated State Execution Map
  return <>{children}</>;
}
