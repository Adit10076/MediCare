'use client';
import { motion, Variants } from 'framer-motion';

interface TestimonialCardProps {
  patientName: string;
  testimonial: string;
  condition: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  patientName, 
  testimonial, 
  condition, 
  index 
}) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
    >
      <p className="text-white/80 italic mb-4">"{testimonial}"</p>
      <div className="border-t border-white/10 pt-4">
        <h4 className="text-white font-semibold">{patientName}</h4>
        <p className="text-blue-400 text-sm">{condition}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;