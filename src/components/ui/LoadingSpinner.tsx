import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <motion.div 
      className="h-screen w-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Loader2 className="h-10 w-10 text-primary animate-spin" />
    </motion.div>
  );
};

export default LoadingSpinner;