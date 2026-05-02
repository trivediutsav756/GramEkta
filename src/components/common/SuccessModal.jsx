import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SuccessModal = ({ isOpen, onClose, title = "Thank You!", message = "Your submission was successful.", buttonText = "Back to Home", redirectPath = "/" }) => {
  const navigate = useNavigate();

  const handleAction = () => {
    onClose();
    if (redirectPath) {
      navigate(redirectPath);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.2)] overflow-hidden"
          >
            {/* Top Pattern/Decoration */}
            <div className="h-32 bg-[#17745f] relative flex items-center justify-center overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <svg width="100%" height="100%" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                </svg>
              </div>
              
              {/* Animated Checkmark Circle */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg relative z-10"
              >
                <Check className="w-10 h-10 text-[#17745f]" strokeWidth={3} />
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-8 text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">{title}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {message}
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleAction}
                  className="w-full py-4 bg-[#f5b000] text-white font-bold rounded-2xl shadow-[0_10px_20px_rgba(245,176,0,0.3)] hover:bg-[#e0a100] hover:shadow-[0_15px_25px_rgba(245,176,0,0.4)] transition-all transform hover:-translate-y-1 active:translate-y-0"
                >
                  {buttonText}
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-3 text-gray-400 font-medium hover:text-gray-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Close Button (X) */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
