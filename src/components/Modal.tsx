import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LeadForm } from './LeadForm';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function Modal({ isOpen, onClose, title }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
          />
          <div className="fixed inset-0 overflow-y-auto z-50 pointer-events-none">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="w-full max-w-lg pointer-events-auto relative"
              >
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full text-slate-500 dark:text-slate-300 transition"
                >
                  <X className="w-5 h-5" />
                </button>
                <LeadForm
                  title={title || 'Оставить заявку'}
                  className="shadow-2xl border-0 !p-8"
                />
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
