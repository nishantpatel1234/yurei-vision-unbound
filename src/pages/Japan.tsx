import { motion } from "framer-motion";
import { NavLink } from "@/components/NavLink";
import { Cherry, Mountain, Waves, Sparkles } from "lucide-react";

const Japan = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <NavLink to="/" className="text-primary hover:text-primary-glow transition-colors">
            ← Back to Core
          </NavLink>
          <h1 className="text-xl font-bold" style={{ color: "#ff6699", textShadow: "0 0 20px #ff6699" }}>
            JAPAN
          </h1>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center gap-6 mb-8">
            <Cherry className="w-16 h-16 text-[#ff6699]" />
            <Mountain className="w-16 h-16 text-[#ff6699]" />
            <Waves className="w-16 h-16 text-[#ff6699]" />
          </div>
          <h2 
            className="text-6xl md:text-8xl font-bold mb-6" 
            style={{ 
              fontFamily: "'Playfair Display', serif",
              color: "#ff6699",
              textShadow: "0 0 40px #ff6699"
            }}
          >
            和の美学
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            The Art of Refinement and Aesthetic Harmony
          </p>
        </motion.div>

        {/* Philosophy */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="holographic p-8 rounded-lg space-y-6">
            <h3 className="text-3xl font-bold mb-4" style={{ color: "#ff6699", fontFamily: "'Playfair Display', serif" }}>
              Wabi-Sabi & Ma
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Japan taught me the beauty of imperfection and the power of negative space. <em>Wabi-sabi</em>—finding 
              elegance in transience and impermanence. <em>Ma</em>—the intentional pause, the space between elements 
              that gives meaning to the whole.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              From the precision of Japanese craftsmanship to the mindfulness of tea ceremony, every detail matters. 
              Simplicity is not absence; it's deliberate refinement until only the essential remains.
            </p>
            <blockquote className="border-l-4 border-[#ff6699] pl-4 italic text-foreground/60">
              "間 (Ma) — The space between is where the magic happens."
            </blockquote>
          </div>
        </motion.section>

        {/* Cultural Elements */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h3 className="text-4xl font-bold text-center mb-12" style={{ color: "#ff6699", textShadow: "0 0 20px #ff6699" }}>
            Cultural Threads
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                title: "侘寂 (Wabi-Sabi)", 
                desc: "Beauty in imperfection, impermanence, and incompleteness. The weathered, the asymmetric, the humble.",
                icon: Cherry
              },
              { 
                title: "物の哀れ (Mono no Aware)", 
                desc: "The pathos of things. A gentle sadness at the transience of life, and the beauty that arises from it.",
                icon: Waves
              },
              { 
                title: "幽玄 (Yūgen)", 
                desc: "Profound grace and subtlety. Suggestion rather than statement. Mystery beyond what words can express.",
                icon: Mountain
              },
              { 
                title: "間 (Ma)", 
                desc: "Negative space, pause, emptiness. The space between notes in music, the silence between words.",
                icon: Sparkles
              }
            ].map((concept, index) => {
              const Icon = concept.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="holographic p-8 rounded-lg hover:border-[#ff6699] transition-all"
                >
                  <Icon className="w-10 h-10 mb-4" style={{ color: "#ff6699" }} />
                  <h4 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {concept.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{concept.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Influences */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-4xl font-bold text-center mb-12" style={{ color: "#ff6699", textShadow: "0 0 20px #ff6699" }}>
            Influences on My Work
          </h3>
          <div className="space-y-4">
            {[
              "Minimalist design inspired by Japanese aesthetics",
              "The discipline and precision of martial arts philosophy",
              "Respect for craftsmanship and attention to detail",
              "Finding beauty in simplicity and restraint",
              "The concept of continuous improvement (改善 - Kaizen)"
            ].map((influence, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="holographic p-6 rounded-lg hover:border-[#ff6699] transition-all"
              >
                <p className="text-lg">{influence}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Japan;
