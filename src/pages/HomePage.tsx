import { motion } from 'framer-motion';
import HeroSection from '@/components/home/HeroSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import BlogPreviewSection from '@/components/home/BlogPreviewSection';
import NewsletterSection from '@/components/home/NewsletterSection';

const HomePage = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      
      <ExperienceSection />
      <ProjectsSection />
      <BlogPreviewSection />
      <NewsletterSection />
    </motion.div>
  );
};

export default HomePage;