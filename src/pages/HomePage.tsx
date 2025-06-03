import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from '@/components/home/HeroSection';
import StorySection from '@/components/home/StorySection';
import ExperienceSection from '@/components/home/ExperienceSection';
import BlogPreviewSection from '@/components/home/BlogPreviewSection';
import NewsletterSection from '@/components/home/NewsletterSection';

const HomePage = () => {
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

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      
      {/* <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        <StorySection />
      </motion.div> */}
      
      <ExperienceSection />
      <BlogPreviewSection />
      <NewsletterSection />
    </motion.div>
  );
};

export default HomePage;