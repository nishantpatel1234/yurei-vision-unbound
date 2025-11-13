import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const philosophicalQuotes = [
  "The mind is not a vessel to be filled, but a fire to be kindled.",
  "In the space between chaos and order, creativity thrives.",
  "To create is to defy the void with meaning.",
  "Every frame is a choice. Every choice is a philosophy.",
  "The polymath knows: specialization is for insects.",
  "Art is the lie that tells the truth.",
  "The only way to do great work is to become obsessed.",
  "Creation is an act of rebellion against the ordinary.",
];

const EasterEgg = () => {
  const [quote, setQuote] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Secret combo: Press 'P' three times quickly
      const now = Date.now();
      if (e.key.toLowerCase() === "p") {
        if (now - lastClickTime < 500) {
          setClickCount((prev) => prev + 1);
        } else {
          setClickCount(1);
        }
        setLastClickTime(now);

        if (clickCount >= 2) {
          showRandomQuote();
          setClickCount(0);
        }
      }
    };

    const handleTripleClick = () => {
      showRandomQuote();
    };

    window.addEventListener("keypress", handleKeyPress);
    window.addEventListener("tripleclick", handleTripleClick);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
      window.removeEventListener("tripleclick", handleTripleClick);
    };
  }, [clickCount, lastClickTime]);

  const showRandomQuote = () => {
    const randomQuote = philosophicalQuotes[Math.floor(Math.random() * philosophicalQuotes.length)];
    setQuote(randomQuote);
    setTimeout(() => setQuote(null), 5000);
  };

  return (
    <AnimatePresence>
      {quote && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 max-w-2xl"
        >
          <motion.div
            className="holographic p-6 rounded-lg border-2 border-accent"
            animate={{
              boxShadow: [
                "0 0 20px hsl(var(--accent) / 0.3)",
                "0 0 40px hsl(var(--accent) / 0.5)",
                "0 0 20px hsl(var(--accent) / 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-lg text-center italic text-accent-glow font-light">
              "{quote}"
            </p>
            <p className="text-xs text-center mt-2 text-muted-foreground">
              — Hidden wisdom unlocked
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;
