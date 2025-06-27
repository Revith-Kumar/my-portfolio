import { Award, Briefcase, Medal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { achievements } from '@/lib/data';

const icons = {
  award: <Award className="h-8 w-8 text-accent" />,
  medal: <Medal className="h-8 w-8 text-accent" />,
  briefcase: <Briefcase className="h-8 w-8 text-accent" />,
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-primary dark:text-primary">Achievements & Certifications</h2>
          <p className="text-lg text-muted-foreground mt-2 font-body">Recognition of my dedication and expertise.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-card hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                {icons[achievement.icon as keyof typeof icons]}
                <CardTitle className="font-headline text-xl">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
