import { AnimatedSection } from '../components/AnimatedSection';
import { LeadForm } from '../components/LeadForm';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

const PHONE = '+7 (985) 960-97-98';
const PHONE_LINK = 'tel:+79859609798';
const WHATSAPP_LINK = 'https://wa.me/79859609798';
const TELEGRAM_LINK = 'https://t.me/septic_service';

const CONTACT_CARDS = [
  {
    href: PHONE_LINK,
    icon: Phone,
    label: 'Телефон',
    value: PHONE,
    gradient: 'from-emerald-500 to-teal-600',
    shadow: 'shadow-emerald-500/25',
  },
  {
    href: WHATSAPP_LINK,
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Написать',
    gradient: 'from-green-500 to-emerald-600',
    shadow: 'shadow-green-500/25',
    external: true,
  },
  {
    href: TELEGRAM_LINK,
    icon: MessageCircle,
    label: 'Telegram',
    value: '@septic_service',
    gradient: 'from-sky-500 to-blue-600',
    shadow: 'shadow-sky-500/25',
    external: true,
  },
];

export default function ContactsPage() {
  return (
    <>
      <section className="relative h-[350px] sm:h-[400px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">Контакты</h1>
          <p className="text-lg text-white/70">Свяжитесь с нами любым удобным способом</p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <AnimatedSection direction="left">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">
                  Свяжитесь с нами
                </h2>
              </AnimatedSection>

              <div className="space-y-5">
                {CONTACT_CARDS.map((c, i) => (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <a
                      href={c.href}
                      {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="flex items-center gap-4 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 hover:border-emerald-200 dark:hover:border-emerald-500/30 transition-all group"
                    >
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${c.gradient} rounded-xl flex items-center justify-center text-white shadow-lg ${c.shadow} group-hover:scale-110 transition-transform`}
                      >
                        <c.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{c.label}</p>
                        <p className="text-xl font-bold text-slate-900 dark:text-white">{c.value}</p>
                      </div>
                    </a>
                  </AnimatedSection>
                ))}

                <AnimatedSection delay={0.3}>
                  <div className="flex items-center gap-4 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-amber-500/25">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Режим работы</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">
                        Ежедневно 8:00 — 22:00
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <div className="flex items-center gap-4 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                    <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-violet-500/25">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Адрес</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">
                        ул. Алексея Дикого, 16
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Москва, Новогиреево
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            <AnimatedSection direction="right">
              <LeadForm title="Оставить заявку" buttonText="Отправить заявку" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Мы на карте
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg h-[450px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.7893%2C55.7507&z=16&l=map&pt=37.7893%2C55.7507%2Cpm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                title="Карта — ул. Алексея Дикого, 16"
                className="w-full h-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              География обслуживания
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Работаем по всей Москве и Московской области
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Новогиреево',
                'Перово',
                'Балашиха',
                'Реутов',
                'Железнодорожный',
                'Люберцы',
                'Щёлково',
                'Ногинск',
                'Электроугли',
                'Старая Купавна',
                'Салтыковка',
                'Кучино',
                'Южное Измайлово',
                'Вешняки',
                'Косино',
              ].map((city) => (
                <span
                  key={city}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-500/30 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-colors cursor-default"
                >
                  {city}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
