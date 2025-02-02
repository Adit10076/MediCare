'use client';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="container mx-auto px-6 py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-16 text-center"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
};

export default Section;