import { Button } from "./ui/button";
import { ArrowRight, Download } from "lucide-react";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] pt-32 flex items-center section-container relative overflow-hidden">
      {/* Decorative elements with optimized animations */}
      <motion.div 
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-tertiary/10 rounded-full filter blur-3xl"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"
          animate={{ 
            rotate: -360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-block bg-secondary/50 text-sm font-medium px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Computer Science Enthusiast
          </motion.div>
          
          <motion.h1 
            className="heading-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hello! I'm <span className="text-gradient">Devansh Raj</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            a computer science graduate with a love for creating clean, functional, and meaningful tech.
            My core focus is full-stack development, with strong interest in cybersecurity and artificial intelligence.
            Outside of tech, I'm into football, neuroscience, and optimizing life through personal growth.
            <p>
            <span className="font-medium">Let's build something cool.</span> 
            </p>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button className="group gap-2 bg-tertiary hover:bg-tertiary/90" size="lg">
              View My Work 
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2 border-tertiary text-tertiary hover:text-tertiary-foreground hover:bg-tertiary">
              <a 
                href="/Devansh_Raj_Resume.pdf" 
                download="Devansh_Raj_Resume.pdf"
                className="flex items-center gap-2"
              >
                Download CV <Download className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
          
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <SocialLinks />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-accent/10 rounded-full blur-2xl"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background relative z-10">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQGFrcW15oVi2w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704904889671?e=1750896000&v=beta&t=FcrXHaa_Np_1QW9JfTCcW6sqFp2DOFK3kAmTn-XJ_WQ"
                alt="Devansh Raj" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background border border-border p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-tertiary rounded-full"></div>
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
