import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ShadowPhilosopher = () => {
  const silhouetteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Breathing animation
    if (silhouetteRef.current) {
      gsap.to(silhouetteRef.current, {
        scale: 1.02,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden py-20 px-4"
    >
      {/* Background glitch effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="glitch absolute inset-0" />
      </div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Silhouette side */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Silhouette figure */}
            <div
              ref={silhouetteRef}
              className="w-64 h-96 bg-gradient-to-b from-neon-cyan/10 to-transparent rounded-full blur-3xl relative"
            >
              {/* Glitch lines */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-0 right-0 h-px bg-neon-cyan/30 animate-pulse" />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-neon-purple/30 animate-pulse" style={{ animationDelay: "0.5s" }} />
                <div className="absolute top-3/4 left-0 right-0 h-px bg-neon-cyan/30 animate-pulse" style={{ animationDelay: "1s" }} />
              </div>
            </div>

            {/* Floating particles around figure */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-neon-cyan rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Text content side */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-white glow-cyan mb-8">
            THE SHADOW PHILOSOPHER
          </h2>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p className="text-lg">
              I exist in the spaces between certainty and doubt, where most fear to tread. 
              My philosophy is forged in contradiction—embracing both the light of reason 
              and the darkness of the unknown.
            </p>

            <p className="text-lg">
              I believe in the power of questions over answers, in the beauty of chaos 
              within order, in the strength found in accepting our limitations. The universe 
              doesn't owe us meaning—we create it through the fire of our struggles and 
              the depth of our introspection.
            </p>

            <p className="text-lg">
              My principles are paradoxical: be rigid in your values yet flexible in your 
              beliefs. Seek truth relentlessly while accepting you'll never fully grasp it. 
              Embrace your darkness not to become it, but to understand it.
            </p>

            <p className="text-lg border-l-2 border-neon-purple/50 pl-6 italic">
              "The unexamined life is not worth living, but the over-examined life 
              is paralysis. Walk the line between reflection and action."
            </p>
          </div>

          {/* Signature */}
          <div className="pt-8">
            <p className="text-neon-cyan tracking-widest text-sm opacity-70">
              — YUREI SAVAGE
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </motion.section>
  );
};

export default ShadowPhilosopher;
