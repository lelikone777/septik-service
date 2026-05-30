import { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Modal } from '../components/Modal';
import { CheckCircle2, ChevronDown } from 'lucide-react';

const PHONE = '+7 (985) 960-97-98';
const PHONE_LINK = 'tel:+79859609798';

const PRICES = [
  { name: 'Откачка септика', price: 'от 2 500 ₽', note: 'Зависит от объёма' },
  { name: 'Откачка выгребной ямы', price: 'от 2 500 ₽', note: 'Зависит от объёма' },
  { name: 'Откачка канализационного колодца', price: 'от 3 000 ₽', note: '' },
  { name: 'Промывка системы', price: 'от 5 000 ₽', note: '' },
  { name: 'Срочный выезд', price: 'по договорённости', note: 'В день обращения' },
  { name: 'Выезд за МКАД', price: 'индивидуально', note: 'Зависит от расстояния' },
];

const FAQS = [
  {
    q: 'Сколько стоит откачка септика?',
    a: 'Базовая стоимость начинается от 2500 руб. Итоговая цена зависит от расстояния и объёма, который необходимо откачать.',
  },
  {
    q: 'Как быстро вы приезжаете?',
    a: 'Стараемся приезжать в день звонка, особенно при аварийных ситуациях. Обычно согласовываем удобное для вас время.',
  },
  {
    q: 'Нужно ли быть дома во время откачки?',
    a: 'Желательно — для обеспечения доступа к септику. Но можно договориться дистанционно.',
  },
  {
    q: 'Что делать, если нет удобного подъезда?',
    a: 'У нас длинные шланги до 30–40 метров. Не нужно заезжать машиной непосредственно на газон или плитку.',
  },
  {
    q: 'Работаете ли вы в СНТ?',
    a: 'Да, активно работаем с дачными участками и СНТ по всей Москве и Подмосковью.',
  },
];

export default function PricesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section className="relative h-[350px] sm:h-[400px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">Цены</h1>
          <p className="text-lg text-white/70">Честные цены без скрытых доплат</p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm">
              {PRICES.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 sm:p-6 gap-2 ${
                    idx !== 0 ? 'border-t border-slate-100 dark:border-slate-700/50' : ''
                  } hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors`}
                >
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-white text-lg">
                      {item.name}
                    </span>
                    {item.note && (
                      <span className="text-sm text-slate-400 ml-2">({item.note})</span>
                    )}
                  </div>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 text-lg whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-12 text-center">
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              Для точного расчёта позвоните нам
            </p>
            <a
              href={PHONE_LINK}
              className="inline-block text-2xl font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {PHONE}
            </a>
          </AnimatedSection>

          <AnimatedSection className="mt-16 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-500/10 dark:to-teal-500/10 rounded-2xl p-8 border border-emerald-100 dark:border-emerald-500/20">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Что включено в стоимость
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Выезд на объект',
                'Работа оператора',
                'Использование шлангов',
                'Утилизация отходов',
                'Осмотр и рекомендации',
                'Гарантия чистоты',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Частые вопросы
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <button
                  className="w-full text-left bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 overflow-hidden transition-all"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex justify-between items-center p-6">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white pr-4">
                      {faq.q}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === i ? 'max-h-40 pb-6' : 'max-h-0'
                    }`}
                  >
                    <p className="px-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Нужна точная стоимость?
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
              Оставьте заявку, рассчитаем стоимость для вашего случая
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95"
            >
              Рассчитать стоимость
            </button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
