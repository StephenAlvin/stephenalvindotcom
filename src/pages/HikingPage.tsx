import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Masonry from 'react-masonry-css';
import { hikingImages } from '@/data/hikingData';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const HikingPage = () => {
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
        staggerChildren: 0.1,
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

  // Breakpoints for masonry layout
  const breakpointColumns = {
    default: 3,
    1024: 3,
    768: 2,
    640: 1,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-inter mb-4">Hiking Adventures</h1>
          <p className="text-xl text-foreground/70">
            When I'm not coding or building products, I'm exploring the outdoors and capturing the beauty of nature.
            Here are some of my favorite hikes and moments from the trail.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <Masonry
            breakpointCols={breakpointColumns}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {hikingImages.map((image) => (
              <motion.div key={image.id} variants={itemVariants}>
                <Card className="overflow-hidden group">
                  <div className="overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center text-sm text-foreground/70 mb-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{image.location}</span>
                    </div>
                    <p className="text-xs text-foreground/60">{image.date}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HikingPage;