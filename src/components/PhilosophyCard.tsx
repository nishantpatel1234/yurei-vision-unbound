import { motion } from "framer-motion";
import { X } from "lucide-react";

interface PhilosophyCardProps {
  quote: {
    id: number;
    text: string;
    commentary: string;
    inspiration: string;
  };
  onClose: () => void;
}

const PhilosophyCard = ({ quote, onClose }: PhilosophyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full bg-gradient-to-br from-deep-space to-black border border-neon-cyan/20 rounded-lg p-8 md:p-12 overflow-hidden"
      >
        {/* Ink spreading effect background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/30 to-transparent animate-pulse" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-neon-cyan transition-colors"
        >
          <X size={24} />
        </button>

        {/* Quote text */}
        <div className="relative z-10">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl text-white mb-8 leading-tight"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              textShadow: "0 0 30px rgba(0, 255, 255, 0.3)"
            }}
          >
            "{quote.text}"
          </motion.h2>

          {/* Commentary */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="border-l-2 border-neon-cyan/50 pl-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {quote.commentary}
              </p>
            </div>

            {/* Inspiration */}
            <div className="flex items-center gap-2 text-neon-purple text-sm tracking-widest">
              <span className="opacity-50">INSPIRED BY</span>
              <span className="glow-purple">{quote.inspiration.toUpperCase()}</span>
            </div>
          </motion.div>

          {/* Return button */}
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            onClick={onClose}
            className="mt-8 px-6 py-3 bg-transparent border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 transition-all rounded tracking-wider text-sm"
          >
            RETURN TO THE VOID
          </motion.button>
        </div>

        {/* Decorative glitch lines */}
        <div className="absolute top-0 right-0 w-64 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-30 animate-pulse" />
      </motion.div>
    </motion.div>
  );
};

export default PhilosophyCard;
