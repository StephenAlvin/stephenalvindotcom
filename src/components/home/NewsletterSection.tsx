import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { MailIcon } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive updates in your inbox.",
    });
    
    setEmail('');
  };

  return (
    <section className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm max-w-3xl mx-auto">
          <CardContent className="p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MailIcon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-inter text-center mb-4">
              Subscribe to my Newsletter
            </h2>
            <p className="text-foreground/70 text-center mb-8 max-w-lg mx-auto">
              Get notified about new articles, startup insights, and exclusive content delivered straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
                Subscribe
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default NewsletterSection;