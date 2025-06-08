import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const stats = [
    { number: '2+', label: 'Years Experience', icon: TrendingUp },
    { number: '15+', label: 'Projects Completed', icon: Target },
    { number: '1', label: 'PGDM Degree', icon: GraduationCap },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-4xl font-bold mb-6"
              whileHover={{ scale: 1.02 }}
            >
              About <span className="text-blue-400">Me</span>
            </motion.h2>
            <motion.p
              className="text-lg text-slate-300 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              I'm a passionate Data & Business Analytics professional currently pursuing my PGDM at Praxis Business School. With a strong foundation in financial analysis, marketing analytics, and strategic business intelligence, I transform complex data into actionable insights that drive business growth.
            </motion.p>
            <motion.p
              className="text-lg text-slate-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              My expertise spans across various domains including cybersecurity research, financial modeling, and data visualization. I believe in the power of data-driven decision making and strive to bridge the gap between technical analysis and business strategy.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                    className="flex justify-center mb-2"
                  >
                    <stat.icon className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.7 }}
                    className="text-2xl font-bold text-blue-400 mb-1"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-br from-blue-950/30 via-slate-950 to-purple-950/30 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">Current Focus</h3>
                <ul className="space-y-3 text-slate-300">
                  <motion.li
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Advanced Data Analytics & Visualization
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Financial Modeling & Analysis
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    Business Intelligence & Strategy
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Machine Learning Applications
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;