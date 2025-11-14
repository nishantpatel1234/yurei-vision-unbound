import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import PhilosophyIntro from "@/components/PhilosophyIntro";
import PhilosophyVoid from "@/components/PhilosophyVoid";
import PhilosophyCard from "@/components/PhilosophyCard";
import ShadowPhilosopher from "@/components/ShadowPhilosopher";
import ThemeToggle from "@/components/ThemeToggle";
import quotesData from "@/data/philosophyQuotes.json";

interface Quote {
  id: number;
  text: string;
  commentary: string;
  inspiration: string;
  position: [number, number, number];
}

interface HiddenQuote {
  id: number;
  text: string;
  commentary: string;
  inspiration: string;
}

const Philosophy = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedQuote, setSelectedQuote] = useState<Omit<Quote, 'position'> | null>(null);
  const [showParadox, setShowParadox] = useState(false);
  const [currentParadox, setCurrentParadox] = useState("");

  const hiddenQuotesWithPositions: Quote[] = quotesData.hiddenQuotes.map((quote, index) => ({
    ...quote,
    position: [index * 2 - 1, -3, -4] as [number, number, number]
  }));

  useEffect(() => {
    // Track cursor position for light cone effect
    const updateCursorPosition = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--mouse-x", `${x}%`);
      document.documentElement.style.setProperty("--mouse-y", `${y}%`);
    };

    window.addEventListener("mousemove", updateCursorPosition);
    return () => window.removeEventListener("mousemove", updateCursorPosition);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleParadoxClick = () => {
    const randomParadox = quotesData.paradoxes[Math.floor(Math.random() * quotesData.paradoxes.length)];
    setCurrentParadox(randomParadox);
    setShowParadox(true);
    setTimeout(() => setShowParadox(false), 5000);
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <AnimatePresence mode="wait">
        {showIntro && <PhilosophyIntro onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {!showIntro && (
        <>
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-40 p-6 flex justify-between items-center">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-white/70 hover:text-neon-cyan transition-colors group"
            >
              <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
              <span className="tracking-wider text-sm">RETURN TO CORE</span>
            </Link>

            <ThemeToggle />
          </nav>

          {/* Main void section */}
          <section className="relative">
            <PhilosophyVoid
              quotes={quotesData.quotes as Quote[]}
              hiddenQuotes={hiddenQuotesWithPositions}
              onQuoteClick={setSelectedQuote}
            />

            {/* Paradox Generator Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              onClick={handleParadoxClick}
              className="fixed bottom-6 right-6 z-30 flex items-center gap-2 px-4 py-2 bg-deep-space/80 backdrop-blur-sm border border-neon-purple/30 rounded-lg text-neon-purple hover:bg-neon-purple/10 transition-all group"
            >
              <Sparkles size={16} className="group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-sm tracking-wider">PARADOX</span>
            </motion.button>

            {/* Paradox Display */}
            <AnimatePresence>
              {showParadox && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="fixed bottom-20 right-6 z-30 max-w-md p-4 bg-deep-space/90 backdrop-blur-md border border-neon-cyan/30 rounded-lg"
                >
                  <p className="text-neon-cyan text-sm italic">
                    "{currentParadox}"
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* Shadow Philosopher Section */}
          <ShadowPhilosopher />

          {/* Philosophy Card Overlay */}
          <AnimatePresence>
            {selectedQuote && (
              <PhilosophyCard
                quote={selectedQuote}
                onClose={() => setSelectedQuote(null)}
              />
            )}
          </AnimatePresence>

          {/* Hidden symbols revealed by cursor */}
          <div className="fixed inset-0 pointer-events-none z-10 mix-blend-overlay opacity-20">
            <div className="absolute top-1/4 left-1/4 text-6xl text-neon-cyan/10 font-serif select-none">∞</div>
            <div className="absolute top-1/2 right-1/4 text-6xl text-neon-purple/10 font-serif select-none">Ω</div>
            <div className="absolute bottom-1/4 left-1/2 text-6xl text-neon-cyan/10 font-serif select-none">Ψ</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Philosophy;
