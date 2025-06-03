import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blogData';

const BlogPreviewSection = () => {
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
        staggerChildren: 0.15,
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

  // Only display 6 posts for the preview
  const previewPosts = blogPosts.slice(0, 6);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">Popular Articles</h2>
          <Link to="/blogs">
            <Button variant="ghost" className="text-primary">
              View all <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {previewPosts.map((post, index) => (
            <motion.div key={post.slug} variants={itemVariants}>
              <Link to={`/blogs/${post.slug}`}>
                <Card className="h-full overflow-hidden border border-foreground/10 hover:border-foreground/20 transition-all duration-300 hover:shadow-md hover:shadow-primary/5 group">
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">{post.date}</div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-foreground/70 line-clamp-2">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 text-sm text-foreground/60">
                    {post.readTime} min read
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;