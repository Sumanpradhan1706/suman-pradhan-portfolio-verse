import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices and industry standards."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing interfaces that provide excellent user experiences."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and cross-platform compatibility."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams and communicating complex technical concepts clearly."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate frontend developer from India with a love for creating beautiful, 
            functional web applications. I specialize in React, TypeScript, and modern CSS frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">My Journey</h3>
            <p className="text-foreground/80 leading-relaxed">
              Started as a curious developer exploring the endless possibilities of web technologies. 
              Today, I focus on building responsive, interactive applications that solve real-world problems.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I believe in continuous learning and staying up-to-date with the latest technologies 
              and development practices. Every project is an opportunity to create something amazing.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Node.js', 'Git'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-gradient-secondary border border-border/50 rounded-full text-sm text-foreground/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-80 bg-gradient-glow rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <Code2 className="h-16 w-16 text-primary mb-4 mx-auto animate-float" />
                <p className="text-lg font-semibold text-foreground">Coding Since 2020</p>
                <p className="text-sm text-muted-foreground">Passionate & Growing</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-500 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}