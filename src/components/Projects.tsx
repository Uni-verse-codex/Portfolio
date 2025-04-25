
import { ArrowRight, ExternalLink, Github, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Phishing Domain Detection Using ML",
    description: "Developed a Phishing Domain Detection system using Machine learning algorithms to classify domains as legitimate or malicious",
    image: "https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python","Scikit","Random Forest","XGBoost"],
    githubLink: "#",
    liveLink: "#",
    featured: true
  },
  {
    title: "Personalized Career Recommendation Platform",
    description: "Built a very basic personalized career recommendation platform using machine learning to match users withsuitable career paths based on their interests, skills, and personality traits.",
    image: "https://images.unsplash.com/photo-1580777361964-27e9cdd2f838?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "Scikit-Learn", "XGBoost", "NLTK" ,"Jupyter Notebook","PostgreSQL"],
    githubLink: "#",
    liveLink: "#",
    featured: true
  },
  {
    title: "Book-Selling App",
    description: "Developed a book-selling application utilizing Node.js and React,incorporating user-friendly features such as secure login, cart management for 50+ books, and personalized user profiles to enhancecustomer experience.",
    image: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Node.js", "ShadCN", "Mongo"],
    githubLink: "#",
    liveLink: "#",
    featured: true
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-secondary/50 px-4 py-1.5 rounded-full mb-3">
            <span className="text-sm font-medium text-muted-foreground">Projects</span>
          </div>
          <h2 className="heading-lg mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-xl">
            A showcase of my best work, demonstrating my skills in software development and creative problem-solving.
          </p>
          <div className="flex items-center gap-2 mt-4 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Based in Hyderabad,India.</span>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className={cn(
                "group",
                project.featured ? "md:col-span-2" : "",
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-card/30 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 shadow-md hover:shadow-xl transition-all duration-300 hover:border-tertiary/50">
                <div className={cn(
                  "grid gap-6",
                  project.featured ? "md:grid-cols-2" : "grid-cols-1"
                )}>
                  <div className={cn(
                    "aspect-video overflow-hidden",
                    !project.featured && "md:aspect-[4/3]"
                  )}>
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  
                  <div className="p-6">
                    {project.featured && (
                      <span className="inline-block bg-tertiary/10 text-tertiary text-xs px-2 py-1 rounded-full mb-4">
                        Featured Project
                      </span>
                    )}
                    
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <motion.span 
                          key={idx} 
                          className="text-xs px-2.5 py-1 bg-secondary/50 backdrop-blur-sm text-muted-foreground rounded-full border border-border/50"
                          whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--tertiary))" }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <motion.a 
                        href={project.githubLink}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-tertiary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Github className="h-4 w-4" /> Source
                      </motion.a>
                      <motion.a 
                        href={project.liveLink}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-tertiary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline" 
            className="group border-tertiary text-tertiary hover:text-tertiary-foreground hover:bg-tertiary gap-2"
          >
            View All Projects 
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
