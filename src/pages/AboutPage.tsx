import { useState, useEffect, useRef } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ShieldCheck, Clock, Users, Award } from 'lucide-react';

function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted.current) {
        counted.current = true;
        let cur = 0;
        const step = end / 125;
        const timer = setInterval(() => {
          cur += step;
          if (cur >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(cur));
          }
        }, 16);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  );
}

const GALLERY = [
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
];

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[350px] sm:h-[400px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">О компании</h1>
          <p className="text-lg text-white/70">Профессиональная откачка с 2016 года</p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative rounded-2xl overflow-hidden h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Частный дом"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-white font-bold text-lg">
                    Обслуживаем частные дома по всей Москве и МО
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Мы — команда профессионалов
              </h2>
              <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  «Септик-Сервис» профессионально занимается откачкой септиков, колодцев и выгребных
                  ям в Москве и Московской области с 2016 года.
                </p>
                <p>
                  За это время мы выполнили более 2000 выездов и помогли тысячам владельцев частных
                  домов и дач решить проблемы с канализацией.
                </p>
                <p>
                  Наша главная задача — быстро приехать,{' '}
                  <strong className="text-slate-900 dark:text-white">аккуратно выполнить работу</strong>{' '}
                  и заранее согласовать стоимость{' '}
                  <strong className="text-slate-900 dark:text-white">без скрытых доплат</strong>.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, value: 2000, suffix: '+', label: 'Клиентов обслужили' },
              { icon: Clock, value: 8, suffix: ' лет', label: 'Работаем на рынке' },
              { icon: ShieldCheck, value: 98, suffix: '%', label: 'Довольных клиентов' },
              { icon: Award, value: 50, suffix: '+', label: 'Районов обслуживания' },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                  <stat.icon className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                  <div className="text-3xl font-black text-slate-900 dark:text-white">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Наши принципы
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Честность',
                desc: 'Называем цену до начала работ и не меняем её на месте.',
              },
              {
                title: 'Аккуратность',
                desc: 'Бережно относимся к вашему участку. Убираем за собой.',
              },
              {
                title: 'Пунктуальность',
                desc: 'Приезжаем в оговорённое время. Предупреждаем о задержках.',
              },
              {
                title: 'Профессионализм',
                desc: 'Опытные операторы, современная техника, проверенные методы.',
              },
              {
                title: 'Ответственность',
                desc: 'Несём полную ответственность за качество работ.',
              },
              {
                title: 'Доступность',
                desc: 'Работаем ежедневно с 8:00 до 22:00. Всегда на связи.',
              },
            ].map((val, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 h-full hover:border-emerald-200 dark:hover:border-emerald-500/30 transition-colors">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">{val.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Объекты, которые мы обслуживаем
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Частные дома, дачи, СНТ по всей Москве и области
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((src, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
