import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text3D, Center } from "@react-three/drei";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const skills = [
  {
    name: "Video Editing",
    position: [2, 1, 0] as [number, number, number],
    color: "#00ffff",
    description: "Cinematic storytelling through motion and rhythm",
  },
  {
    name: "Design",
    position: [-2, 1, 0] as [number, number, number],
    color: "#ff00ff",
    description: "Visual systems that blend form and function",
  },
  {
    name: "Philosophy",
    position: [0, 2, -2] as [number, number, number],
    color: "#00ffaa",
    description: "Exploring the nature of creativity and consciousness",
  },
  {
    name: "AI Projects",
    position: [1.5, -1, 1] as [number, number, number],
    color: "#ffaa00",
    description: "Building intelligent systems and creative tools",
  },
  {
    name: "Fitness",
    position: [-1.5, -1, 1] as [number, number, number],
    color: "#ff3366",
    description: "Discipline of body and mind through strength",
  },
  {
    name: "Japan",
    position: [0, 0, 2] as [number, number, number],
    color: "#ff6699",
    description: "Culture, aesthetics, and the art of refinement",
  },
];

const SkillNode = ({ skill, onClick }: { skill: typeof skills[0]; onClick: () => void }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={skill.position} onClick={onClick}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh position={skill.position}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshBasicMaterial color={skill.color} transparent opacity={0.1} wireframe />
      </mesh>
    </Float>
  );
};

const PolymathCore = () => {
  const [selectedSkill, setSelectedSkill] = useState<typeof skills[0] | null>(null);
  const navigate = useNavigate();

  const handleSkillClick = (skill: typeof skills[0]) => {
    if (skill.name === "Philosophy") {
      navigate("/philosophy");
    } else {
      setSelectedSkill(skill);
    }
  };

  return (
    <section className="min-h-screen relative bg-gradient-to-b from-background to-card py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 glow-cyan" style={{ fontFamily: "Orbitron, sans-serif" }}>
            THE POLYMATH CORE
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore the interconnected nodes of knowledge and creation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* 3D Mind Map */}
          <div className="h-[600px] rounded-lg overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-sm">
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
              
              {skills.map((skill, index) => (
                <SkillNode
                  key={index}
                  skill={skill}
                  onClick={() => handleSkillClick(skill)}
                />
              ))}
              
              {/* Center Core */}
              <Float speed={1} rotationIntensity={1} floatIntensity={0.2}>
                <Center>
                  <mesh>
                    <octahedronGeometry args={[0.5, 0]} />
                    <meshStandardMaterial
                      color="#00ffff"
                      emissive="#00ffff"
                      emissiveIntensity={1}
                      metalness={1}
                      roughness={0}
                    />
                  </mesh>
                </Center>
              </Float>
              
              <OrbitControls
                enableZoom={true}
                enablePan={false}
                minDistance={5}
                maxDistance={15}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Canvas>
          </div>

          {/* Skill Details */}
          <div className="space-y-6">
            {selectedSkill ? (
              <motion.div
                key={selectedSkill.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="holographic p-8 rounded-lg space-y-4"
              >
                <h3
                  className="text-3xl font-bold"
                  style={{ color: selectedSkill.color, textShadow: `0 0 20px ${selectedSkill.color}` }}
                >
                  {selectedSkill.name}
                </h3>
                <p className="text-lg text-foreground/80">{selectedSkill.description}</p>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="text-primary hover:text-primary-glow transition-colors"
                >
                  ← Back to map
                </button>
              </motion.div>
            ) : (
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Click on any node to explore a discipline
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setSelectedSkill(skill)}
                      className="p-4 border border-primary/30 rounded-lg hover:border-primary transition-all hover:bg-card/50"
                      whileHover={{ scale: 1.05 }}
                      style={{
                        boxShadow: `0 0 20px ${skill.color}20`,
                      }}
                    >
                      <span style={{ color: skill.color }}>{skill.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolymathCore;
