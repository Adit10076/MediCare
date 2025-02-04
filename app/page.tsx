"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "@/components/Navbar"
import ServiceCard from "@/components/ServiceCard"
import DoctorCard from "@/components/DoctorCard"
import Section from "@/components/Section"


const HomePage = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const medicalServices = [
    {
      title: "Instant Ambulance",
      icon: "🚑",
      description: "Quick response emergency ambulance service available 24/7 with real-time tracking and immediate dispatch.",
      color: "bg-red-500/20",
    },
    {
      title: "Available Hospitals",
      icon: "🏥",
      description: "Find nearby hospitals with real-time availability status and emergency department waiting times.",
      color: "bg-blue-500/20",
    },
    {
      title: "Blood Bank",
      icon: "🩸",
      description: "Access to blood bank inventory with real-time updates on blood type availability and donation requests.",
      color: "bg-purple-500/20",
    },
    {
      title: "Emergency Beds",
      icon: "🛏️",
      description: "Live tracking of available emergency beds across hospitals with instant booking capability.",
      color: "bg-green-500/20",
    },
    {
      title: "Oxygen Cylinders",
      icon: "💨",
      description: "Track and request oxygen cylinders with real-time inventory management and emergency delivery.",
      color: "bg-cyan-500/20",
    },
    {
      title: "AI Powered Assistance",
      icon: "🤖",
      description: "24/7 AI-powered medical assistance for emergency guidance and quick response coordination.",
      color: "bg-yellow-500/20",
    },
  ];

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiothoracic Surgery",
      image: "/images/doctors/dr-sarah.jpg",
      experience: "15+ years",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neuroimmunology",
      image: "/images/doctors/dr-chen.jpg",
      experience: "12+ years",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div style={{ scale, y }} className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('/medical-grid.svg')] opacity-5" />
      </motion.div>

      <Navbar />

      <main className="relative z-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-32 pb-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:w-1/2 mb-16 md:mb-0"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg text-blue-400 font-medium mb-4"
              >
                Welcome to Medicare+
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Transforming
                <motion.span
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block"
                >
                  Healthcare
                </motion.span>
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-xl">
                Experience next-generation medical care with AI-powered diagnostics, robotic surgery, and personalized
                treatment plans.
              </p>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium"
                >
                  Book Appointment
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-transparent hover:bg-white/5 text-white rounded-xl border border-white/10"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="grid grid-cols-2 gap-6 w-full max-w-xl">
                {[
                  { title: "AI Diagnostics", icon: "🧠", desc: "Instant analysis" },
                  { title: "E-Records", icon: "📁", desc: "Secure storage" },
                  { title: "Live Monitoring", icon: "📈", desc: "Real-time tracking" },
                  { title: "Smart Pharmacy", icon: "💊", desc: "Auto-refills" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/70 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <Section title="Our Advanced Services">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {medicalServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </Section>

        

        {/* Specialists Section */}
        <Section title="Meet Our Specialists">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctors.map((doctor, index) => (
              <DoctorCard key={doctor.name} {...doctor} index={index} />
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 py-32">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Start Your Health Journey Today</h2>
              <div className="flex justify-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-transparent hover:bg-white/5 text-white rounded-xl border border-white/10"
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage

