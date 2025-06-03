import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceItem {
  title: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Freelance Software Consultancy",
    period: "2025 - Present",
    description: "Building custom software solutions for startups while building my own SAAS products on the side"
  },
  {
    title: "Co-Founder, 🔥FireJet",
    period: "2022 - 2025",
    description: "80k downloads with peak 100k ARR. B2C SAAS helping devs save time in converting Figma designs to code. "
  },
  {
    title: "Singapore University of Technology and Design",
    period: "2019 - 2021",
    description: "Bachelor of Engineering (Engineering Product Development), Minor in Computer Science"
  }
];

const ExperienceSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-thin font-inter mb-16 text-center">My Experience</h2>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Continuous timeline line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-foreground/20" />
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline dot */}
                <motion.div
                  variants={dotVariants}
                  className="absolute left-[17px] z-10 w-4 h-4 bg-primary rounded-full border-4 border-background flex-shrink-0 mt-1"
                />
                
                {/* Content container */}
                <motion.div
                  variants={itemVariants}
                  className="ml-8 flex-1 pl-4"
                >
                  <div className="transition-all duration-300">
                    <div className="mb-2 text-sm text-primary font-medium">{exp.period}</div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-foreground/80">{exp.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;