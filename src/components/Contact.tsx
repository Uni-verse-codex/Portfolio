import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail, Smartphone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block bg-secondary/50 px-4 py-1.5 rounded-full mb-3">
            <span className="text-sm font-medium text-muted-foreground">Contact</span>
          </div>
          <h2 className="heading-lg mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-xl">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="order-2 md:order-1 animate-fade-up">
            <div className="bg-card border rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-6">Send me a message</h3>
              
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="How can I help you?" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..." 
                    className="min-h-32"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-tertiary hover:bg-tertiary/90 mt-2"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h3 className="text-xl font-bold mb-8 animate-fade-up">Contact Information</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4 animate-fade-up">
                <div className="bg-tertiary/10 text-tertiary p-3 rounded-lg mt-1">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-1">Email</h4>
                  <p className="font-medium">devanshraj1734669@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-fade-up animation-delay-100">
                <div className="bg-tertiary/10 text-tertiary p-3 rounded-lg mt-1">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-1">Phone</h4>
                  <p className="font-medium">+91 9014590598</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-fade-up animation-delay-200">
                <div className="bg-tertiary/10 text-tertiary p-3 rounded-lg mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-1">Location</h4>
                  <p className="font-medium">Hyderabad , India</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-up animation-delay-300">
              <h4 className="font-bold">Connect with me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Uni-verse-codex" 
                  className="bg-tertiary/10 text-tertiary p-3 rounded-lg hover:bg-tertiary hover:text-tertiary-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/devansh-raj-572a702a1?lipi=urn%3Ali%3Apage%3Ad_UNKNOWN_ROUTE_profile-edit.topcard%3BVxVUpSsRSlqLN5wiatBeWw%3D%3D" 
                  className="bg-tertiary/10 text-tertiary p-3 rounded-lg hover:bg-tertiary hover:text-tertiary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:devanshraj1734669@gmail.com" 
                  className="bg-tertiary/10 text-tertiary p-3 rounded-lg hover:bg-tertiary hover:text-tertiary-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
