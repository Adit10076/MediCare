'use client';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  color: string;
  index: number;
}

const ServiceCard = ({ title, icon, description, color, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ delay: index * 0.2 }}
      className={`p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all ${color}`}
    >
      <div className="flex items-center mb-6">
        <div className="text-4xl mr-4">{icon}</div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-white/70">{description}</p>
      <div className="mt-6">
        <motion.button 
          whileHover={{ x: 5 }}
          className="text-blue-400 hover:text-blue-300 flex items-center"
        >
          Learn More
          <span className="ml-2">→</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;