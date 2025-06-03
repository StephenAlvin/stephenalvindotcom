import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Co-Founder & CTO",
    company: "FireJet",
    period: "2022 - Present",
    description: "Leading the technical development of a design-to-code conversion platform that helps developers and designers collaborate more efficiently."
  },
  {
    title: "Senior Frontend Engineer",
    company: "TechGiant Inc.",
    period: "2019 - 2022",
    description: "Developed and maintained user interfaces for enterprise clients, led a team of 5 developers, and implemented design systems used across multiple products."
  },
  {
    title: "UI/UX Developer",
    company: "Creative Solutions",
    period: "2017 - 2019",
    description: "Bridged the gap between design and development teams, created interactive prototypes, and implemented frontend components using React and Vue."
  },
  {
    title: "Frontend Developer",
    company: "WebStudio",
    period: "2015 - 2017",
    description: "Responsible for implementing responsive designs and ensuring cross-browser compatibility for client websites."
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-inter mb-12 text-center">Work Experience</h2>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border border-foreground/10 bg-card/50 backdrop-blur-sm hover:border-foreground/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-2 text-sm text-primary font-medium">{exp.period}</div>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <div className="text-sm text-foreground/70 mb-4">{exp.company}</div>
                  <p className="text-foreground/80">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;