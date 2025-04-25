
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-12 border-t border-border bg-secondary/30 dark:bg-secondary/10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-display font-bold mb-4 block">
              <span className="text-gradient">Dev</span>Portfolio
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Devansh Raj. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-12">
            <div>
              <h4 className="font-semibold mb-3">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-muted-foreground hover:text-tertiary transition-colors">Home</a></li>
                <li><a href="#experience" className="text-muted-foreground hover:text-tertiary transition-colors">Experience</a></li>
                <li><a href="#projects" className="text-muted-foreground hover:text-tertiary transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-tertiary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Get in Touch</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:devanshraj1734669@gmail.com" className="text-muted-foreground hover:text-tertiary transition-colors">devanshraj1734669@gmail.com</a></li>
                <li><a href="https://github.com/Uni-verse-codex" className="text-muted-foreground hover:text-tertiary transition-colors">LinkedIn</a></li>
                <li><a href="https://www.linkedin.com/in/devansh-raj-572a702a1?lipi=urn%3Ali%3Apage%3Ad_UNKNOWN_ROUTE_profile-edit.topcard%3BVxVUpSsRSlqLN5wiatBeWw%3D%3D" className="text-muted-foreground hover:text-tertiary transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="rounded-full bg-tertiary text-tertiary-foreground p-3 shadow-md hover:bg-tertiary/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
