import { motion } from "framer-motion";
import { NavLink } from "@/components/NavLink";
import { Brain, Cpu, Zap, Sparkles, Code2, Network } from "lucide-react";

const AIProjects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <NavLink to="/" className="text-primary hover:text-primary-glow transition-colors">
            ← Back to Core
          </NavLink>
          <h1 className="text-xl font-bold" style={{ color: "#ffaa00", textShadow: "0 0 20px #ffaa00" }}>
            AI PROJECTS
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
            <Brain className="w-16 h-16 text-[#ffaa00]" />
            <Cpu className="w-16 h-16 text-[#ffaa00]" />
            <Network className="w-16 h-16 text-[#ffaa00]" />
          </div>
          <h2 
            className="text-6xl md:text-8xl font-bold mb-6" 
            style={{ 
              fontFamily: "Orbitron, sans-serif",
              color: "#ffaa00",
              textShadow: "0 0 40px #ffaa00"
            }}
          >
            INTELLIGENT SYSTEMS
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Building the future, one neural network at a time
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
            <h3 className="text-3xl font-bold mb-4" style={{ color: "#ffaa00" }}>
              The AI Revolution
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Artificial Intelligence is not just technology—it's the amplification of human creativity. From language 
              models that understand context to computer vision that sees the world, AI transforms how we solve problems.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I build AI-powered tools that enhance productivity, automate tedious tasks, and unlock new creative 
              possibilities. Whether it's training custom models or integrating cutting-edge APIs, the goal is always 
              to make technology serve humanity better.
            </p>
          </div>
        </motion.section>

        {/* Project Areas */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h3 className="text-4xl font-bold text-center mb-12" style={{ color: "#ffaa00", textShadow: "0 0 20px #ffaa00" }}>
            Focus Areas
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: Brain, 
                name: "NLP & LLMs", 
                desc: "Language understanding, generation, and fine-tuning" 
              },
              { 
                icon: Sparkles, 
                name: "Creative AI", 
                desc: "Image generation, style transfer, and artistic tools" 
              },
              { 
                icon: Code2, 
                name: "Automation", 
                desc: "Workflow optimization and intelligent agents" 
              },
              { 
                icon: Network, 
                name: "Neural Networks", 
                desc: "Custom architectures and model training" 
              },
              { 
                icon: Zap, 
                name: "API Integration", 
                desc: "OpenAI, Anthropic, Gemini, and more" 
              },
              { 
                icon: Cpu, 
                name: "Edge AI", 
                desc: "On-device inference and optimization" 
              }
            ].map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="holographic p-6 rounded-lg hover:border-[#ffaa00] transition-all"
                >
                  <Icon className="w-8 h-8 mb-3" style={{ color: "#ffaa00" }} />
                  <h4 className="text-xl font-bold mb-2">{area.name}</h4>
                  <p className="text-muted-foreground">{area.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-4xl font-bold text-center mb-12" style={{ color: "#ffaa00", textShadow: "0 0 20px #ffaa00" }}>
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Python", "PyTorch", "TensorFlow", "OpenAI API", "LangChain", "HuggingFace", "FastAPI", "Jupyter"].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="holographic p-4 text-center rounded-lg hover:border-[#ffaa00] hover:bg-[#ffaa00]/5 transition-all"
              >
                <p className="font-bold">{tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default AIProjects;
