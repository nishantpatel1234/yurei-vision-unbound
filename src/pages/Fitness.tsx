import { motion } from "framer-motion";
import { NavLink } from "@/components/NavLink";
import { Dumbbell, Heart, Target, Flame, TrendingUp, Award } from "lucide-react";

const Fitness = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <NavLink to="/" className="text-primary hover:text-primary-glow transition-colors">
            ← Back to Core
          </NavLink>
          <h1 className="text-xl font-bold" style={{ color: "#ff3366", textShadow: "0 0 20px #ff3366" }}>
            FITNESS
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
            <Dumbbell className="w-16 h-16 text-[#ff3366]" />
            <Flame className="w-16 h-16 text-[#ff3366]" />
            <Heart className="w-16 h-16 text-[#ff3366]" />
          </div>
          <h2 
            className="text-6xl md:text-8xl font-bold mb-6" 
            style={{ 
              fontFamily: "Orbitron, sans-serif",
              color: "#ff3366",
              textShadow: "0 0 40px #ff3366"
            }}
          >
            FORGE THE BODY
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Discipline of body and mind through strength
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
            <h3 className="text-3xl font-bold mb-4" style={{ color: "#ff3366" }}>
              Mental Fortitude Through Physical Challenge
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Fitness is not vanity—it's sovereignty. Every rep is a battle against entropy, every set a declaration 
              of self-mastery. The gym is where discipline is forged and excuses die.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Strength training builds more than muscle; it builds character. The iron doesn't lie. It doesn't care 
              about your feelings or excuses. It only responds to effort, consistency, and will.
            </p>
            <blockquote className="border-l-4 border-[#ff3366] pl-4 italic text-foreground/60">
              "The resistance you fight physically in the gym prepares you for the resistance you face mentally in life."
            </blockquote>
          </div>
        </motion.section>

        {/* Training Pillars */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h3 className="text-4xl font-bold text-center mb-12" style={{ color: "#ff3366", textShadow: "0 0 20px #ff3366" }}>
            Training Pillars
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: Dumbbell, 
                name: "Strength", 
                desc: "Progressive overload, compound movements, consistent growth" 
              },
              { 
                icon: Heart, 
                name: "Conditioning", 
                desc: "Cardiovascular endurance, metabolic capacity, resilience" 
              },
              { 
                icon: Target, 
                name: "Discipline", 
                desc: "Daily habits, mental toughness, unwavering commitment" 
              }
            ].map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="holographic p-8 rounded-lg hover:border-[#ff3366] transition-all"
                >
                  <Icon className="w-10 h-10 mb-4" style={{ color: "#ff3366" }} />
                  <h4 className="text-2xl font-bold mb-3">{pillar.name}</h4>
                  <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Principles */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-4xl font-bold text-center mb-12" style={{ color: "#ff3366", textShadow: "0 0 20px #ff3366" }}>
            Iron Laws
          </h3>
          <div className="space-y-6">
            {[
              { icon: TrendingUp, text: "Progressive overload is non-negotiable" },
              { icon: Target, text: "Consistency beats intensity" },
              { icon: Flame, text: "Discipline is choosing what you want most over what you want now" },
              { icon: Award, text: "Your only competition is who you were yesterday" }
            ].map((law, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="holographic p-6 rounded-lg flex items-center gap-4 hover:border-[#ff3366] transition-all"
              >
                <law.icon className="w-8 h-8 flex-shrink-0" style={{ color: "#ff3366" }} />
                <p className="text-lg font-semibold">{law.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Fitness;
