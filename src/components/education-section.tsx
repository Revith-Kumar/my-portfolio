import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { education } from '@/lib/data';

export default function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-primary dark:text-primary">Education</h2>
          <p className="text-lg text-muted-foreground mt-2 font-body">My academic background and qualifications.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="bg-card hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full mt-1">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-xl">{edu.degree}</CardTitle>
                    <p className="font-headline text-lg text-accent">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground font-body mt-1">{edu.duration}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pl-[76px] pt-0">
                <p className="text-foreground/80 font-body">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
