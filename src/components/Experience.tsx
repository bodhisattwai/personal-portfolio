import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'PGDM Student - Data & Business Analytics',
      company: 'Praxis Business School',
      location: 'Kolkata, India',
      period: '2023 - Present',
      description: 'Specializing in advanced data analytics, financial modeling, and business intelligence. Focusing on practical applications of data science in business strategy and decision-making.',
      highlights: [
        'Advanced Statistical Analysis & Modeling',
        'Financial Analytics & Risk Assessment',
        'Business Intelligence & Visualization',
        'Strategic Data-Driven Decision Making'
      ],
      color: 'blue'
    },
    {
      title: 'Research Analyst',
      company: 'Cybersecurity Research',
      location: 'Remote',
      period: '2022 - 2023',
      description: 'Conducted comprehensive research on cybersecurity trends, threat analysis, and data protection strategies. Developed analytical frameworks for security risk assessment.',
      highlights: [
        'Threat Intelligence Analysis',
        'Security Risk Assessment',
        'Data Protection Strategies',
        'Research Publication & Documentation'
      ],
      color: 'purple'
    },
    {
      title: 'Financial Analyst Intern',
      company: 'Various Projects',
      location: 'India',
      period: '2021 - 2022',
      description: 'Worked on multiple financial analysis projects involving market research, investment analysis, and financial modeling for different business scenarios.',
      highlights: [
        'Financial Modeling & Forecasting',
        'Market Research & Analysis',
        'Investment Portfolio Analysis',
        'Business Valuation Techniques'
      ],
      color: 'teal'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500/20',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        dot: 'bg-blue-400'
      },
      purple: {
        bg: 'bg-purple-500/20',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        dot: 'bg-purple-400'
      },
      teal: {
        bg: 'bg-teal-500/20',
        border: 'border-teal-500/30',
        text: 'text-teal-400',
        dot: 'bg-teal-400'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            My journey through data analytics, research, and business intelligence
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-teal-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colorClasses = getColorClasses(exp.color);
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                    className={`relative z-10 w-4 h-4 ${colorClasses.dot} rounded-full flex-shrink-0 mt-6`}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 ${colorClasses.dot} rounded-full opacity-30`}
                    />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`flex-1 ${colorClasses.bg} p-6 rounded-xl border ${colorClasses.border} backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-semibold ${colorClasses.text} mb-1`}>
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-4 text-slate-300 text-sm">
                          <div className="flex items-center gap-1">
                            <Building size={14} />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <div className={`flex items-center gap-1 ${colorClasses.text} text-sm mt-2 lg:mt-0`}>
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.2 + idx * 0.1 + 0.5 }}
                          className="flex items-center gap-2 text-slate-400 text-sm"
                        >
                          <div className={`w-1.5 h-1.5 ${colorClasses.dot} rounded-full`}></div>
                          {highlight}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;