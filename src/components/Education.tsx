import { Card, CardContent } from "./ui/card";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Technology In Computer Science And Information Technology",
    institution: "Institute Of Aeronautical Engineering",
    period: "2022 - 2026",
    description: "Cum.GPA - 7.9/10.0"
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    institution: "100xDevs",
    period: "2024",
    description: "Intensive 12-week program focusing on modern web development technologies and best practices."
  }
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-secondary/40 dark:bg-secondary/10">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block bg-secondary/50 px-4 py-1.5 rounded-full mb-3">
            <span className="text-sm font-medium text-muted-foreground">Education</span>
          </div>
          <h2 className="heading-lg mb-4">Academic Background</h2>
          <p className="text-muted-foreground max-w-xl">
            My educational journey has provided me with a strong foundation in computer science and practical development skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 animate-fade-up glass-morphism hover:bg-background/70"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-tertiary/10 text-tertiary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-tertiary font-medium">{edu.institution}</span>
                    <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 