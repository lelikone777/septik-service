import { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Modal } from '../components/Modal';
import { ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    title: 'Откачка септиков',
    desc: 'Профессиональная очистка станций биологической очистки всех типов. Удаление ила, промывка камер, проверка работоспособности. Работаем с Топас, Астра, Юнилос и другими системами.',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Откачка выгребных ям',
    desc: 'Быстрая и полная откачка выгребных ям любого типа и объёма. Подберём машину нужной вместимости. Работаем аккуратно, без запаха и грязи на участке.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Откачка колодцев',
    desc: 'Осушение канализационных и дренажных колодцев. Устранение засоров, удаление ила и отложений. Восстановление нормального водоотведения.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Дренажные системы',
    desc: 'Очистка дренажных систем и ливневой канализации от отложений и мусора. Промывка дренажных труб, восстановление проходимости.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Технические резервуары',
    desc: 'Откачка воды из подвалов, бассейнов, строительных котлованов и других технических ёмкостей. Оперативный выезд в аварийных ситуациях.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Регулярное обслуживание',
    desc: 'Заключаем договор на постоянную откачку для частных домов, СНТ и организаций. Выгодные условия при регулярном обслуживании.',
    image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=800&q=80',
  },
];

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section className="relative h-[350px] sm:h-[400px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">Наши услуги</h1>
          <p className="text-lg text-white/70">
            Полный комплекс работ по обслуживанию канализации и водоотведения
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {SERVICES.map((srv, idx) => (
              <AnimatedSection key={idx} direction={idx % 2 === 0 ? 'left' : 'right'}>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div
                    className={`relative rounded-2xl overflow-hidden h-[280px] sm:h-[350px] group ${
                      idx % 2 === 1 ? 'md:order-2' : ''
                    }`}
                  >
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      {srv.title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {srv.desc}
                    </p>
                    <button
                      onClick={() => setModalOpen(true)}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95 self-start"
                    >
                      Заказать
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 dark:bg-black text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Не нашли нужную услугу?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Позвоните нам — проконсультируем по любому вопросу.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:from-emerald-600 hover:to-teal-700 transition-all shadow-2xl shadow-emerald-500/25 hover:scale-105 active:scale-95"
            >
              Бесплатная консультация
            </button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
