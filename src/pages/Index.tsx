import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import IntroScene from "@/components/IntroScene";
import PolymathCore from "@/components/PolymathCore";
import ReelChamber from "@/components/ReelChamber";
import TheForge from "@/components/TheForge";
import ContactTerminal from "@/components/ContactTerminal";
import ThemeToggle from "@/components/ThemeToggle";
import EasterEgg from "@/components/EasterEgg";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Prevent scrolling during intro
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showIntro]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => setIntroComplete(true), 1500);
  };

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {showIntro && <IntroScene onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {!showIntro && (
        <>
          <ThemeToggle />
          <EasterEgg />
          
          <main className="relative">
            <PolymathCore />
            <ReelChamber />
            <TheForge />
            <ContactTerminal />
          </main>
        </>
      )}
    </div>
  );
};

export default Index;
