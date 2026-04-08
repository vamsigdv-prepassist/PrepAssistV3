"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PenTool, Target, Layers, Database, CheckCircle2, Globe, Send, Trash2, Loader2, FileText, Search } from "lucide-react";
import { addMainsQuestion, fetchMainsQuestions, deleteMainsQuestion, MainsQuestion } from "@/lib/mains-questions";

export default function MainsBankAdmin() {
  const [topic, setTopic] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [modelAnswer, setModelAnswer] = useState("");
  const [language, setLanguage] = useState<"English" | "Hindi">("English");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [questionsList, setQuestionsList] = useState<MainsQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
     loadLiveMains();
  }, [language]); // Reactively swap and reload live nodes when Language toggles

  const loadLiveMains = async () => {
     setIsLoading(true);
     try {
        const payload = await fetchMainsQuestions(language);
        setQuestionsList(payload);
     } catch (e) {
        console.error("Failed mounting DB strings");
     } finally {
        setIsLoading(false);
     }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim() || !questionText.trim() || !modelAnswer.trim()) {
       alert("CRITICAL ERROR: Please populate all absolute inputs natively.");
       return;
    }
    
    setIsSubmitting(true);
    try {
      await addMainsQuestion({ topic, questionText, modelAnswer, language });
      setSuccess(true);
      setTopic("");
      setQuestionText("");
      setModelAnswer("");
      loadLiveMains(); // Instantly update right panel
      setTimeout(() => setSuccess(false), 4000);
    } catch (err: any) {
      alert("Submission Collision Array: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string, refTopic: string) => {
     if (!window.confirm(`Destructive Action! Are you absolutely sure you want to permanently delete Question ID [${id}] under "${refTopic}"?`)) return;
     try {
        await deleteMainsQuestion(id);
        alert(`Successfully deleted the node safely.`);
        loadLiveMains(); // Rehydrate visual memory table natively
     } catch(e: any) {
        alert("CRASH ERROR: " + e.message);
     }
  };

  return (
    <div className="min-h-screen font-sans text-slate-100 pb-16">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-6 border-b border-slate-700/50 gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <div className="flex items-center gap-2 px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-[10px] font-black uppercase tracking-widest rounded-full mb-3 inline-flex shadow-inner">
             <PenTool className="w-3 h-3" /> Core Evaluation Matrix
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Mains Subject Injection</h1>
          <p className="text-slate-400 mt-1 text-sm font-medium leading-relaxed max-w-2xl">Construct advanced descriptive questions mapped exclusively with model answers locally.</p>
        </motion.div>
        
        {/* Language Extraction Map */}
        <div className="bg-slate-900/50 p-1.5 rounded-2xl flex border border-slate-700/50 shadow-inner">
           {(["English", "Hindi"] as const).map(lang => (
              <button 
                 key={lang}
                 onClick={() => setLanguage(lang)}
                 className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${language === lang ? 'bg-fuchsia-500 text-white shadow-[0_0_20px_rgba(217,70,239,0.3)]' : 'text-slate-400 hover:text-slate-100'}`}
              >
                 <Globe className="w-4 h-4"/> {lang} Nodes
              </button>
           ))}
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-10">
         
         {/* LEFT PANEL: SINGLE EXTRACTION INJECTION */}
         <div className="lg:col-span-5 flex flex-col gap-6">
           <motion.div 
             initial={{ opacity: 0, y: 30 }} 
             animate={{ opacity: 1, y: 0 }} 
             transition={{ duration: 0.5 }}
             className="bg-[#0f172a]/60 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 relative shadow-2xl"
           >
              <h2 className="text-xl font-black text-slate-100 flex items-center gap-3 mb-8 pb-4 border-b border-slate-700/50">
                <Database className="w-6 h-6 text-fuchsia-400" />
                Single Extraction Injection
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                 <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
                       <Target className="w-4 h-4 text-fuchsia-400" /> Specific Subject Topic
                    </label>
                    <input 
                      type="text" required
                      value={topic}
                      onChange={e => setTopic(e.target.value)}
                      className="w-full bg-slate-900/50 border border-slate-700/50 hover:border-slate-600 focus:border-fuchsia-500 rounded-xl px-4 py-3.5 text-slate-100 outline-none transition-all placeholder:text-slate-500"
                      placeholder="e.g. Governance & Polity (GS2), Ethics Array..."
                    />
                 </div>
                 
                 <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
                       <Layers className="w-4 h-4 text-sky-400" /> Mains Core Question Block
                    </label>
                    <textarea 
                      required
                      value={questionText}
                      onChange={e => setQuestionText(e.target.value)}
                      className="w-full h-32 bg-slate-900/50 border border-slate-700/50 hover:border-slate-600 focus:border-sky-500 rounded-xl px-4 py-3.5 text-slate-100 outline-none transition-all placeholder:text-slate-500 resize-none font-medium leading-relaxed"
                      placeholder="Paste the precise structural examination query safely..."
                    />
                 </div>

                 <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
                       <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Ideal Evaluation Model Answer
                    </label>
                    <textarea 
                      required
                      value={modelAnswer}
                      onChange={e => setModelAnswer(e.target.value)}
                      className="w-full h-52 bg-slate-900/50 border border-slate-700/50 hover:border-slate-600 focus:border-emerald-500 rounded-xl px-4 py-3.5 text-slate-100 outline-none transition-all placeholder:text-slate-500 resize-none font-medium leading-relaxed"
                      placeholder="Construct the precise native grading answer mapping. Students will view this directly beneath their active layout dynamically."
                    />
                 </div>

                 <div className="pt-6 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <AnimatePresence>
                       {success ? (
                          <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} exit={{opacity:0}} className="text-emerald-400 font-bold text-sm flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20">
                             <CheckCircle2 className="w-5 h-5" /> Push Synchronized to Database!
                          </motion.div>
                       ) : <div/>}
                    </AnimatePresence>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 bg-fuchsia-500 hover:bg-fuchsia-600 active:bg-fuchsia-700 text-white font-black rounded-xl transition-all shadow-[0_0_20px_rgba(217,70,239,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      <Send className={`w-5 h-5 ${isSubmitting ? 'animate-bounce' : ''}`}/>
                      {isSubmitting ? 'Executing Push...' : `Deploy ${language} Matrix`}
                    </button>
                 </div>
              </form>
           </motion.div>
         </div>

         {/* RIGHT PANEL: LIVE MAINS DATA VIEWER */}
         <div className="lg:col-span-7 flex flex-col h-[85vh]">
             <div className="rounded-3xl border border-slate-700/50 bg-[#020617]/50 shadow-2xl flex flex-col flex-1 overflow-hidden backdrop-blur-xl">
                 <div className="p-8 border-b border-slate-700/50 flex items-center justify-between bg-white/[0.02]">
                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                       <Database className="w-5 h-5 text-sky-400" /> Firebase Remote Data
                    </h3>
                    <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-bold text-white/50 tracking-widest uppercase">
                       {questionsList.length} Connected
                    </div>
                 </div>
                 
                 <div className="p-8 overflow-y-auto space-y-6 flex-1 custom-scrollbar">
                    {isLoading ? (
                      <div className="flex flex-col items-center justify-center h-full opacity-50">
                         <Loader2 className="w-8 h-8 animate-spin text-fuchsia-400 mb-4" />
                         <p>Querying Firestore Entities...</p>
                      </div>
                    ) : questionsList.length === 0 ? (
                      <div className="text-center p-10 opacity-50 border border-dashed border-white/20 rounded-3xl">
                         <Search className="w-12 h-12 text-white/20 mx-auto mb-4" />
                         <p className="font-bold text-xl text-white/50">Table is currently empty</p>
                      </div>
                    ) : (
                      questionsList.map(q => (
                        <div key={q.id} className="bg-black/40 rounded-3xl p-6 border border-white/5 shadow-inner hover:border-white/10 transition-colors relative group">
                           {/* Destructive Control Button */}
                           <button 
                             onClick={() => handleDelete(q.id!, q.topic)} 
                             className="absolute top-6 right-6 p-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all opacity-0 group-hover:opacity-100 shadow-md"
                             title="Wipe Payload"
                           >
                              <Trash2 className="w-4 h-4"/>
                           </button>

                           <div className="flex justify-between items-start mb-4 pr-12">
                              <div>
                                <h4 className="text-xl font-black text-slate-100">{q.topic}</h4>
                                <span className="inline-block mt-2 bg-fuchsia-500/20 text-fuchsia-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md border border-fuchsia-500/30">
                                   ID: {q.id?.slice(0, 6)}...
                                </span>
                              </div>
                              <span className="bg-white/10 text-white/50 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/5">{q.language}</span>
                           </div>
                           
                           <div className="mb-4">
                              <span className="text-xs uppercase tracking-widest text-sky-400/80 font-bold block mb-1">Q. String</span>
                              <p className="text-white/80 text-sm leading-relaxed whitespace-pre-wrap">{q.questionText}</p>
                           </div>

                           <div className="pt-4 border-t border-white/5">
                              <span className="text-xs uppercase tracking-widest text-emerald-400/80 font-bold block mb-2">Attached Model Target</span>
                              <div className="max-h-24 overflow-y-auto custom-scrollbar pr-2">
                                 <p className="text-white/50 text-xs leading-relaxed whitespace-pre-wrap">{q.modelAnswer}</p>
                              </div>
                           </div>
                        </div>
                      ))
                    )}
                 </div>
             </div>
         </div>

      </div>
    </div>
  );
}
