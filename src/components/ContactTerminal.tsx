import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, Github, Twitter, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:yurei@example.com", color: "#00ffff" },
  { icon: Github, label: "GitHub", href: "https://github.com", color: "#ff00ff" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "#00ffaa" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "#ffaa00" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "#ff3366" },
];

const ContactTerminal = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "> CONTACT_TERMINAL.exe\n> Initializing communication protocols...\n> Ready for transmission.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen relative bg-gradient-to-b from-card to-deep-space py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-12 text-center glow-cyan" style={{ fontFamily: "Orbitron, sans-serif" }}>
            CONTACT TERMINAL
          </h2>

          {/* Terminal Window */}
          <motion.div
            className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg overflow-hidden mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Terminal Header */}
            <div className="bg-secondary/50 px-4 py-2 flex items-center gap-2 border-b border-primary/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <span className="text-xs text-muted-foreground ml-4 font-mono">contact@polymath:~$</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm md:text-base">
              <pre className="text-primary whitespace-pre-wrap">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-2 h-5 bg-primary ml-1"
                />
              </pre>
            </div>
          </motion.div>

          {/* Social Links */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square flex flex-col items-center justify-center gap-3 holographic rounded-lg transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  style={{
                    boxShadow: `0 0 20px ${link.color}20`,
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8" style={{ color: link.color }} />
                  </motion.div>
                  <span className="text-sm font-medium" style={{ color: link.color }}>
                    {link.label}
                  </span>
                  
                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                    style={{ backgroundColor: link.color }}
                  />
                </motion.a>
              );
            })}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16 space-y-4"
          >
            <p className="text-muted-foreground">
              Open for collaborations, commissions, and creative ventures
            </p>
            <p className="text-xs text-muted-foreground/50">
              © 2024 Yurei Savage. All rights reserved. Built with passion and code.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactTerminal;
