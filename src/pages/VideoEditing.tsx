import { motion } from "framer-motion";
import { NavLink } from "@/components/NavLink";
import { Film, Play, Scissors, Camera } from "lucide-react";

const VideoEditing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <NavLink to="/" className="text-primary hover:text-primary-glow transition-colors">
            ← Back to Core
          </NavLink>
          <h1 className="text-xl font-bold glow-cyan">VIDEO EDITING</h1>
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
            <Film className="w-16 h-16 text-[#00ffff]" />
            <Scissors className="w-16 h-16 text-[#00ffff]" />
            <Camera className="w-16 h-16 text-[#00ffff]" />
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-6 glow-cyan" style={{ fontFamily: "Orbitron, sans-serif" }}>
            CINEMATIC STORYTELLING
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Where motion meets emotion, and frames become narratives
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
            <h3 className="text-3xl font-bold text-primary mb-4">The Art of Motion</h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Video editing is not just cutting and pasting footage—it's sculpting time itself. Every cut is a decision, 
              every transition a breath. The rhythm of the edit creates the heartbeat of the story.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              From fast-paced action sequences to contemplative slow-motion, the edit defines the emotional journey. 
              Color grading sets the mood, sound design creates immersion, and pacing controls the viewer's heart rate.
            </p>
          </div>
        </motion.section>

        {/* Skills & Tools */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h3 className="text-4xl font-bold text-center mb-12 glow-cyan">Tools of the Craft</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Premiere Pro", desc: "Industry standard for professional editing" },
              { name: "After Effects", desc: "Motion graphics and visual effects" },
              { name: "DaVinci Resolve", desc: "Color grading and cinematic looks" },
              { name: "Final Cut Pro", desc: "Fast, magnetic timeline editing" },
              { name: "CapCut", desc: "Quick social media content" },
              { name: "Sound Design", desc: "Immersive audio experiences" }
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="holographic p-6 rounded-lg hover:border-primary transition-all"
              >
                <Play className="w-8 h-8 text-primary mb-3" />
                <h4 className="text-xl font-bold mb-2">{tool.name}</h4>
                <p className="text-muted-foreground">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Work Placeholder */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-4xl font-bold text-center mb-12 glow-cyan">Featured Reels</h3>
          <div className="holographic p-12 rounded-lg text-center">
            <Film className="w-24 h-24 text-primary/50 mx-auto mb-6" />
            <p className="text-xl text-muted-foreground">
              Cinematic portfolio coming soon...
            </p>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default VideoEditing;
