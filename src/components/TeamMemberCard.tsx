
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export function TeamMemberCard({
  name,
  role,
  bio,
  image,
  social,
}: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>
      <CardContent className="pt-6 pb-2">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-primary font-medium">{role}</p>
        <p className="mt-2 text-muted-foreground text-sm">{bio}</p>
      </CardContent>
      <CardFooter className="flex justify-start space-x-2">
        {social.twitter && (
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full h-8 w-8"
          >
            <a href={social.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>
        )}
        {social.linkedin && (
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full h-8 w-8"
          >
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        )}
        {social.github && (
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full h-8 w-8"
          >
            <a href={social.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
