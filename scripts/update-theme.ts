import fs from 'fs';

const files = ['src/App.tsx', 'src/components/Modal.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/primary-/g, 'sky-');
  content = content.replace(/eco-/g, 'emerald-');
  content = content.replace(/gray-/g, 'slate-');
  
  // Update Header button logic:
  // From: bg-sky-600 hover:bg-sky-700 text-white font-medium py-2.5 px-5 rounded-xl transition-all shadow-sm shadow-sky-600/20 active:scale-95
  // To: bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition shadow-lg shadow-sky-200
  
  // Specific replacements based on Design HTML:
  content = content.replace(/bg-sky-600 hover:bg-sky-700 text-white font-medium py-2.5 px-5 rounded-xl transition-all shadow-sm shadow-sky-600\/20 active:scale-95/g, 'bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition shadow-lg shadow-sky-200');

  // Hero section container and text:
  // "Откачка септиков и колодцев в Балашихе <span className="text-sky-600">и области</span>" ->
  // text-5xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 -> text-5xl font-black leading-tight tracking-tight text-slate-900
  content = content.replace(/text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-\[1\.1\] mb-6/g, 'text-5xl font-black leading-tight tracking-tight text-slate-900 my-4');
  
  // Hero text paragraph:
  // text-lg sm:text-xl text-slate-600 mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0 leading-relaxed font-medium -> text-lg text-slate-500 max-w-xl
  content = content.replace(/text-lg sm:text-xl text-slate-600 mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0 leading-relaxed font-medium/g, 'text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 mb-8');

  // Badges:
  // inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold mb-6 -> bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-bold uppercase tracking-wider
  content = content.replace(/bg-sky-100 text-sky-700 text-sm font-semibold/g, 'bg-emerald-100 text-emerald-700 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest');

  // Whatsapp button:
  // bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md -> bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-600 transition
  content = content.replace(/bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md/g, 'bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-600 transition shadow-lg shadow-emerald-200');

  // Call button:
  // bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md mt-0 -> ... shadow-lg
  content = content.replace(/bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md mt-0/g, 'bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-slate-300 mt-0');

  // Cards layout logic
  // bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 -> bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 hover:-translate-y-1
  content = content.replace(/bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300/g, 'bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 hover:-translate-y-1');

  // Icon wrappers in advantages: w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-sky-600 -> text-sky-500 (plus we can change bg)
  content = content.replace(/w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-sky-600 mb-5/g, 'w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 mb-6');

  fs.writeFileSync(file, content);
});
