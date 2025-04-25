
import { Github, Instagram, Linkedin, Globe } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Uni-verse-codex",
    label: "GitHub",
    color: "hover:text-[#2D333B]",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/devansh-raj-572a702a1?lipi=urn%3Ali%3Apage%3Ad_UNKNOWN_ROUTE_profile-edit.topcard%3BVxVUpSsRSlqLN5wiatBeWw%3D%3D",
    label: "LinkedIn",
    color: "hover:text-[#0A66C2]",
  },
  {
    icon: Globe,
    href: "#portfolio",
    label: "Portfolio",
    color: "hover:text-tertiary",
  },
  {
    icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram",
    color: "hover:text-[#E4405F]",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4 text-muted-foreground">
      {socialLinks.map((social) => (
        <HoverCard key={social.label}>
          <HoverCardTrigger asChild>
            <a
              href={social.href}
              className={`transition-all duration-300 ${social.color} hover:scale-110`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="glass-morphism w-auto p-2">
            <span className="text-sm">{social.label}</span>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
};

export default SocialLinks;
