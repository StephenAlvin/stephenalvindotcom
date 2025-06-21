import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background py-12 mt-16">
      <div className="container mx-auto px-4">
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <p className="font-inter text-xl text-foreground">stephenalvin</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div className="space-y-4 md:space-y-0 md:flex md:space-x-8">
              <Link to="/" className="block text-sm text-foreground/80 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/blogs" className="block text-sm text-foreground/80 hover:text-primary transition-colors">
                Blogs
              </Link>
              <Link to="https://hikewithme.sg/" className="block text-sm text-foreground/80 hover:text-primary transition-colors">
                Outdoor
              </Link>
            </div>
            
            <div className="flex space-x-4 md:ml-8 pt-3">
              <a href="mailto:stephenalvin0912@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/stephen-alvin" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/StephenAlvin97" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="20px"
                  height="20px"
                  className="fill-current"
                >
                  <path
                    d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"
                  />
                </svg>
              </a>
              <a href="https://t.me/st3vuhn" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;