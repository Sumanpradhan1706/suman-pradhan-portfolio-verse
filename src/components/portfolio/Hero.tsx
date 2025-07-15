import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 animate-glow-pulse">
            Suman Pradhan
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-6 animate-fade-in-up delay-200">
            Frontend Developer
          </p>
          <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in-up delay-300">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <p className="text-lg text-accent">From India with ❤️</p>
          </div>
        </div>

        <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-400">
          Crafting beautiful, interactive web experiences with modern technologies. 
          Passionate about creating user-centric designs that bring ideas to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-500">
          <Button 
            variant="hero" 
            size="hero"
            onClick={() => scrollToSection('projects')}
            className="group"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center gap-6 animate-fade-in-up delay-600">
          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-primary/20">
            <Github className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-primary/20">
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-primary/20">
            <Mail className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}