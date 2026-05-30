import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { AnimatedSection } from '../components/AnimatedSection';
import { LeadForm } from '../components/LeadForm';
import { Modal } from '../components/Modal';
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  MapPin,
  ArrowRight,
  ShieldCheck,
  ThumbsUp,
  Star,
  Waves,
  Wrench,
  Zap,
} from 'lucide-react';

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

const PHONE_LINK = 'tel:+79859609798';
const WHATSAPP_LINK = 'https://wa.me/79859609798';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-emerald-950/60" />

        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  Дежурная машина свободна
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white mb-6"
              >
                Откачка септиков
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  в Москве и области
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg sm:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed"
              >
                Быстрый выезд, аккуратная работа, честные цены. Работаем ежедневно без выходных.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-7 py-4 rounded-xl font-bold transition-all shadow-2xl hover:shadow-white/25 hover:scale-105 active:scale-95"
                >
                  <Phone className="w-5 h-5" />
                  Позвонить
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-7 py-4 rounded-xl font-bold transition-all shadow-2xl shadow-emerald-500/25 hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-400"
              >
                {['Без скрытых доплат', 'Частные дома и СНТ', 'Шланги до 40м'].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    {t}
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <LeadForm title="Рассчитать стоимость" buttonText="Вызвать машину" />
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white/60"
            />
          </div>
        </motion.div>
      </section>

      {/* Mobile hero form */}
      <section className="lg:hidden py-8 px-4 bg-slate-50 dark:bg-slate-900">
        <LeadForm title="Рассчитать стоимость" buttonText="Вызвать машину" />
      </section>

      {/* ===== STATS ===== */}
      <section className="relative -mt-0 lg:-mt-16 z-20 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/30 border border-slate-100 dark:border-slate-700 p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 2000, suffix: '+', label: 'Выездов выполнено' },
              { value: 8, suffix: ' лет', label: 'Опыт работы' },
              { value: 50, suffix: '+', label: 'Районов обслуживания' },
              { value: 98, suffix: '%', label: 'Довольных клиентов' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADVANTAGES ===== */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Делаем всё, чтобы вам было удобно и выгодно.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: 'Москва и Подмосковье', desc: 'Выезжаем в любой район Москвы и всё Подмосковье.', color: 'from-blue-500 to-indigo-600' },
              { icon: ShieldCheck, title: 'Прозрачная стоимость', desc: 'Цена фиксируется до начала работ. Никаких доплат.', color: 'from-emerald-500 to-teal-600' },
              { icon: Waves, title: 'Откачка любых объёмов', desc: 'Септики, ямы, колодцы, резервуары любого размера.', color: 'from-cyan-500 to-blue-600' },
              { icon: ThumbsUp, title: 'Аккуратная работа', desc: 'Не портим газон, убираем за собой, работаем чисто.', color: 'from-amber-500 to-orange-600' },
              { icon: Wrench, title: 'Работаем с СНТ', desc: 'Обслуживаем частников, дачные посёлки и организации.', color: 'from-violet-500 to-purple-600' },
              { icon: Zap, title: 'Срочный выезд', desc: 'Возможен выезд в день обращения при авариях.', color: 'from-rose-500 to-pink-600' },
            ].map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-700/50 hover:border-emerald-200 dark:hover:border-emerald-500/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${a.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <a.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{a.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{a.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Полный комплекс работ по обслуживанию канализации.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Откачка септиков',
                desc: 'Очистка станций биологической очистки, удаление ила, промывка камер.',
                image:
                  'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Откачка выгребных ям',
                desc: 'Быстрая откачка ям любого типа. Подберём машину нужного объёма.',
                image:
                  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Откачка колодцев',
                desc: 'Осушение канализационных колодцев, устранение засоров и ила.',
                image:
                  'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80',
              },
            ].map((srv, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div
                  className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer h-full"
                  onClick={() => setModalOpen(true)}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">{srv.desc}</p>
                    <div className="flex items-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 gap-2 group-hover:gap-3 transition-all">
                      Заказать
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              Все услуги
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== PARALLAX CTA ===== */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-emerald-900/70 dark:bg-slate-950/80" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Чисто, быстро, надёжно
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Более 2000 успешных выездов. Доверьте работу профессионалам.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              Оставить заявку
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WORK PROCESS ===== */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Как мы работаем
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Всё просто, прозрачно и без лишних хлопот.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Оставляете заявку', desc: 'Звоните или пишите в WhatsApp. Мы оперативно отвечаем.', img: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=800&q=80' },
              { step: '02', title: 'Уточняем детали', desc: 'Узнаём адрес, объём и удобство подъезда.', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80' },
              { step: '03', title: 'Называем стоимость', desc: 'Фиксируем цену и согласовываем время.', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80' },
              { step: '04', title: 'Приезжаем к вам', desc: 'В оговорённое время спецтехника на месте.', img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80' },
              { step: '05', title: 'Выполняем откачку', desc: 'Аккуратно, чисто и профессионально.', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80' },
              { step: '06', title: 'Оплата по факту', desc: 'Платите только после завершения работ.', img: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative p-6 rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-400/40 transition-all duration-300 h-full group min-h-[200px]">
                  <img
                    src={item.img}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-slate-900/50" />
                  <div className="relative z-10">
                    <div className="text-5xl font-black text-white/10 absolute top-0 right-0 group-hover:text-emerald-400/30 transition-colors">
                      {item.step}
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-sm mb-4 shadow-lg shadow-emerald-500/30">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-200">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMAGE GALLERY STRIP ===== */}
      <section className="py-4 bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <div className="flex gap-4 animate-scroll">
          {[
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&h=300&q=80',
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&h=300&q=80',
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=400&h=300&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&h=300&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&h=300&q=80',
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&h=300&q=80',
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&h=300&q=80',
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=400&h=300&q=80',
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-[300px] h-[200px] object-cover rounded-xl flex-shrink-0"
            />
          ))}
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Нам доверяют сотни владельцев частных домов.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Михаил',
                loc: 'Новогиреево',
                text: 'Машина приехала через час после звонка. Откачали 4 куба из колодца очень аккуратно, газон не помяли. Цена как договаривались!',
              },
              {
                name: 'Елена',
                loc: 'СНТ «Рассвет»',
                text: 'Ребята работают на совесть. Была сложная ситуация со старой выгребной ямой, всё прочистили. Обращаемся каждый сезон.',
              },
              {
                name: 'Сергей Иванович',
                loc: 'Балашиха',
                text: 'Адекватные цены и нормальное отношение. Водитель опытный, заехал на участок ювелирно. Рекомендую соседям.',
              },
              {
                name: 'Анна',
                loc: 'Реутов',
                text: 'Вызывали срочно — септик переполнился перед выходными. Приехали вечером того же дня. Спасли ситуацию!',
              },
            ].map((rev, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50 flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-300">
                  <div>
                    <div className="flex text-amber-400 mb-3 gap-0.5">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                      &laquo;{rev.text}&raquo;
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{rev.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{rev.loc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA + FORM ===== */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-emerald-900 dark:to-teal-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80)',
          }}
        />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight break-words">
              Готовы заказать откачку?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-emerald-100 max-w-xl mx-auto">
              Заполните форму, и мы перезвоним в течение 5 минут.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <LeadForm title="" horizontal buttonText="Отправить заявку" />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
