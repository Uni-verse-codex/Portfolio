import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Buildspace",
    position: "Builder",
    period: "Aug 2024 - Sep 2024",
    description: "Learned Frontend Development while creating a responsive web application that helps students find their career paths based on their interests, skills, and personality traits.",
    techStack: ["React", "TypeScript", "Next.js", "Shadcn"]
  },
  {
    company: "NSIC (National Small Industries Corporation)",
    position: "Data Science Intern",
    period: "Jul 2023 - Aug 2023",
    description:"Worked on data preprocessing and model building for various datasets and applied machine learning techniques to extract meaningful insights.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Numpy"]
  },
];

const skills = {
  frontend: ["HTML5","CSS","JavaScript","React","Tailwind CSS"],
  backend: ["Node.js","Express","MongoDB / PostgreSQL"],
  devops: ["Docker / Kubernetes", "AWS / Google Cloud", "CI/CD Pipelines", "Git / GitHub Actions"],
  tools: ["Figma / Adobe XD", "VS Code / WebStorm", "Jira / Linear", "Postman / Insomnia"]
};

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Stanford University",
    period: "2014 - 2018"
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    institution: "Coding Academy",
    period: "2018"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block bg-secondary/50 px-4 py-1.5 rounded-full mb-3">
            <span className="text-sm font-medium text-muted-foreground">Career Path</span>
          </div>
          <h2 className="heading-lg mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-xl">
            My experience spans across various domains in computer science, focusing on creating impactful digital solutions.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-border/50 transition-all duration-300 hover:shadow-lg hover:shadow-tertiary/5 hover:border-tertiary/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full filter blur-2xl transform translate-x-16 -translate-y-16 group-hover:bg-tertiary/10 transition-all duration-500"></div>
                
                <h4 className="text-lg font-bold relative z-10">{exp.position}</h4>
                <div className="flex flex-wrap items-center gap-2 mt-1 mb-3">
                  <span className="text-tertiary font-medium">{exp.company}</span>
                  <span className="text-xs text-muted-foreground bg-secondary/50 px-0.8 py-0.5 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-tertiary/10 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
