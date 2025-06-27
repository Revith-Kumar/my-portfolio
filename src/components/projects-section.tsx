import Image from 'next/image';
import Link from 'next/link';
import { Github, Globe } from 'lucide-react';
import { projects } from '@/lib/data';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-15 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-7">
          <h2 className="text-4xl font-headline font-bold text-primary dark:text-primary">Featured Projects</h2>
          <p className="text-lg text-muted-foreground mt-2 font-body">A selection of my work. Click on a project to learn more.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={project.aiHint}
                />
              </CardHeader>
              <div className="p-6 flex flex-col flex-grow">
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                <CardDescription className="font-body mt-2 flex-grow">{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-accent-foreground bg-accent">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <CardFooter className="bg-muted/50 p-4 flex justify-end gap-2">
                <Button asChild variant="ghost" size="icon">
                  <Link href={project.links.github} target="_blank"><Github className="h-5 w-5" /></Link>
                </Button>
                <Button asChild variant="ghost" size="icon">
                  <Link href={project.links.live} target="_blank"><Globe className="h-5 w-5" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
