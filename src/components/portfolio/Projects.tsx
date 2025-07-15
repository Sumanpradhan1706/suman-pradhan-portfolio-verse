import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Code2 } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React, TypeScript, and modern payment integration. Features include user authentication, shopping cart, order management, and responsive design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe API", "React Query"],
      image: "/api/placeholder/400/250",
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern React patterns.",
      technologies: ["React", "Zustand", "DnD Kit", "Socket.io", "SCSS"],
      image: "/api/placeholder/400/250",
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "This very portfolio website showcasing interactive 3D backgrounds, smooth animations, and responsive design. Built with cutting-edge web technologies.",
      technologies: ["React", "Three.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      image: "/api/placeholder/400/250",
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics. Features dark/light mode and offline capabilities.",
      technologies: ["React", "Weather API", "Chart.js", "PWA", "LocalStorage"],
      image: "/api/placeholder/400/250",
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    }
  ];

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
    <Card 
      className={`group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-500 ${
        project.featured ? 'md:col-span-2' : ''
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <div className="h-48 bg-gradient-glow flex items-center justify-center">
          <Code2 className="h-16 w-16 text-primary/70 group-hover:scale-110 transition-transform duration-300" />
        </div>
        {project.featured && (
          <Badge className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground">
            Featured
          </Badge>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-foreground/80 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3 pt-4">
          <Button variant="outline" size="sm" className="flex-1">
            <Github className="h-4 w-4 mr-2" />
            Code
          </Button>
          <Button variant="default" size="sm" className="flex-1">
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for creating 
            exceptional web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-gradient-secondary border-border/50 max-w-xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Want to see more?</h3>
              <p className="text-foreground/80 mb-6">
                Check out my GitHub profile for more projects and contributions.
              </p>
              <Button variant="outline" size="lg">
                <Github className="h-5 w-5 mr-2" />
                View GitHub Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}