import { motion } from "framer-motion";
import { NavLink } from "@/components/NavLink";
import { Palette, Layers, Grid, Sparkles } from "lucide-react";

const Design = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <NavLink to="/" className="text-primary hover:text-primary-glow transition-colors">
            ← Back to Core
          </NavLink>
          <h1 className="text-xl font-bold glow-purple">DESIGN</h1>
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
            <Palette className="w-16 h-16 text-[#ff00ff]" />
            <Layers className="w-16 h-16 text-[#ff00ff]" />
            <Grid className="w-16 h-16 text-[#ff00ff]" />
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-6 glow-purple" style={{ fontFamily: "Orbitron, sans-serif" }}>
            VISUAL SYSTEMS
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Where form meets function in elegant harmony
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
            <h3 className="text-3xl font-bold text-[#ff00ff] mb-4">Design as Language</h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Good design is invisible. It speaks without words, guides without commands, and creates experiences 
              that feel inevitable. Every color, typeface, and space serves a purpose.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              From UI/UX that anticipates user needs to brand identities that capture essence, design is the bridge 
              between concept and reality. It's not decoration—it's communication.
            </p>
          </div>
        </motion.section>

        {/* Design Principles */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h3 className="text-4xl font-bold text-center mb-12 glow-purple">Core Principles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                title: "Hierarchy", 
                desc: "Guide the eye, control the flow. Every element has its place in the visual order.",
                icon: Layers
              },
              { 
                title: "Contrast", 
                desc: "Create distinction. Light against dark, large against small, bold against subtle.",
                icon: Sparkles
              },
              { 
                title: "Consistency", 
                desc: "Build systems, not pages. Patterns create familiarity and trust.",
                icon: Grid
              },
              { 
                title: "Simplicity", 
                desc: "Remove the unnecessary. What you leave out is as important as what you include.",
                icon: Palette
              }
            ].map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="holographic p-8 rounded-lg hover:border-[#ff00ff] transition-all"
                >
                  <Icon className="w-10 h-10 text-[#ff00ff] mb-4" />
                  <h4 className="text-2xl font-bold mb-3">{principle.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{principle.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Tools */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-4xl font-bold text-center mb-12 glow-purple">Design Arsenal</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Figma", "Photoshop", "Illustrator", "After Effects", "Blender", "Framer", "Webflow", "Tailwind"].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="holographic p-4 text-center rounded-lg hover:border-[#ff00ff] hover:bg-[#ff00ff]/5 transition-all"
              >
                <p className="font-bold">{tool}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Design;
