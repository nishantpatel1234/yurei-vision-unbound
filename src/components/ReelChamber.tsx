import { motion } from "framer-motion";
import { useState } from "react";
import { Play, X } from "lucide-react";

const reels = [
  {
    id: 1,
    title: "Cinematic Edit",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "A journey through light and shadow",
  },
  {
    id: 2,
    title: "Motion Graphics",
    thumbnail: "https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Abstract visual storytelling",
  },
  {
    id: 3,
    title: "Brand Film",
    thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Commercial work with artistic vision",
  },
  {
    id: 4,
    title: "Experimental",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Pushing boundaries of visual media",
  },
];

const ReelChamber = () => {
  const [selectedReel, setSelectedReel] = useState<typeof reels[0] | null>(null);

  return (
    <section className="min-h-screen relative bg-gradient-to-b from-card to-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 glow-purple" style={{ fontFamily: "Orbitron, sans-serif" }}>
            THE REEL CHAMBER
          </h2>
          <p className="text-xl text-muted-foreground">
            Visual narratives from the creative archives
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-video rounded-lg overflow-hidden cursor-pointer border border-primary/20 hover:border-primary transition-all duration-300"
              onClick={() => setSelectedReel(reel)}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border-2 border-primary"
                  whileHover={{ scale: 1.2 }}
                >
                  <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-2xl font-bold mb-2 text-primary glow-cyan">{reel.title}</h3>
                <p className="text-sm text-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  {reel.description}
                </p>
              </div>

              {/* Scanline effect */}
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.1) 2px, rgba(0,255,255,0.1) 4px)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedReel(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedReel(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <iframe
                src={selectedReel.videoUrl}
                className="w-full h-full rounded-lg border-2 border-primary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ReelChamber;
