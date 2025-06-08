import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, TrendingUp, Shield, DollarSign } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Financial Risk Assessment Model',
      description: 'Developed a comprehensive risk assessment model using machine learning algorithms to predict financial risks and optimize investment portfolios.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Tableau'],
      category: 'Financial Analytics',
      icon: DollarSign,
      color: 'blue',
      features: [
        'Risk prediction accuracy of 87%',
        'Portfolio optimization algorithms',
        'Real-time dashboard integration',
        'Automated reporting system'
      ]
    },
    {
      title: 'Cybersecurity Threat Analysis',
      description: 'Conducted comprehensive analysis of cybersecurity threats and developed predictive models for threat detection and prevention strategies.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['R', 'Python', 'SQL', 'Power BI'],
      category: 'Security Research',
      icon: Shield,
      color: 'purple',
      features: [
        'Threat pattern recognition',
        'Vulnerability assessment framework',
        'Security metrics dashboard',
        'Incident response optimization'
      ]
    },
    {
      title: 'Market Analytics Dashboard',
      description: 'Built an interactive dashboard for market trend analysis, customer segmentation, and business performance tracking with real-time data integration.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Tableau', 'SQL', 'Excel', 'Python'],
      category: 'Business Intelligence',
      icon: TrendingUp,
      color: 'teal',
      features: [
        'Real-time data visualization',
        'Customer segmentation analysis',
        'Performance KPI tracking',
        'Automated report generation'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500/20',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        hover: 'hover:border-blue-400'
      },
      purple: {
        bg: 'bg-purple-500/20',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        hover: 'hover:border-purple-400'
      },
      teal: {
        bg: 'bg-teal-500/20',
        border: 'border-teal-500/30',
        text: 'text-teal-400',
        hover: 'hover:border-teal-400'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

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
    hidden: { opacity: 0, y: 50 },
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
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Showcasing my expertise in data analytics, financial modeling, and business intelligence
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            const IconComponent = project.icon;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group ${colorClasses.bg} rounded-xl border ${colorClasses.border} ${colorClasses.hover} overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-2xl`}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className={`absolute top-4 right-4 p-2 ${colorClasses.bg} rounded-lg border ${colorClasses.border}`}
                  >
                    <IconComponent className={`w-5 h-5 ${colorClasses.text}`} />
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className={`inline-block px-3 py-1 ${colorClasses.bg} ${colorClasses.text} text-xs font-medium rounded-full mb-3 border ${colorClasses.border}`}>
                    {project.category}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-slate-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ delay: index * 0.2 + idx * 0.1 + 0.7 }}
                          className="flex items-center gap-2 text-slate-400 text-sm"
                        >
                          <div className={`w-1 h-1 ${colorClasses.text.replace('text-', 'bg-')} rounded-full`}></div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: index * 0.2 + idx * 0.05 + 0.8 }}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600/50"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 ${colorClasses.text} border ${colorClasses.border} rounded-lg hover:bg-slate-700/50 transition-all duration-200 text-sm`}
                    >
                      <ExternalLink size={14} />
                      View Project
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 text-slate-400 border border-slate-600/50 rounded-lg hover:bg-slate-700/50 transition-all duration-200 text-sm"
                    >
                      <Github size={14} />
                      Code
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;