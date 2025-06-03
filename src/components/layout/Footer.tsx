import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background py-12 mt-16">
      <div className="container mx-auto px-4">
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <p className="font-serif text-xl text-foreground">Stephen Alvin</p>
            <p className="text-sm text-foreground/60 mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div className="space-y-4 md:space-y-0 md:flex md:space-x-8">
              <Link to="/" className="block text-sm text-foreground/80 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/startups" className="block text-sm text-foreground/80 hover:text-primary transition-colors">
                Startups
              </Link>
              <Link to="/blogs" className="block text-sm text-foreground/80 hover:text-primary transition-colors">
                Blogs
              </Link>
              <Link to="/hiking" className="block text-sm text-foreground/80 hover:text-primary transition-colors">
                Hiking
              </Link>
            </div>
            
            <div className="flex space-x-4 md:ml-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;