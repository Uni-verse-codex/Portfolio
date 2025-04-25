import { Card, CardContent } from "./ui/card";
import { Code, Layout, Database, Server } from "lucide-react";
import { motion } from "framer-motion";

const technologies = [
  {
    category: "Frontend",
    items: ["HTML5","CSS","Javascript","React","TailwindCSS"],
    icon: <Layout className="h-5 w-5" />
  },
  {
    category: "Backend",
    items: ["Node.js","Express","FastAPI"],
    icon: <Server className="h-5 w-5" />
  },
  
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB","Firebase","Supabase"],
    icon: <Database className="h-5 w-5" />
  },
  {
    category: "Languages",
    items: ["JavaScript", "Python", "Java", "SQL"],
    icon: <Code className="h-5 w-5" />
  }
];

const TechStack = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/40 dark:bg-secondary/10">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block bg-secondary/50 px-4 py-1.5 rounded-full mb-3">
            <span className="text-sm font-medium text-muted-foreground">Technologies</span>
          </div>
          <h2 className="heading-lg mb-4">Tech Stack & Skills</h2>
          <p className="text-muted-foreground max-w-xl">
            A curated selection of technologies and tools I've mastered to build modern, scalable and robust applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Card 
              key={tech.category}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 animate-fade-up glass-morphism hover:bg-background/70"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-tertiary/10 text-tertiary">
                    {tech.icon}
                  </div>
                  <h3 className="text-base font-semibold">{tech.category}</h3>
                </div>
                <ul className="space-y-1.5">
                  {tech.items.map((item, idx) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-tertiary"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-tertiary"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
