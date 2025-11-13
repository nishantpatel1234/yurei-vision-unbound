import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Layers, Zap, Sparkles, Code } from "lucide-react";

const steps = [
  {
    icon: Sparkles,
    title: "Ideation",
    description: "Every creation begins with a spark—a vision that demands to exist.",
  },
  {
    icon: Layers,
    title: "Design",
    description: "Translating abstract concepts into visual language and structure.",
  },
  {
    icon: Code,
    title: "Execution",
    description: "Where mastery meets tools—editing, coding, refining.",
  },
  {
    icon: Zap,
    title: "Evolution",
    description: "The work never stops. Every piece is a stepping stone to the next.",
  },
];

const TheForge = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative bg-gradient-to-b from-background via-deep-space to-card py-20 overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--neon-cyan)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--neon-cyan)) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <motion.div style={{ opacity, scale }} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 glow-cyan" style={{ fontFamily: "Orbitron, sans-serif" }}>
            THE FORGE
          </h2>
          <p className="text-xl text-muted-foreground">
            Where ideas are transformed into reality
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2" />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-20 flex items-center ${
                  isEven ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${isEven ? "text-right pr-12" : "text-left pl-12"}`}>
                  <motion.div
                    className="holographic p-6 rounded-lg"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--neon-cyan) / 0.3)" }}
                  >
                    <h3 className="text-2xl font-bold mb-3 text-primary">{step.title}</h3>
                    <p className="text-foreground/80">{step.description}</p>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-card border-4 border-primary flex items-center justify-center z-10"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Spacer */}
                <div className="w-5/12" />
              </motion.div>
            );
          })}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-accent">Tools of Creation</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Premiere Pro",
              "After Effects",
              "Figma",
              "Blender",
              "Davinci Resolve",
              "Photoshop",
              "VS Code",
              "Cinema 4D",
            ].map((tool, index) => (
              <motion.span
                key={index}
                className="px-6 py-3 border border-primary/30 rounded-full text-sm font-medium hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                whileHover={{ scale: 1.1, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TheForge;
