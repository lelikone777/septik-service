import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Modal } from './Modal';
import { Phone, Menu, X, Droplets, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV = [
  { to: '/', label: 'Главная' },
  { to: '/services', label: 'Услуги' },
  { to: '/prices', label: 'Цены' },
  { to: '/about', label: 'О нас' },
  { to: '/contacts', label: 'Контакты' },
];

const PHONE = '+7 (985) 960-97-98';
const PHONE_LINK = 'tel:+79859609798';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-shadow">
                <Droplets className="w-6 h-6" />
              </div>
              <div>
                <span
                  className={`font-bold text-xl tracking-tight block leading-none transition-colors ${
                    scrolled ? 'text-slate-900 dark:text-white' : 'text-white'
                  }`}
                >
                  Септик-Сервис
                </span>
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest block">
                  Москва и МО
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex gap-1">
              {NAV.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.to
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                      : scrolled
                        ? 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl transition-all ${
                  scrolled
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.div>
              </button>

              <a
                href={PHONE_LINK}
                className={`font-bold transition-colors hidden xl:block ${
                  scrolled ? 'text-slate-900 dark:text-white' : 'text-white'
                }`}
              >
                {PHONE}
              </a>

              <button
                onClick={() => setModalOpen(true)}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95"
              >
                Вызвать машину
              </button>
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all ${
                  scrolled ? 'text-slate-600 dark:text-slate-300' : 'text-white'
                }`}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileOpen(true)}
                className={`p-2 rounded-lg transition-all ${
                  scrolled ? 'text-slate-600 dark:text-slate-300' : 'text-white'
                }`}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] z-50 bg-white dark:bg-slate-900 shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-800">
                <span className="font-bold text-xl text-slate-900 dark:text-white">Меню</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 p-6 space-y-2">
                {NAV.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                      location.pathname === link.to
                        ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="p-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
                <a
                  href={PHONE_LINK}
                  className="flex items-center gap-3 text-lg font-bold text-slate-900 dark:text-white"
                >
                  <Phone className="w-5 h-5 text-emerald-500" />
                  {PHONE}
                </a>
                <button
                  onClick={() => {
                    setModalOpen(true);
                    setMobileOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-4 rounded-xl text-center shadow-lg"
                >
                  Вызвать машину
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
