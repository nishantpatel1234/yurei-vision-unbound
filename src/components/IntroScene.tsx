import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

interface IntroSceneProps {
  onComplete: () => void;
}

const IntroScene = ({ onComplete }: IntroSceneProps) => {
  const [showSubtext, setShowSubtext] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Glitch effect on title
    if (titleRef.current) {
      gsap.to(titleRef.current, {
        duration: 0.1,
        opacity: 0,
        repeat: 5,
        yoyo: true,
        delay: 0.5,
        onComplete: () => {
          setShowSubtext(true);
        },
      });
    }

    // Cursor distortion effect
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-deep-space"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.5 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed w-8 h-8 border-2 border-neon-cyan rounded-full mix-blend-difference z-[60]"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="text-center space-y-8 px-4">
        <motion.h1
          ref={titleRef}
          className="text-7xl md:text-9xl font-black tracking-wider glitch glow-cyan"
          style={{ fontFamily: "Orbitron, sans-serif" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          YUREI SAVAGE
        </motion.h1>

        <AnimatePresence>
          {showSubtext && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-3xl text-primary-glow font-light tracking-wide">
                A mind unbound. A creator of everything.
              </p>

              <motion.button
                onClick={onComplete}
                className="group relative px-8 py-4 bg-transparent border-2 border-neon-cyan text-neon-cyan font-semibold text-lg overflow-hidden transition-all duration-300 hover:text-background"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">ENTER THE POLYMATH</span>
                <motion.div
                  className="absolute inset-0 bg-neon-cyan"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <p className="text-sm text-muted-foreground animate-pulse">
                Scroll or click to continue
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default IntroScene;
