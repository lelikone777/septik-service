import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

interface LeadFormProps {
  className?: string;
  title?: string;
  buttonText?: string;
  horizontal?: boolean;
}

// Форматирует ввод в маску РФ: +7 (XXX) XXX-XX-XX
function formatPhone(raw: string): string {
  let digits = raw.replace(/\D/g, '');
  // нормализуем код страны: ведущие 8 или 7 трактуем как +7
  if (digits.startsWith('8')) digits = '7' + digits.slice(1);
  if (!digits.startsWith('7')) digits = '7' + digits;
  digits = digits.slice(0, 11); // 7 + 10 цифр

  const rest = digits.slice(1); // 10 цифр номера
  let out = '+7';
  if (rest.length > 0) out += ' (' + rest.slice(0, 3);
  if (rest.length >= 3) out += ')';
  if (rest.length > 3) out += ' ' + rest.slice(3, 6);
  if (rest.length > 6) out += '-' + rest.slice(6, 8);
  if (rest.length > 8) out += '-' + rest.slice(8, 10);
  return out;
}

export function LeadForm({
  className = '',
  title = 'Вызвать ассенизатор',
  buttonText = 'Рассчитать стоимость',
  horizontal = false,
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const phoneDigits = phone.replace(/\D/g, '');
  const phoneValid = phoneDigits.length === 11;

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
    if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: { name?: string; phone?: string } = {};
    if (name.trim().length < 2) nextErrors.name = 'Укажите имя';
    if (!phoneValid) nextErrors.phone = 'Введите номер полностью';
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setSubmitted(true);
    setName('');
    setPhone('');
    setErrors({});
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <div
        className={`p-8 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-3xl text-center ${className}`}
      >
        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-2">Спасибо!</h3>
        <p className="text-emerald-700 dark:text-emerald-400">
          Мы получили вашу заявку и скоро свяжемся с вами.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500';

  return (
    <div
      className={`bg-white dark:bg-slate-800/50 dark:backdrop-blur-xl w-full rounded-3xl p-5 sm:p-8 shadow-2xl shadow-slate-200/50 dark:shadow-black/20 border border-slate-100 dark:border-white/10 ${className}`}
    >
      {title && (
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{title}</h3>
      )}
      <p className="text-sm text-slate-400 dark:text-slate-500 mb-6">
        Оставьте заявку, перезвоним за 5 минут
      </p>
      <form
        onSubmit={handleSubmit}
        className={
          horizontal
            ? 'flex flex-col md:flex-row md:flex-wrap gap-4 md:items-end'
            : 'space-y-4'
        }
      >
        <div className="w-full md:flex-1 md:min-w-[180px]">
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">
            Имя
          </label>
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={handleNameChange}
            aria-invalid={!!errors.name}
            className={`${inputClass} ${errors.name ? '!border-red-500 focus:!ring-red-500' : ''}`}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1 ml-1">{errors.name}</p>}
        </div>
        <div className="w-full md:flex-1 md:min-w-[180px]">
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">
            Телефон
          </label>
          <input
            type="tel"
            inputMode="tel"
            placeholder="+7 (___) ___-__-__"
            value={phone}
            onChange={handlePhoneChange}
            aria-invalid={!!errors.phone}
            className={`${inputClass} ${errors.phone ? '!border-red-500 focus:!ring-red-500' : ''}`}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1 ml-1">{errors.phone}</p>}
        </div>
        {!horizontal && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="flex-1 w-full">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">
                Что качаем?
              </label>
              <select className={inputClass}>
                <option>Септик</option>
                <option>Колодец</option>
                <option>Выгребная яма</option>
                <option>Дренажная яма</option>
                <option>Другое</option>
              </select>
            </div>
            <div className="flex-1 w-full">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">
                Срочность
              </label>
              <select className={inputClass}>
                <option>Сегодня</option>
                <option>Завтра</option>
                <option>В удобный день</option>
              </select>
            </div>
            <div className="sm:col-span-2 flex-1 w-full">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">
                Комментарий
              </label>
              <input
                type="text"
                placeholder="Район, СНТ, подробности..."
                className={inputClass}
              />
            </div>
          </div>
        )}
        <div className={horizontal ? 'w-full md:w-auto md:shrink-0' : 'w-full mt-2'}>
          <button
            type="submit"
            className="w-full md:w-auto whitespace-nowrap bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            {buttonText}
          </button>
        </div>
        <p className={`text-[10px] text-center text-slate-400 dark:text-slate-500 px-4 ${horizontal ? 'w-full md:mt-1' : 'mt-2'}`}>
          Нажимая кнопку, вы соглашаетесь с{' '}
          <Link
            to="/privacy"
            className="underline hover:text-emerald-500 transition-colors"
          >
            политикой конфиденциальности
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
