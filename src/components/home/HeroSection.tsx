import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Flame } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4">
                Hi, I'm Stephen!
              </h1>
              <p className="text-xl mb-4 text-foreground/80">
                Co-Founder @ <Flame className="inline h-5 w-5 text-orange-500" /> FireJet
              </p>
              <p className="text-lg mb-8 text-foreground/70">
                I'm on a mission to bridge the gap between design and code
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Go to FireJet <Flame className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                >
                  Contact me
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted"
            >
              <img 
                src="/src/assets/hero-image.jpg" 
                alt="Stephen Alvin" 
                className="object-cover w-full h-full"
                onError={(e) => {
                  // Fallback to the remote image if local asset fails
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;