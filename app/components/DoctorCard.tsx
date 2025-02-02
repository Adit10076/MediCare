'use client';
import { motion } from 'framer-motion';

interface DoctorCardProps {
  name: string;
  specialty: string;
  image: string;
  experience: string;
  index: number;
}

const DoctorCard = ({ name, specialty, image, experience, index }: DoctorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
    >
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-2 border-white/20"
        />
        <div className="ml-6">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-blue-400">{specialty}</p>
          <p className="text-white/70 mt-2">{experience} experience</p>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorCard;