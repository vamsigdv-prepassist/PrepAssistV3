"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchMainsQuestions, MainsQuestion } from "@/lib/mains-questions";
import { FileText, Loader2, Target, Globe, ChevronDown, CheckCircle2, Search, PenTool, ArrowRight, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MainsBankUser() {
  const [questions, setQuestions] = useState<MainsQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState<"English" | "Hindi">("English");
  
  // Explicit Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;

  // Accordion Native Tracker
  const [openAnswerId, setOpenAnswerId] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setOpenAnswerId(null);
    setCurrentPage(1); // Reset pagination naturally on language swap
    fetchMainsQuestions(language).then((data) => {
      if (mounted) {
        setQuestions(data);
        setLoading(false);
      }
    });
    return () => { mounted = false; };
  }, [language]);

  const totalPages = Math.max(1, Math.ceil(questions.length / questionsPerPage));
  const visibleQuestions = questions.slice((currentPage - 1) * questionsPerPage, currentPage * questionsPerPage);

  const handlePageChange = (newPage: number) => {
     if (newPage < 1 || newPage > totalPages) return;
     setOpenAnswerId(null);
     setCurrentPage(newPage);
     window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate pagination array dynamically to prevent overflow
  const renderPagination = () => {
     const maxVisiblePages = 5;
     let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
     let endPage = startPage + maxVisiblePages - 1;

     if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
     }

     const pages = [];
     if (startPage > 1) {
        pages.push(
           <button key={1} onClick={() => handlePageChange(1)} className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all border bg-white text-[#8B5A2B] border-[#E5E0D8] hover:bg-[#FDF4ED] hover:text-[#F97316] hover:border-[#F97316]/30">
              1
           </button>
        );
        if (startPage > 2) {
           pages.push(<span key="ellipsis-start" className="text-[#A89F91] px-2 font-black tracking-widest mt-2">...</span>);
        }
     }

     for (let i = startPage; i <= endPage; i++) {
        pages.push(
           <button
             key={i}
             onClick={() => handlePageChange(i)}
             className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all border ${
                currentPage === i 
                ? 'bg-[#F97316] text-white border-transparent shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:scale-105' 
                : 'bg-white text-[#8B5A2B] border-[#E5E0D8] hover:bg-[#FDF4ED] hover:text-[#F97316] hover:border-[#F97316]/30'
             }`}
           >
             {i}
           </button>
        );
     }

     if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
           pages.push(<span key="ellipsis-end" className="text-[#A89F91] px-2 font-black tracking-widest mt-2">...</span>);
        }
        pages.push(
           <button key={totalPages} onClick={() => handlePageChange(totalPages)} className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all border bg-white text-[#8B5A2B] border-[#E5E0D8] hover:bg-[#FDF4ED] hover:text-[#F97316] hover:border-[#F97316]/30">
              {totalPages}
           </button>
        );
     }

     return pages;
  };

  const toggleAnswer = (id: string) => {
     if (openAnswerId === id) setOpenAnswerId(null);
     else setOpenAnswerId(id);
  };

  const handleEvaluate = (questionId: string) => {
     router.push(`/evaluate?mains_id=${questionId}`);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#333333] font-sans selection:bg-[#F97316]/20 pb-20">
      <div className="max-w-6xl mx-auto p-6 md:p-12 relative z-10">
        
        {/* Main Header */}
        <header className="mb-12">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[#E5E0D8] pb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FDF4ED] border border-[#F97316]/20 text-[#D95F0E] text-[10px] font-black uppercase tracking-widest mb-5 shadow-sm">
                 <BookOpen className="w-3.5 h-3.5" /> Global Execution Arrays
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-[#2A2A2A] mb-4">Mains Answer Bank</h1>
              <p className="text-[#666666] text-lg font-medium max-w-xl leading-relaxed">Study historically accurate descriptive model answers or execute your own structural evaluations instantly against the core AI engine.</p>
            </div>
            
            {/* Language Extractor */}
            <div className="bg-[#F3EFE9] p-2 rounded-2xl flex border border-[#E5E0D8] shadow-inner w-full md:w-auto shrink-0">
               {(["English", "Hindi"] as const).map(lang => (
                  <button 
                     key={lang}
                     onClick={() => setLanguage(lang)}
                     className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all ${language === lang ? 'bg-white text-[#2A2A2A] shadow-sm border border-[#E5E0D8]' : 'text-[#A89F91] hover:text-[#2A2A2A] hover:bg-white/50'}`}
                  >
                     <Globe className="w-4 h-4"/> {lang} Nodes
                  </button>
               ))}
            </div>
          </motion.div>
        </header>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 opacity-80">
             <Loader2 className="w-12 h-12 animate-spin text-[#F97316] mb-5" />
             <p className="font-bold tracking-widest uppercase text-xs text-[#8B5A2B]">Extracting Mains Node Vectors...</p>
          </div>
        ) : questions.length === 0 ? (
          <div className="bg-[#FDFBF7] flex flex-col items-center justify-center py-32 rounded-[2rem] border border-[#D1C8B8] text-center px-4 shadow-sm">
             <Search className="w-16 h-16 text-[#D1C8B8] mb-6" />
             <h3 className="text-2xl font-serif font-black text-[#2A2A2A] mb-2">No nodes found in {language}</h3>
             <p className="text-[#A89F91] text-sm font-medium">The Global DB arrays are empty for this specific Language segment. Please notify Central Administrators.</p>
          </div>
        ) : (
          <div className="space-y-6">
            <AnimatePresence mode="wait">
             <motion.div 
               key={currentPage}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.3 }}
               className="space-y-8"
             >
            {visibleQuestions.map((q, index) => (
              <motion.div 
                key={q.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-[2rem] border border-[#E5E0D8] shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
              >
                 <div className="absolute top-0 left-0 w-1.5 h-full bg-[#E5E0D8] group-hover:bg-[#F97316] transition-colors" />
                 
                 <div className="p-8 md:p-10 pl-10 md:pl-12">
                    {/* Header: Topic & Tags */}
                    <div className="flex items-center flex-wrap gap-3 mb-6">
                       <span className="px-3 py-1.5 bg-[#F3EFE9] text-[#8B5A2B] border border-[#E5E0D8] text-[10px] font-black uppercase tracking-widest rounded-md shadow-sm">
                          ID: {q.id?.slice(0,6)}
                       </span>
                       <span className="px-3 py-1.5 bg-[#FDF4ED] text-[#F97316] border border-[#F97316]/20 text-[10px] font-black uppercase tracking-widest rounded-md flex items-center gap-1.5 shadow-sm">
                          <Target className="w-3 h-3" /> {q.topic}
                       </span>
                    </div>
                    
                    {/* The Core Question String */}
                    <h2 className="text-xl md:text-2xl font-bold text-[#2A2A2A] leading-relaxed max-w-4xl font-serif">
                       Q. {q.questionText}
                    </h2>

                    {/* Interactive Action Clusters */}
                    <div className="mt-8 pt-8 border-t border-[#E5E0D8] flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                       <button 
                         onClick={() => toggleAnswer(q.id!)}
                         className={`flex-1 py-4 border-2 rounded-2xl font-black flex items-center justify-center gap-3 transition-colors text-sm uppercase tracking-wider
                           ${openAnswerId === q.id 
                              ? 'bg-[#EEF9F0] text-[#2E4A35] border-[#D1E8D5] shadow-sm' 
                              : 'bg-[#FDFBF7] text-[#8B5A2B] border-[#D1C8B8]/50 hover:bg-[#FDF4ED] hover:border-[#F97316]/30 hover:text-[#F97316]'
                           }`}
                       >
                         {openAnswerId === q.id ? "Hide Model Framework" : "Reveal Model Answer"}
                         <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openAnswerId === q.id ? 'rotate-180' : ''}`} />
                       </button>

                       <button 
                         onClick={() => handleEvaluate(q.id!)}
                         className="flex-1 py-4 bg-[#2A2A2A] hover:bg-[#F97316] active:bg-[#D95F0E] text-white rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-lg group text-sm uppercase tracking-wider border-2 border-transparent"
                       >
                         Evaluate This Answer
                         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                       </button>
                    </div>
                 </div>

                 {/* Dropdown Answer Matrix */}
                 <AnimatePresence>
                    {openAnswerId === q.id && (
                       <motion.div 
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: "auto", opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         transition={{ duration: 0.3 }}
                         className="border-t border-[#D1E8D5] bg-[#EEF9F0] relative overflow-hidden text-[#4E7658] font-medium leading-relaxed"
                       >
                          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#10B981]" />
                          <div className="p-8 md:p-12 text-base md:text-lg whitespace-pre-wrap pl-10 md:pl-14">
                             {q.modelAnswer}
                          </div>
                          <div className="px-8 md:px-12 py-5 bg-[#C6ECCC]/30 border-t border-[#D1E8D5]/50 flex items-center gap-2 text-[10px] text-[#2E4A35] font-black uppercase tracking-widest pl-10 md:pl-14">
                             <CheckCircle2 className="w-4 h-4" /> Strictly curated Centralized Model Tracker. Do not perfectly copy dynamically.
                          </div>
                       </motion.div>
                    )}
                 </AnimatePresence>
              </motion.div>
            ))}
             </motion.div>
            </AnimatePresence>
            
            {/* Standard Pagination Nav */}
            {totalPages > 1 && (
               <div className="mt-16 flex flex-col md:flex-row items-center justify-between py-6 bg-white border border-[#E5E0D8] rounded-[2rem] px-8 shadow-sm">
                  <div className="text-sm font-bold text-[#A89F91] mb-6 md:mb-0">
                     Showing <span className="text-[#8B5A2B] font-black">{(currentPage - 1) * questionsPerPage + 1}</span> to <span className="text-[#8B5A2B] font-black">{Math.min(currentPage * questionsPerPage, questions.length)}</span> of <span className="text-[#8B5A2B] font-black">{questions.length}</span> nodes
                  </div>

                  <div className="flex items-center gap-2 flex-wrap justify-center">
                     <button 
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-3 rounded-xl border border-[#E5E0D8] bg-[#FDFBF7] text-[#8B5A2B] hover:bg-white hover:border-[#D1C8B8] hover:text-[#F97316] transition-all disabled:opacity-30 disabled:pointer-events-none shadow-sm"
                     >
                        <ChevronLeft className="w-5 h-5"/>
                     </button>

                     <div className="flex items-center gap-2 mx-1 md:mx-4">
                        {renderPagination()}
                     </div>

                     <button 
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-3 rounded-xl border border-[#E5E0D8] bg-[#FDFBF7] text-[#8B5A2B] hover:bg-white hover:border-[#D1C8B8] hover:text-[#F97316] transition-all disabled:opacity-30 disabled:pointer-events-none shadow-sm"
                     >
                        <ChevronRight className="w-5 h-5"/>
                     </button>
                  </div>
               </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
