import React, { useState } from 'react';

interface LeadFormProps {
  className?: string;
  title?: string;
  buttonText?: string;
  horizontal?: boolean;
}

export function LeadForm({ className = '', title = 'Вызвать ассенизатор', buttonText = 'Рассчитать стоимость', horizontal = false }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  if (submitted) {
    return (
      <div className={`p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-center ${className}`}>
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-emerald-800 mb-2">Спасибо!</h3>
        <p className="text-emerald-700">Мы получили вашу заявку и скоро свяжемся с вами.</p>
      </div>
    );
  }

  const formClass = horizontal 
    ? "flex flex-col md:flex-row gap-4 items-end" 
    : "space-y-4";

  return (
    <div className={`bg-white w-full rounded-3xl p-8 shadow-2xl shadow-slate-200 border border-slate-100 ${className}`}>
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      {<p className="text-sm text-slate-400 mb-6">Оставьте заявку, перезвоним за 5 минут</p>}
      <form onSubmit={handleSubmit} className={formClass}>
        <div className="flex-1 w-full">
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">Имя</label>
          <input required type="text" placeholder="Ваше имя" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 text-sm outline-none transition-colors" />
        </div>
        <div className="flex-1 w-full">
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">Телефон</label>
          <input required type="tel" placeholder="+7 (___) ___-__-__" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 text-sm outline-none transition-colors" />
        </div>
        {!horizontal && (
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="flex-1 w-full">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">Что качаем?</label>
              <select className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 text-sm outline-none transition-colors">
                <option>Септик</option>
                <option>Колодец</option>
                <option>Выгребная яма</option>
                <option>Дренажная яма</option>
                <option>Другое</option>
              </select>
            </div>
            <div className="flex-1 w-full">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">Срочность</label>
              <select className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 text-sm outline-none transition-colors">
                <option>Сегодня</option>
                <option>Завтра</option>
                <option>В удобный день</option>
              </select>
            </div>
            <div className="col-span-2 flex-1 w-full mt-[-8px]">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">Комментарий</label>
              <input type="text" placeholder="Балашиха, СНТ Ромашка..." className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 text-sm outline-none transition-colors" />
            </div>
          </div>
        )}
        <div className="w-full mt-2">
          <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-sky-200 mt-2">
            {buttonText}
          </button>
          <p className="text-[10px] text-center text-slate-400 mt-4 px-4">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
          </p>
        </div>
      </form>
    </div>
  );
}
