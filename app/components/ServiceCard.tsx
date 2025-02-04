'use client';
import { motion, useAnimation } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  color: string;
  index: number;
}

const ServiceCard = ({ title, icon, description, color, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });

      // Calculate rotation based on mouse position
      const rotateX = ((y - rect.height / 2) / rect.height) * 20;
      const rotateY = ((x - rect.width / 2) / rect.width) * -20;
      
      controls.start({
        rotateX,
        rotateY,
        transition: { type: 'spring', stiffness: 200, damping: 20 }
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 300 }
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={controls}
      className={`p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all ${color} relative overflow-hidden`}
      whileHover={{ scale: 1.05 }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.1), transparent)`,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-0 pointer-events-none"
        animate={{
          opacity: isHovered ? 1 : 0,
          y: mousePos.y - 100,
        }}
        transition={{ type: 'spring', stiffness: 200 }}
      />

      {/* Floating particles */}
      {isHovered && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full pointer-events-none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                x: mousePos.x + Math.sin(Date.now() * 0.001 + i) * 20,
                y: mousePos.y + Math.cos(Date.now() * 0.001 + i) * 20,
              }}
              transition={{ 
                type: 'spring',
                stiffness: 100,
                damping: 20,
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 2
              }}
            />
          ))}
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <motion.div 
            className="text-4xl mr-4"
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? [0, 5, -5, 0] : 0,
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-white/70">{description}</p>
        <div className="mt-6">
          <motion.button 
            whileHover={{ x: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="text-blue-400 hover:text-blue-300 flex items-center"
          >
            Learn More
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              className="ml-2"
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;