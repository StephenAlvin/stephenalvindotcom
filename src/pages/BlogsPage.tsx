// import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogData';

const BlogsPage = () => {
  useEffect(() => {
    // Set page title for blogs page
    document.title = 'My Stories | Stephen Alvin';
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-thin font-inter mb-4">My stories</h1>
        <p className="text-xl font-light text-foreground/70 mb-8 w-full">
          Thoughts, lessons, and insights from my journey in design, development, and entrepreneurship.
        </p>
        
        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
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
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm text-primary font-medium">{post.date}</div>
                        <div className="text-sm text-foreground/60">{post.readTime} min read</div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-foreground/70 line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl mb-2">No articles found</h3>
              <p className="text-foreground/70">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogsPage;