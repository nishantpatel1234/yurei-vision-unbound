import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

interface PhilosophyIntroProps {
  onComplete: () => void;
}

const PhilosophyIntro = ({ onComplete }: PhilosophyIntroProps) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        // Auto-transition after 3 seconds or wait for user interaction
        setTimeout(onComplete, 3000);
      }
    });

    // Eye opening animation
    timeline
      .fromTo(lineRef.current, 
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.inOut"
        }
      )
      .to(lineRef.current, {
        scaleY: 30,
        duration: 1.2,
        ease: "power2.inOut"
      }, "+=0.3")
      .to(textRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      }, "-=0.5")
      .to(textRef.current, {
        letterSpacing: "0.3em",
        duration: 0.8,
        ease: "power1.inOut"
      }, "-=0.3");

  }, [onComplete]);

  const handleSkip = () => {
    // Shatter animation before transition
    gsap.to(textRef.current, {
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)",
      duration: 0.5,
      onComplete
    });
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center cursor-pointer"
      onClick={handleSkip}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      {/* The Eye Line */}
      <div 
        ref={lineRef}
        className="absolute w-1 h-px bg-white transform origin-center"
      />

      {/* Main Text */}
      <h1
        ref={textRef}
        className="font-serif text-6xl md:text-8xl text-white opacity-0 scale-75 tracking-tight"
        style={{ 
          fontFamily: "'Playfair Display', serif",
          textShadow: "0 0 20px rgba(255,255,255,0.3)"
        }}
      >
        THOUGHTS UNBOUND
      </h1>

      {/* Glitch overlay */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20">
        <div className="glitch absolute inset-0" />
      </div>

      {/* Whisper indicator */}
      <div className="absolute bottom-10 text-white/40 text-sm tracking-widest animate-pulse">
        CLICK TO ENTER THE VOID
      </div>
    </motion.div>
  );
};

export default PhilosophyIntro;
