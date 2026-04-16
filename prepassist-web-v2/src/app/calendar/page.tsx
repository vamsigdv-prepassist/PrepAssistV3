"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  X,
  AlignLeft,
  ListTodo,
  Trash2,
  CalendarDays,
  Target
} from "lucide-react";

// --- TYPES ---
interface Task {
  id: string;
  title: string;
  subject: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  goalsMode: 'text' | 'list';
  goalsText: string;
  goalsList: { id: string; text: string; completed: boolean }[];
  color: string;
}

interface Subject {
  name: string;
  color: string;
}

const AVAILABLE_COLORS = [
  'bg-sky-500', 'bg-emerald-500', 'bg-amber-500', 'bg-indigo-500',
  'bg-purple-500', 'bg-teal-500', 'bg-rose-500', 'bg-cyan-500',
  'bg-fuchsia-500', 'bg-lime-500', 'bg-orange-500', 'bg-pink-500',
  'bg-violet-500', 'bg-zinc-600'
];

// --- UTILS ---
const formatDateStr = (year: number, month: number, day: number) => {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarPage() {
  // Calendar View State
  const [currentDate, setCurrentDate] = useState(new Date()); 
  
  // Dynamic Subjects State
  const [subjects, setSubjects] = useState<Subject[]>([
    { name: 'Polity', color: 'bg-sky-500' },
    { name: 'Economy', color: 'bg-emerald-500' },
    { name: 'History', color: 'bg-amber-500' },
    { name: 'Geography', color: 'bg-indigo-500' },
  ]);
  
  // Tasks State
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 'mock-1',
      title: 'Revise Fundamental Rights',
      subject: 'Polity',
      startDate: formatDateStr(new Date().getFullYear(), new Date().getMonth(), 12),
      endDate: formatDateStr(new Date().getFullYear(), new Date().getMonth(), 12),
      goalsMode: 'list',
      goalsText: '',
      goalsList: [{ id: 'g1', text: 'Read Laxmikanth Ch 7', completed: false }, { id: 'g2', text: 'Solve 50 MCQs', completed: true }],
      color: 'bg-sky-500'
    }
  ]);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [formStartDate, setFormStartDate] = useState("");
  const [formEndDate, setFormEndDate] = useState("");
  const [taskSubject, setTaskSubject] = useState("Polity");
  const [goalsMode, setGoalsMode] = useState<'text' | 'list'>('list');
  const [goalsText, setGoalsText] = useState("");
  const [goalsList, setGoalsList] = useState<{ id: string; text: string; completed: false }[]>([
     { id: 'initial', text: '', completed: false }
  ]);

  // Subject Creator State
  const [isAddingSubject, setIsAddingSubject] = useState(false);
  const [newSubjectName, setNewSubjectName] = useState("");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  
  const days = Array.from({ length: 42 }, (_, i) => {
    const dayNumber = i - firstDay + 1;
    if (dayNumber > 0 && dayNumber <= daysInMonth) return dayNumber;
    return null;
  });

  // Handle Day Click
  const handleDayClick = (dateStr: string) => {
    openPlannerModal(dateStr, dateStr);
  };

  const openPlannerModal = (start: string = "", end: string = "") => {
    setTaskTitle("");
    setFormStartDate(start || formatDateStr(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()));
    setFormEndDate(end || formatDateStr(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()));
    if(subjects.length > 0 && !subjects.find(s => s.name === taskSubject)) {
      setTaskSubject(subjects[0].name);
    }
    setGoalsMode('list');
    setGoalsText("");
    setGoalsList([{ id: Math.random().toString(), text: '', completed: false }]);
    setIsAddingSubject(false);
    setNewSubjectName("");
    setIsModalOpen(true);
  };

  const closePlannerModal = () => {
    setIsModalOpen(false);
  };

  const saveTask = () => {
    // If To Date is before From Date, fix it
    let finalStart = formStartDate;
    let finalEnd = formEndDate;
    if (finalEnd < finalStart) {
      finalEnd = finalStart;
    }

    if (!taskTitle.trim() || !finalStart || !finalEnd) return;

    const filteredGoals = goalsList.filter(g => g.text.trim() !== '');

    const selectedSubjectObj = subjects.find(s => s.name === taskSubject);
    const assignedColor = selectedSubjectObj ? selectedSubjectObj.color : 'bg-slate-500';

    const newTask: Task = {
      id: Math.random().toString(36).substring(2, 9),
      title: taskTitle,
      subject: taskSubject,
      startDate: finalStart,
      endDate: finalEnd,
      goalsMode,
      goalsText,
      goalsList: filteredGoals,
      color: assignedColor
    };

    setTasks(prev => [...prev, newTask]);
    closePlannerModal();
  };

  const handleAddSubject = () => {
    if(!newSubjectName.trim()) return;
    const existing = subjects.find(s => s.name.toLowerCase() === newSubjectName.toLowerCase());
    if(existing) {
       setTaskSubject(existing.name);
       setIsAddingSubject(false);
       setNewSubjectName("");
       return;
    }

    // Pick a random color not heavily used, or just cycle through
    const randomColor = AVAILABLE_COLORS[subjects.length % AVAILABLE_COLORS.length];
    
    const newSubject: Subject = { name: newSubjectName.trim(), color: randomColor };
    setSubjects([...subjects, newSubject]);
    setTaskSubject(newSubject.name);
    
    setIsAddingSubject(false);
    setNewSubjectName("");
  };

  const handleAddGoalItem = () => {
    setGoalsList(prev => [...prev, { id: Math.random().toString(), text: '', completed: false }]);
  };

  const updateGoalItem = (id: string, text: string) => {
    setGoalsList(prev => prev.map(g => g.id === id ? { ...g, text } : g));
  };

  const removeGoalItem = (id: string) => {
    setGoalsList(prev => prev.filter(g => g.id !== id));
  };

  // Rendering logic for continuous spanning bars
  const renderTaskBars = (dateStr: string) => {
    const overlappingTasks = tasks.filter(t => dateStr >= t.startDate && dateStr <= t.endDate);

    return overlappingTasks.map(task => {
      const isStart = dateStr === task.startDate;
      const isEnd = dateStr === task.endDate;
      const isSingleDay = isStart && isEnd;

      return (
        <div 
          key={task.id}
          className={`
            relative z-20 h-6 mt-1 flex items-center px-2 text-xs font-bold text-white shadow-sm overflow-visible whitespace-nowrap
            ${task.color} 
            ${isSingleDay ? 'rounded-md mx-1' : ''}
            ${!isSingleDay && isStart ? 'rounded-l-md ml-1 translate-x-1' : ''}
            ${!isSingleDay && !isStart && !isEnd ? '-mx-3' : ''}
            ${!isSingleDay && isEnd ? 'rounded-r-md mr-1 -translate-x-1' : ''}
          `}
        >
          {isStart || new Date(dateStr).getDay() === 0
            ? <span className="truncate w-full block">{task.title}</span> 
            : <span className="opacity-0">.</span>}
        </div>
      );
    });
  };

  return (
    <div className="p-6 md:p-12 relative min-h-[calc(100vh-80px)] overflow-x-hidden">
      
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-b from-indigo-500/10 to-transparent dark:from-indigo-500/10 pointer-events-none rounded-full blur-[100px] z-0"></div>

      <div className="max-w-6xl mx-auto flex flex-col gap-8 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col gap-2 mb-2">
          <div className="flex items-center justify-between">
             <div className="flex items-center gap-3">
                <div className="p-3 bg-indigo-100 dark:bg-white/10 rounded-2xl">
                   <CalendarDays className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                   <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white">Master Study Planner</h1>
                   <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">
                     Click any date to assign single-day or multi-day revisions.
                   </p>
                </div>
             </div>
             <button onClick={() => openPlannerModal()} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm shadow-md transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4"/> Plan New Mission
             </button>
          </div>
        </div>

        {/* Legend */}
        {subjects.length > 0 && (
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Subjects:</span>
            {subjects.map(sub => (
              <div key={sub.name} className="flex items-center gap-1.5 bg-white dark:bg-[#13141a] px-3 py-1 rounded-full border border-slate-200 dark:border-white/5 shadow-sm space-x-1">
                 <div className={`w-3 h-3 rounded-full ${sub.color}`}></div>
                 <span className="text-xs font-bold text-slate-600 dark:text-slate-300">{sub.name}</span>
              </div>
            ))}
          </div>
        )}

        {/* CALENDAR BLOCK */}
        <div className="bg-white dark:bg-[#13141a] border border-slate-200 dark:border-white/10 rounded-3xl shadow-xl overflow-hidden shadow-slate-200 dark:shadow-none transition-all">
          
          {/* Calendar Toolbar */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-transparent">
             <div className="flex items-baseline gap-3">
                <h2 className="text-2xl font-black text-slate-800 dark:text-white">{MONTH_NAMES[month]}</h2>
                <span className="text-lg font-bold text-slate-400 dark:text-white/40">{year}</span>
             </div>
             <div className="flex items-center gap-2 bg-white dark:bg-black/20 p-1 rounded-xl shadow-sm border border-slate-200 dark:border-white/5">
                <button onClick={handlePrevMonth} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                   <ChevronLeft className="w-5 h-5 text-slate-600 dark:text-white/70" />
                </button>
                <button 
                  onClick={() => setCurrentDate(new Date())} 
                  className="px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white font-bold text-sm transition-colors"
                >
                   Today
                </button>
                <button onClick={handleNextMonth} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                   <ChevronRight className="w-5 h-5 text-slate-600 dark:text-white/70" />
                </button>
             </div>
          </div>

          {/* Grid Layout */}
          <div className="p-4">
            <div className="grid grid-cols-7 mb-2">
                {WEEKDAYS.map(day => (
                  <div key={day} className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-white/40 py-2">
                      {day}
                  </div>
                ))}
            </div>

            <div className="grid grid-cols-7 border-t border-l border-slate-100 dark:border-white/5 rounded-xl overflow-hidden bg-slate-50 dark:bg-black/20">
                {days.map((dayNum, i) => {
                  if (!dayNum) return <div key={`empty-${i}`} className="min-h-[140px] border-r border-b border-slate-100 dark:border-white/5 bg-white/50 dark:bg-transparent"></div>;
                  
                  const dStr = formatDateStr(year, month, dayNum);
                  const isToday = dStr === formatDateStr(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

                  return (
                      <div 
                        key={dStr} 
                        onClick={() => handleDayClick(dStr)}
                        className="group relative min-h-[140px] border-r border-b border-slate-100 dark:border-white/5 transition-colors cursor-pointer flex flex-col p-1 overflow-visible bg-white dark:bg-[#13141a] hover:bg-slate-50 dark:hover:bg-white/[0.02]"
                      >
                        <div className="relative z-10 flex items-center justify-between px-1 mt-1 mb-2">
                           <span className={`
                             text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full
                             ${isToday ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-white/70 group-hover:text-indigo-500'}
                           `}>
                              {dayNum}
                           </span>
                           <Plus className="w-4 h-4 text-slate-300 dark:text-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Rendering Multi-day Task Bars */}
                        <div className="flex-1 overflow-visible relative flex flex-col mt-2">
                           {renderTaskBars(dStr)}
                        </div>
                      </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>

      {/* POPUP MODAL FOR PLANNING TASK */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pb-20">
             <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               exit={{ opacity: 0 }} 
               className="absolute inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm"
               onClick={closePlannerModal}
             />
             
             <motion.div 
               initial={{ opacity: 0, scale: 0.95, y: 20 }} 
               animate={{ opacity: 1, scale: 1, y: 0 }} 
               exit={{ opacity: 0, scale: 0.95, y: 20 }} 
               className="relative w-full max-w-2xl bg-white dark:bg-[#181920] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col max-h-[90vh]"
             >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/5">
                   <div>
                     <h2 className="text-xl font-bold text-slate-800 dark:text-white">Configure Study Assignment</h2>
                     <p className="text-sm font-medium text-slate-500 dark:text-white/50 mt-1">
                        Map objectives directly to your calendar to stay on track.
                     </p>
                   </div>
                   <button onClick={closePlannerModal} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 transition-colors">
                      <X className="w-5 h-5" />
                   </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto custom-scrollbar flex flex-col gap-6">
                   
                   {/* Task Title */}
                   <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-white/80">Assignment Title</label>
                      <input 
                         type="text" 
                         value={taskTitle}
                         onChange={(e) => setTaskTitle(e.target.value)}
                         placeholder="e.g., Complete Modern History Revision"
                         autoFocus
                         className="px-4 py-3 bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors text-slate-800 dark:text-white font-medium"
                      />
                   </div>

                   {/* Dates Selector */}
                   <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                         <label className="text-sm font-bold text-slate-700 dark:text-white/80">From Date</label>
                         <input 
                            type="date"
                            value={formStartDate}
                            onChange={e => setFormStartDate(e.target.value)}
                            className="px-4 py-3 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/5 rounded-xl outline-none focus:border-indigo-500 text-slate-800 dark:text-white font-medium [color-scheme:light] dark:[color-scheme:dark]"
                         />
                      </div>
                      <div className="flex flex-col gap-2">
                         <label className="text-sm font-bold text-slate-700 dark:text-white/80">To Date</label>
                         <input 
                            type="date"
                            value={formEndDate}
                            onChange={e => setFormEndDate(e.target.value)}
                            min={formStartDate} // Basic HTML prevention
                            className="px-4 py-3 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/5 rounded-xl outline-none focus:border-indigo-500 text-slate-800 dark:text-white font-medium [color-scheme:light] dark:[color-scheme:dark]"
                         />
                      </div>
                   </div>

                   {/* Subject Selection */}
                   <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-white/80">Link Subject</label>
                      <div className="flex flex-wrap gap-2 items-center">
                         {subjects.map(subject => (
                            <button
                              key={subject.name}
                              onClick={() => setTaskSubject(subject.name)}
                              className={`
                                px-3 py-1.5 rounded-lg text-sm font-bold border transition-all flex items-center gap-2
                                ${taskSubject === subject.name 
                                  ? 'border-transparent text-white shadow-md ' + subject.color 
                                  : 'border-slate-200 dark:border-white/10 text-slate-600 dark:text-white/60 hover:bg-slate-50 dark:hover:bg-white/5'}
                              `}
                            >
                               {taskSubject === subject.name && <Target className="w-3.5 h-3.5" />}
                               {subject.name}
                            </button>
                         ))}
                         
                         {/* Dynamic Subject Creation */}
                         {isAddingSubject ? (
                            <div className="flex items-center gap-2 bg-indigo-50 dark:bg-indigo-500/10 p-1 pl-3 rounded-lg border border-indigo-200 dark:border-indigo-500/30">
                               <input 
                                  type="text"
                                  value={newSubjectName}
                                  onChange={e => setNewSubjectName(e.target.value)}
                                  placeholder="Subject name..."
                                  className="bg-transparent text-sm font-bold text-indigo-800 dark:text-indigo-300 outline-none w-28"
                                  autoFocus
                                  onKeyDown={(e) => e.key === 'Enter' && handleAddSubject()}
                               />
                               <button onClick={handleAddSubject} className="p-1 bg-indigo-600 rounded text-white hover:bg-indigo-700 transition">
                                  <Plus className="w-3.5 h-3.5" />
                               </button>
                               <button onClick={() => setIsAddingSubject(false)} className="p-1 hover:bg-indigo-200/50 dark:hover:bg-indigo-500/20 rounded text-indigo-600 dark:text-indigo-400">
                                  <X className="w-3.5 h-3.5" />
                               </button>
                            </div>
                         ) : (
                            <button 
                              onClick={() => setIsAddingSubject(true)}
                              className="px-3 py-1.5 rounded-lg text-sm font-bold border border-dashed border-slate-300 dark:border-white/20 text-slate-500 flex items-center gap-1 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                            >
                               <Plus className="w-3.5 h-3.5" /> New Subject
                            </button>
                         )}
                      </div>
                   </div>

                   {/* Goals Configurator */}
                   <div className="flex flex-col gap-3 mt-2 border-t border-slate-100 dark:border-white/5 pt-6">
                      <div className="flex items-center justify-between">
                         <label className="text-sm font-bold text-slate-700 dark:text-white/80">Goals & Targets</label>
                         
                         {/* Text / List Toggle */}
                         <div className="flex bg-slate-100 dark:bg-black/30 p-1 rounded-lg">
                            <button 
                               onClick={() => setGoalsMode('text')}
                               className={`flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-md transition-all ${goalsMode === 'text' ? 'bg-white dark:bg-white/10 text-slate-800 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:text-white/50 dark:hover:text-white'}`}
                            >
                               <AlignLeft className="w-3.5 h-3.5" /> Text Block
                            </button>
                            <button 
                               onClick={() => setGoalsMode('list')}
                               className={`flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-md transition-all ${goalsMode === 'list' ? 'bg-white dark:bg-white/10 text-slate-800 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:text-white/50 dark:hover:text-white'}`}
                            >
                               <ListTodo className="w-3.5 h-3.5" /> Checklists
                            </button>
                         </div>
                      </div>

                      {goalsMode === 'text' ? (
                         <textarea 
                            value={goalsText}
                            onChange={(e) => setGoalsText(e.target.value)}
                            placeholder="Write your long-form goals here..."
                            rows={4}
                            className="px-4 py-3 bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl outline-none focus:border-indigo-500 transition-colors text-slate-800 dark:text-white resize-none"
                         />
                      ) : (
                         <div className="flex flex-col gap-2">
                            {goalsList.map((goal, idx) => (
                               <div key={goal.id} className="flex items-center gap-2">
                                  <div className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-white/20 flex items-center justify-center bg-transparent"></div>
                                  <input 
                                     type="text" 
                                     value={goal.text}
                                     onChange={(e) => updateGoalItem(goal.id, e.target.value)}
                                     placeholder={`Goal item ${idx + 1}...`}
                                     onKeyDown={(e) => {
                                        if(e.key === 'Enter') {
                                           e.preventDefault();
                                           handleAddGoalItem();
                                        }
                                     }}
                                     className="flex-1 px-3 py-2 bg-transparent border-b border-slate-200 dark:border-white/10 outline-none focus:border-indigo-500 transition-colors text-sm text-slate-800 dark:text-white"
                                  />
                                  <button onClick={() => removeGoalItem(goal.id)} className="p-2 text-slate-400 hover:text-rose-500 transition-colors">
                                     <Trash2 className="w-4 h-4" />
                                  </button>
                               </div>
                            ))}
                            <button onClick={handleAddGoalItem} className="mt-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:underline w-max">
                              <Plus className="w-4 h-4" /> Add another item
                            </button>
                         </div>
                      )}
                   </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] flex justify-end gap-3">
                   <button onClick={closePlannerModal} className="px-5 py-2.5 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                      Cancel
                   </button>
                   <button 
                      onClick={saveTask} 
                      disabled={!taskTitle.trim()}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-indigo-500/20"
                   >
                      <Target className="w-4 h-4" /> Map to Calendar
                   </button>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
