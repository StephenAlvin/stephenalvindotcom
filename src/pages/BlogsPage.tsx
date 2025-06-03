import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { blogPosts, BlogPost } from '@/data/blogData';

const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get unique tags
  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  ).sort();

  useEffect(() => {
    let filtered = blogPosts;
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(term) ||
          post.excerpt.toLowerCase().includes(term) ||
          post.tags.some((tag) => tag.toLowerCase().includes(term))
      );
    }
    
    // Filter by selected tag
    if (selectedTag) {
      filtered = filtered.filter((post) =>
        post.tags.includes(selectedTag)
      );
    }
    
    setFilteredPosts(filtered);
  }, [searchTerm, selectedTag]);

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
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
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Blog</h1>
        <p className="text-xl text-foreground/70 mb-8 max-w-2xl">
          Thoughts, lessons, and insights from my journey in design, development, and entrepreneurship.
        </p>
        
        {/* Search and filters */}
        <div className="mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-5 w-5 text-foreground/50" />
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10 bg-background border-foreground/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge 
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
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