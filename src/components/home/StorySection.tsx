import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StorySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">My Story</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            I've always been fascinated by the intersection of design and technology. After graduating with a degree in Computer Science, I worked as a frontend developer for several years, constantly frustrated by the gap between designers' visions and developers' implementations.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            This led me to co-found FireJet, a tool that bridges this gap by automatically converting designs into production-ready code. When I'm not coding or building the future of design-to-code, you can find me hiking mountains and capturing the beauty of nature through photography.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;