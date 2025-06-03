import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { blogPosts, BlogPost } from '@/data/blogData';
import { cn } from '@/lib/utils';
import '@/styles/markdown.css';

// Configure marked options
marked.setOptions({
  breaks: true,
  gfm: true,
});

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
      
      // Find related posts based on tags
      const related = blogPosts
        .filter((p) => 
          p.id !== foundPost.id && 
          p.tags.some((tag) => foundPost.tags.includes(tag))
        )
        .slice(0, 3);
      
      setRelatedPosts(related);
      
      // Set page title
      document.title = `${foundPost.title} | Stephen Alvin`;
    } else {
      navigate('/blogs');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [slug, navigate]);

  if (!post) {
    return null;
  }

  const formatContent = (content: string) => {
    if (!content) return <p>Content coming soon...</p>;
    
    // Parse markdown and sanitize HTML
    const htmlContent = marked.parse(content) as string;
    const sanitizedHtml = DOMPurify.sanitize(htmlContent);
    
    return (
      <div 
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    );
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
        <Link to="/blogs">
          <Button variant="ghost" className="mb-8 flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
        </Link>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center text-foreground/70 mb-8">
            <div className="flex items-center mr-6">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
          
          <div className="aspect-[16/9] overflow-hidden rounded-lg bg-muted mb-12">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {formatContent(post.content)}
          
          <Separator className="my-12" />
          
          {relatedPosts.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold font-inter mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} to={`/blogs/${relatedPost.slug}`}>
                    <div className={cn(
                      "group",
                      slug === relatedPost.slug && "pointer-events-none opacity-50"
                    )}>
                      <div className="aspect-[16/9] overflow-hidden rounded-lg bg-muted mb-3">
                        <img 
                          src={relatedPost.coverImage} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h4 className="font-bold group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogDetailPage;