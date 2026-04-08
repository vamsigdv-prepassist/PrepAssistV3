import 'package:flutter/material.dart';
import 'core/supabase.dart';
import 'ui/auth/login_screen.dart';
import 'package:google_fonts/google_fonts.dart';

void main() async {
  // Guarantee Native widget engine mapping is fully stable
  WidgetsFlutterBinding.ensureInitialized();
  
  // Connect to the Supabase Secure Vault mapped directly to our Next.js architecture
  await NativeDatabaseCore.initializeVault();

  runApp(const PrepAssistEliteNative());
}

class PrepAssistEliteNative extends StatelessWidget {
  const PrepAssistEliteNative({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'PrepAssist Mobile Elite',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.indigo),
        useMaterial3: true,
        textTheme: GoogleFonts.interTextTheme(
          Theme.of(context).textTheme,
        ),
      ),
      debugShowCheckedModeBanner: false,
      home: const NativeLoginVault(), // Route natively to the Auth module
    );
  }
}
