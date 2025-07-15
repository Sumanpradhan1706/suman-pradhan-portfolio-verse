import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 }
      ]
    },
    {
      title: "Styling & Design",
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "SCSS/Sass", level: 80 },
        { name: "Styled Components", level: 75 },
        { name: "Responsive Design", level: 95 },
        { name: "UI/UX Principles", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Webpack/Vite", level: 75 },
        { name: "npm/yarn", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Chrome DevTools", level: 85 }
      ]
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "Next.js", level: 80 },
        { name: "Three.js", level: 70 },
        { name: "React Router", level: 85 },
        { name: "Zustand/Redux", level: 75 },
        { name: "React Query", level: 80 }
      ]
    }
  ];

  const ProgressBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <Badge variant="secondary" className="text-xs">{skill.level}%</Badge>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Constantly learning and improving my technical skills to build better web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-500"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-primary rounded-full"></div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms` }}
                  >
                    <ProgressBar skill={skill} />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-glow border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Always Learning</h3>
              <p className="text-foreground/80 leading-relaxed">
                The web development landscape is constantly evolving, and I'm committed to staying 
                current with the latest technologies, frameworks, and best practices. Currently exploring 
                advanced React patterns, Web3 technologies, and AI integration.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}