import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { Logo } from './Logo';

const PHONE = '+7 (985) 960-97-98';
const PHONE_LINK = 'tel:+79859609798';
const WHATSAPP_LINK = 'https://wa.me/79859609798';
const TELEGRAM_LINK = 'https://t.me/septic_service';

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <Logo className="w-10 h-10" />
              <span className="font-bold text-xl leading-none">Септик-Сервис</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Профессиональная откачка септиков, колодцев и выгребных ям в Москве и Московской области.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 tracking-wider uppercase text-xs text-slate-300">Навигация</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {[
                { to: '/', label: 'Главная' },
                { to: '/services', label: 'Услуги' },
                { to: '/prices', label: 'Цены' },
                { to: '/about', label: 'О нас' },
                { to: '/contacts', label: 'Контакты' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-emerald-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 tracking-wider uppercase text-xs text-slate-300">Услуги</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Откачка септиков</li>
              <li>Откачка выгребных ям</li>
              <li>Откачка колодцев</li>
              <li>Дренажные системы</li>
              <li>Регулярное обслуживание</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 tracking-wider uppercase text-xs text-slate-300">Контакты</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={PHONE_LINK}
                  className="flex items-center gap-2 text-white font-bold text-lg hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Telegram
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400 pt-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  ул. Алексея Дикого, 16
                  <br />
                  Москва, Новогиреево
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Септик-Сервис. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy"
              className="text-xs text-slate-500 hover:text-emerald-400 transition-colors"
            >
              Политика конфиденциальности
            </Link>
            <p className="text-xs text-slate-600">Ежедневно с 8:00 до 22:00</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
