import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Data Analytics',
      color: 'blue',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'R', level: 80 },
        { name: 'Excel/VBA', level: 95 },
      ]
    },
    {
      title: 'Visualization',
      color: 'purple',
      skills: [
        { name: 'Tableau', level: 88 },
        { name: 'Power BI', level: 82 },
        { name: 'Matplotlib/Seaborn', level: 85 },
        { name: 'Plotly', level: 78 },
      ]
    },
    {
      title: 'Business Intelligence',
      color: 'teal',
      skills: [
        { name: 'Financial Modeling', level: 92 },
        { name: 'Statistical Analysis', level: 88 },
        { name: 'Market Research', level: 85 },
        { name: 'Risk Assessment', level: 80 },
      ]
    },
    {
      title: 'Technical Skills',
      color: 'green',
      skills: [
        { name: 'Machine Learning', level: 75 },
        { name: 'Database Management', level: 82 },
        { name: 'Data Mining', level: 78 },
        { name: 'ETL Processes', level: 70 },
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500/20',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        progress: 'bg-blue-400'
      },
      purple: {
        bg: 'bg-purple-500/20',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        progress: 'bg-purple-400'
      },
      teal: {
        bg: 'bg-teal-500/20',
        border: 'border-teal-500/30',
        text: 'text-teal-400',
        progress: 'bg-teal-400'
      },
      green: {
        bg: 'bg-green-500/20',
        border: 'border-green-500/30',
        text: 'text-green-400',
        progress: 'bg-green-400'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

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

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Comprehensive expertise across data analytics, visualization, and business intelligence
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`${colorClasses.bg} p-6 rounded-xl border ${colorClasses.border} backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
              >
                <h3 className={`text-xl font-semibold ${colorClasses.text} mb-6`}>
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                        duration: 0.5 
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className={`text-sm ${colorClasses.text}`}>{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-slate-700/50 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            duration: 1,
                            ease: 'easeOut'
                          }}
                          className={`h-2 ${colorClasses.progress} rounded-full relative overflow-hidden`}
                        >
                          <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: 'linear'
                            }}
                            className="absolute inset-0 bg-white/20 w-full"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;