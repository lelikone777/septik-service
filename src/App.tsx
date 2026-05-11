import React, { useState } from 'react';
import { LeadForm } from './components/LeadForm';
import { Modal } from './components/Modal';
import { motion } from 'motion/react';
import { 
  Phone, MessageCircle, MapPin, CheckCircle2, Droplets, Droplets as Water, 
  Settings, Clock, ArrowRight, ShieldCheck, Truck, ThumbsUp, Menu, X, Star
} from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Phone numbers and links
  const phone = "+7 (999) 000-00-00";
  const phoneLink = "tel:+79990000000";
  const whatsappLink = "wa.me/79990000000";
  const telegramLink = "https://t.me/septic_service";

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-white selection:bg-sky-100 selection:text-sky-900">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center shadow-lg shadow-sky-200">
                <Droplets className="w-6 h-6" />
              </div>
              <div>
                <span className="font-bold text-xl text-slate-900 tracking-tight block leading-none">Септик-Сервис</span>
                <span className="text-[10px] text-sky-600 font-bold uppercase tracking-widest block">Балашиха и МО</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors">Услуги</a>
              <a href="#prices" className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors">Цены</a>
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors">О нас</a>
              <a href="#reviews" className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors">Отзывы</a>
              <a href="#contacts" className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors">Контакты</a>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-6">
              <a href={phoneLink} className="flex flex-col items-end group">
                <span className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{phone}</span>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span> работаем сейчас
                </span>
              </a>
              <button onClick={() => setIsModalOpen(true)} className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition shadow-lg shadow-sky-200">
                Вызвать машину
              </button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden flex flex-col pt-6 pb-8 px-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center shadow-lg shadow-sky-200">
                <Droplets className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl text-slate-900 leading-none">Септик-Сервис</span>
            </div>
            <button onClick={closeMenu} className="p-2 bg-slate-100 rounded-lg text-slate-600">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="flex flex-col gap-6 text-xl font-medium text-slate-800">
            <a href="#services" onClick={closeMenu}>Услуги</a>
            <a href="#prices" onClick={closeMenu}>Цены</a>
            <a href="#about" onClick={closeMenu}>О нас</a>
            <a href="#reviews" onClick={closeMenu}>Отзывы</a>
            <a href="#contacts" onClick={closeMenu}>Контакты</a>
          </nav>

          <div className="mt-auto space-y-4 pt-10 border-t border-slate-100">
            <a href={phoneLink} className="flex items-center gap-3 text-lg font-bold text-slate-900">
              <Phone className="w-5 h-5 text-sky-600" />
              {phone}
            </a>
            <button onClick={() => { setIsModalOpen(true); closeMenu(); }} className="w-full bg-sky-600 text-white font-semibold py-4 rounded-xl text-center">
              Вызвать машину
            </button>
          </div>
        </div>
      )}

      <main>
        {/* HERO */}
        <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-slate-50">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <div className="col-span-7 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left flex flex-col justify-center gap-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                  </span>
                  Дежурная машина в Балашихе
                </div>
                <h1 className="text-5xl font-black leading-tight tracking-tight text-slate-900 my-4">
                  Откачка септиков и колодцев в Балашихе <span className="text-sky-600">и области</span>
                </h1>
                <p className="text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 mb-8">
                  Быстрый выезд, аккуратная работа, честные цены. Принимаем заявки каждый день.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href={phoneLink} className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-slate-300 mt-0">
                    <Phone className="w-5 h-5" />
                    Позвонить
                  </a>
                  <a href={`https://${whatsappLink}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-600 transition shadow-lg shadow-emerald-200">
                    <MessageCircle className="w-5 h-5" />
                    Написать в WhatsApp
                  </a>
                </div>
                {/* Trust badges */}
                <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Без скрытых доплат</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Частные дома и СНТ</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Шланги до 40м</div>
                </div>
              </div>

              {/* Form on Hero */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="col-span-5 relative w-full flex items-center"
              >
                {/* Decorative blob */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-sky-400 to-blue-200 rounded-3xl blur-2xl opacity-30 transform -rotate-3"></div>
                <LeadForm title="Рассчитать стоимость" buttonText="Вызвать машину" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ADVANTAGES */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: MapPin, title: "Выезд по Балашихе и МО", desc: "Быстро отправляем машину в любой район Балашихи, Железнодорожного и соседних округов." },
                { icon: ShieldCheck, title: "Прозрачная стоимость", desc: "Цена фиксируется до начала работ. Никаких наднакруток на месте." },
                { icon: Water, title: "Откачка любых объемов", desc: "Септики, выгребные ямы, колодцы, резервуары. Помогаем подобрать нужный объем машины." },
                { icon: ThumbsUp, title: "Аккуратная работа", desc: "Не портим газон, аккуратно подъезжаем к участку, убираем за собой." },
                { icon: ShieldCheck, title: "Работаем с СНТ и домами", desc: "Обслуживаем частников, дачные поселки и небольшие организации." },
                { icon: Clock, title: "Срочный выезд", desc: "Возможен выезд в день обращения при аварийных ситуациях." }
              ].map((adv, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 mb-6">
                    <adv.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{adv.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Наши услуги</h2>
              <p className="text-lg text-slate-600">Мы выполняем весь комплекс работ по обслуживанию канализации и водоотведения.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Откачка септиков", desc: "Очистка станций биологической очистки, удаление ила, промывка." },
                { title: "Откачка выгребных ям", desc: "Быстрая откачка ям любого типа. Подберем машину нужного объема." },
                { title: "Откачка колодцев", desc: "Осушение канализационных колодцев, устранение засоров и ила." },
                { title: "Дренажные ямы", desc: "Очистка дренажных систем и ливневой канализации от отложений." },
                { title: "Технические резервуары", desc: "Откачка воды из подвалов, бассейнов, строительных котлованов." },
                { title: "Регулярное обслуживание", desc: "Заключаем договор на постоянную откачку для частных домов и СНТ." },
              ].map((srv, idx) => (
                <div key={idx} className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-sky-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer" onClick={() => setIsModalOpen(true)}>
                  <div className="flex-1 mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">{srv.title}</h3>
                    <p className="text-slate-600">{srv.desc}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm font-semibold text-sky-600">
                    Заказать услугу
                    <div className="p-2 bg-sky-50 rounded-full group-hover:bg-sky-100 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-sky-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80')] opacity-10 bg-cover mix-blend-overlay"></div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Не нашли что нужно?</h3>
                <p className="text-sky-100 mb-8 text-lg">Оставьте заявку, и мы проконсультируем вас по любой проблеме с канализацией или отводом воды.</p>
                <button onClick={() => setIsModalOpen(true)} className="bg-white text-sky-600 hover:bg-slate-50 font-bold py-3.5 px-8 rounded-xl transition-colors shadow-lg">
                  Бесплатная консультация
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* PRICES */}
        <section id="prices" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Примерные цены</h2>
              <p className="text-lg text-slate-600">Точная стоимость зависит от объёма, расстояния, подъезда к участку и сложности работ.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white border text-lg border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                {[
                  { name: "Откачка септика", price: "от 2500 ₽" },
                  { name: "Откачка выгребной ямы", price: "от 2500 ₽" },
                  { name: "Откачка канализационного колодца", price: "от 3000 ₽" },
                  { name: "Срочный выезд", price: "по договорённости" },
                  { name: "Выезд за пределы Балашихи", price: "рассчитывается индивидуально" }
                ].map((item, idx) => (
                  <div key={idx} className={`flex justify-between items-center p-5 sm:p-6 ${idx !== 0 ? 'border-t border-slate-100' : ''} hover:bg-slate-50 transition-colors`}>
                    <span className="font-semibold text-slate-800 pr-4">{item.name}</span>
                    <span className="font-bold text-sky-600 whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-slate-500 mb-6">Чтобы узнать точную цену для вашей ситуации, просто позвоните нам!</p>
                <a href={phoneLink} className="inline-block text-lg font-bold text-slate-900 hover:text-sky-600 border-b-2 border-sky-600 pb-1 px-2 transition-all">
                  {phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WORK PROCESS */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Как мы работаем</h2>
              <p className="text-slate-400 text-lg">Всё просто, прозрачно и без лишних проблем для вас.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Вы оставляете заявку", desc: "Звоните нам или пишите в WhatsApp. Мы оперативно отвечаем." },
                { step: "02", title: "Мы уточняем детали", desc: "Узнаем адрес, примерный объём и удобство подъезда машины." },
                { step: "03", title: "Называем стоимость", desc: "Фиксируем цену работ и согласовываем с вами время визита." },
                { step: "04", title: "Приезжаем на участок", desc: "В оговоренное время наша спецтехника будет у вас." },
                { step: "05", title: "Выполняем откачку", desc: "Делаем свою работу аккуратно, чисто и профессионально." },
                { step: "06", title: "Вы оплачиваете работу", desc: "Оплата происходит только после полного завершения работ." },
              ].map((item, idx) => (
                <div key={idx} className="relative p-6 border border-slate-800 rounded-2xl bg-slate-800/50">
                  <div className="text-5xl font-black text-slate-700/50 absolute top-4 right-4 pointer-events-none">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3 mt-4 text-white relative z-10">{item.title}</h3>
                  <p className="text-slate-400 relative z-10 relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GEOGRAPHY & SYMPTOMS */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Geography */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-8 h-8 text-sky-600" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">География работы</h2>
                </div>
                <p className="text-slate-600 mb-6 text-lg">Работаем в Балашихе и рядом:</p>
                <ul className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
                  {["Балашиха", "Железнодорожный", "Реутов", "Люберцы", "Щёлково", "Ногинск", "Электроугли", "Старая Купавна", "Салтыковка", "Никольско-Архангельский"].map((city, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-800 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
                      {city}
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-sky-50 rounded-xl text-sky-800 text-sm font-medium border border-sky-100">
                   Если вашего населённого пункта нет в списке — оставьте заявку, мы уточним возможность выезда.
                </div>
              </div>

              {/* When to call */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="w-8 h-8 text-emerald-500" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Когда вызывать нас</h2>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    "Септик быстро наполняется или переполнен",
                    "Появился стойкий неприятный запах на участке",
                    "Вода в раковине и ванной плохо уходит",
                    "Колодец переполнен или заилен",
                    "Участок подтапливает после дождей",
                    "Подошло время регулярного обслуживания"
                  ].map((symptom, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-lg leading-snug">{symptom}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md">
                  Оставить заявку на откачку
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">О нас</h2>
            <p className="mb-6">
              Мы профессионально занимаемся откачкой септиков, колодцев и выгребных ям в Балашихе и Московской области. 
              Многолетний опыт позволяет нам решать задачи любой сложности.
            </p>
            <p>
              Работаем с частными домами, дачами, СНТ и небольшими организациями. 
              Наша главная задача — быстро приехать, <strong className="text-slate-900 font-bold">аккуратно выполнить работу</strong> и заранее согласовать стоимость <strong className="text-slate-900 font-bold">без скрытых доплат</strong>.
            </p>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Отзывы клиентов</h2>
              <p className="text-lg text-slate-600">Нам доверяют сотни владельцев частных домов в Подмосковье.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Михаил", loc: "Балашиха, частный сектор", text: "Машина приехала через час после звонка. Откачали 4 куба из колодца очень аккуратно, газон не помяли. Цена как договаривались. Спасибо!" },
                { name: "Елена", loc: "СНТ под Железнодорожным", text: "Ребята работают на совесть. Была сложная ситуация со старой выгребной ямой, всё прочистили. Теперь обращаемся только к ним каждый сезон." },
                { name: "Сергей Иванович", loc: "Салтыковка", text: "Адекватные цены и нормальное отношение. Водитель опытный, заехал на участок ювелирно, хотя места очень мало. Рекомендую соседям." },
                { name: "Анна", loc: "Старая Купавна", text: "Вызывали срочно, так как септик переполнился перед выходными. Договорились, приехали вечером того же дня. Спасли ситуацию!" }
              ].map((rev, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex text-yellow-400 mb-3">
                      {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-slate-700 italic mb-6">«{rev.text}»</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{rev.name}</p>
                    <p className="text-sm text-slate-500">{rev.loc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Частые вопросы</h2>
            </div>
            
            <div className="space-y-6">
              {[
                { q: "Сколько стоит откачка септика?", a: "Базовая стоимость начинается от 2500 руб. Итоговая цена зависит от расстояния (в пределах Балашихи или выезд в область) и объема, который необходимо откачать." },
                { q: "Как быстро вы приезжаете?", a: "Мы стараемся приезжать в день звонка, особенно при аварийных ситуациях. Обычно время планируется заранее в удобный для вас день." },
                { q: "Нужно ли быть дома во время откачки?", a: "Желательно, чтобы кто-то был на участке для обеспечения доступа к септику (открыть ворота, показать место). Но если это невозможно, мы можем обо всем договориться дистанционно." },
                { q: "Что делать, если нет удобного подъезда?", a: "В нашем распоряжении длинные шланги, которые позволяют осуществлять откачку на расстоянии до 30-40 метров без заезда машины непосредственно на газон или плитку." },
                { q: "Работаете ли вы в СНТ?", a: "Да, мы активно работаем с дачными участками и СНТ в Балашихе, Железнодорожном, Купавне и других соседних районах." },
              ].map((faq, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM FORM */}
        <section className="py-20 bg-sky-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Готовы заказать откачку?</h2>
            <p className="text-lg text-slate-600 mb-10">Заполните форму ниже, и мы перезвоним вам в течение 5 минут.</p>
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100 text-left">
              <LeadForm title="" horizontal={true} />
            </div>
          </div>
        </section>

        {/* CONTACTS MAP */}
        <section id="contacts" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
              <div className="md:w-1/2 p-10 lg:p-16 text-white flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">Наши контакты</h2>
                <div className="space-y-6">
                  <a href={phoneLink} className="flex items-center gap-4 text-xl font-medium hover:text-sky-400 transition-colors">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    {phone}
                  </a>
                  <a href={`https://${whatsappLink}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl font-medium hover:text-green-400 transition-colors">
                    <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    WhatsApp
                  </a>
                  <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl font-medium hover:text-blue-400 transition-colors">
                    <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" /> {/* Replace icon if needed */}
                    </div>
                    @septic_service
                  </a>
                  <div className="flex justify-start pt-6 border-t border-slate-800">
                    <div className="space-y-4 text-slate-400 font-medium">
                      <p><strong>График:</strong> Ежедневно с 8:00 до 22:00</p>
                      <p><strong>Город:</strong> Балашиха, Московская область</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-slate-100 min-h-[400px] relative">
                 {/* Map Placeholder */}
                 <div className="absolute inset-0 flex items-center justify-center relative bg-slate-200">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <div className="text-center relative z-10 px-6">
                      <MapPin className="w-12 h-12 text-sky-500 mx-auto mb-3 opacity-50" />
                      <p className="text-slate-500 font-bold uppercase tracking-widest">Карта Балашихи</p>
                      <p className="text-sm text-slate-400 mt-2">Здесь можно разместить Яндекс.Карты</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-sky-500 text-white rounded-lg flex items-center justify-center shadow-lg shadow-sky-200">
                  <Droplets className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg text-slate-900 leading-none">Септик-Сервис Балашиха</span>
              </div>
              <p className="text-sm text-slate-600 mb-6 max-w-xs">Откачка септиков, колодцев и выгребных ям в Балашихе и Московской области.</p>
            </div>
            
            <div className="flex gap-16 md:justify-center">
              <div>
                <h4 className="font-bold text-slate-900 mb-4 tracking-wider uppercase text-xs">Меню</h4>
                <ul className="space-y-3 text-sm text-slate-600 font-medium">
                  <li><a href="#services" className="hover:text-sky-600 transition-colors">Услуги</a></li>
                  <li><a href="#prices" className="hover:text-sky-600 transition-colors">Цены</a></li>
                  <li><a href="#about" className="hover:text-sky-600 transition-colors">О нас</a></li>
                  <li><a href="#reviews" className="hover:text-sky-600 transition-colors">Отзывы</a></li>
                </ul>
              </div>
            </div>

            <div className="md:text-right">
              <h4 className="font-bold text-slate-900 mb-4 tracking-wider uppercase text-xs">Связь</h4>
              <ul className="space-y-3 text-sm font-medium mb-6">
                <li><a href={phoneLink} className="text-slate-900 hover:text-sky-600 text-lg sm:text-xl font-bold transition-colors">{phone}</a></li>
                <li><a href={`https://${whatsappLink}`} className="text-emerald-600 hover:text-emerald-700 transition-colors flex items-center md:justify-end gap-1"><MessageCircle className="w-4 h-4"/> WhatsApp</a></li>
                <li><a href={telegramLink} className="text-blue-500 hover:text-blue-600 transition-colors flex items-center md:justify-end gap-1"><MessageCircle className="w-4 h-4"/> Telegram</a></li>
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="inline-block bg-white text-slate-900 font-semibold px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors text-sm shadow-sm">
                Заказать звонок
              </button>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} Септик-Сервис Балашиха. Все права защищены.</p>
            <p className="text-xs text-slate-400">Сайт не является публичной офертой.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
