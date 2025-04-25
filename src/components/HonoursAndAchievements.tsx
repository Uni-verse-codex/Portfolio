import { Card, CardContent } from "./ui/card";
import { Trophy, Award, Medal } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Hackathon Winner",
    organization: "Institute Of Aeronautical Engineering",
    period: "2024",
    description: "Won first place in the hackathon conducted by our college , Designed a platform to optimize agricultural resources, improve efficiency, and expand market access",
    icon: <Trophy className="h-5 w-5" />
  },
  {
    title: "Football Tournament Winner",
    organization: "Institute Of Aeronautical Engineering",
    period: "2025",
    description: "Won the Inter-Departmental Football Tournament which consisted of 8 teams",
    icon: <Award className="h-5 w-5" />
  },
  
];

const HonoursAndAchievements = () => {
  return (
    <section id="achievements" className="section-padding bg-secondary/40 dark:bg-secondary/10">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block bg-secondary/50 px-4 py-1.5 rounded-full mb-3">
            <span className="text-sm font-medium text-muted-foreground">Recognition</span>
          </div>
          <h2 className="heading-lg mb-4">Honours & Achievements</h2>
          <p className="text-muted-foreground max-w-xl">
            A collection of my notable achievements and recognitions throughout my academic and professional journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 animate-fade-up glass-morphism hover:bg-background/70"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-tertiary/10 text-tertiary">
                    {achievement.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{achievement.title}</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-tertiary font-medium">{achievement.organization}</span>
                    <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
                      {achievement.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HonoursAndAchievements; 