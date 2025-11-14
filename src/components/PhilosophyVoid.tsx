import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";

interface Quote {
  id: number;
  text: string;
  commentary: string;
  inspiration: string;
  position: [number, number, number];
}

interface PhilosophyVoidProps {
  quotes: Quote[];
  onQuoteClick: (quote: Quote) => void;
  hiddenQuotes: Quote[];
}

// Floating particles
const Particles = () => {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};

// Individual floating quote
const FloatingQuote = ({ quote, onClick }: { quote: Quote; onClick: () => void }) => {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current && hovered) {
      meshRef.current.scale.lerp(new THREE.Vector3(1.1, 1.1, 1.1), 0.1);
    } else if (meshRef.current) {
      meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group
        ref={meshRef}
        position={quote.position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
      >
        <Text
          fontSize={0.15}
          maxWidth={3}
          textAlign="center"
          font="/fonts/Playfair_Display/PlayfairDisplay-Regular.ttf"
          color={hovered ? "#00ffff" : "#ffffff"}
          anchorX="center"
          anchorY="middle"
        >
          {quote.text.length > 60 ? quote.text.substring(0, 60) + "..." : quote.text}
        </Text>
        
        {/* Glow effect when hovered */}
        {hovered && (
          <pointLight
            position={[0, 0, 0.5]}
            intensity={2}
            distance={3}
            color="#00ffff"
          />
        )}
      </group>
    </Float>
  );
};

// Camera controller for parallax
const CameraController = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      camera.position.x += (x * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (y * 0.5 - camera.position.y) * 0.05;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [camera]);

  return null;
};

const PhilosophyVoid = ({ quotes, onQuoteClick, hiddenQuotes }: PhilosophyVoidProps) => {
  const [showHidden, setShowHidden] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const handleMouseStop = () => {
      timeout = setTimeout(() => {
        setShowHidden(true);
      }, 5000);
    };

    const handleMouseMove = () => {
      clearTimeout(timeout);
      setShowHidden(false);
      handleMouseStop();
    };

    window.addEventListener("mousemove", handleMouseMove);
    handleMouseStop();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-black">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: "radial-gradient(circle at center, #0a0a0a 0%, #000000 100%)" }}
      >
        <CameraController />
        
        {/* Ambient lighting */}
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 5]} intensity={0.3} color="#6366f1" />
        
        {/* Volumetric fog effect */}
        <fog attach="fog" args={["#000000", 5, 15]} />
        
        {/* Particles */}
        <Particles />
        
        {/* Floating quotes */}
        {quotes.map((quote) => (
          <FloatingQuote
            key={quote.id}
            quote={quote}
            onClick={() => onQuoteClick(quote)}
          />
        ))}

        {/* Hidden quotes */}
        {showHidden && hiddenQuotes.map((quote, index) => (
          <FloatingQuote
            key={`hidden-${quote.id}`}
            quote={{ ...quote, position: [index * 2 - 1, -3, -4] as [number, number, number] }}
            onClick={() => onQuoteClick(quote)}
          />
        ))}
      </Canvas>

      {/* Cursor light cone effect */}
      <div 
        className="pointer-events-none fixed inset-0 mix-blend-overlay"
        style={{
          background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.1) 0%, transparent 30%)"
        }}
      />
    </div>
  );
};

export default PhilosophyVoid;
