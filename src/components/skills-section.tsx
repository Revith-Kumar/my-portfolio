import { Database, Network, Binary, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { skills } from '@/lib/data';
import {
  FigmaIcon,
  NodejsIcon,
  ReactIcon,
  JavaIcon,
  CIcon,
  ExpressIcon,
  Css3Icon,
  PhotoshopIcon,
  SpringBootIcon,
  Html5Icon,
  JavascriptIcon,
  PythonIcon,
} from './icons';

const iconComponents: { [key: string]: React.ReactNode } = {
  java: <JavaIcon className="h-8 w-8 text-accent" />,
  c: <CIcon className="h-8 w-8 text-accent" />,
  figma: <FigmaIcon className="h-8 w-8 text-accent" />,
  react: <ReactIcon className="h-8 w-8 text-accent" />,
  nodejs: <NodejsIcon className="h-8 w-8 text-accent" />,
  express: <ExpressIcon className="h-8 w-8 text-accent" />,
  mysql: <Database className="h-8 w-8 text-accent" />,
  css3: <Css3Icon className="h-8 w-8 text-accent" />,
  photoshop: <PhotoshopIcon className="h-8 w-8 text-accent" />,
  springboot: <SpringBootIcon className="h-8 w-8 text-accent" />,
  html5: <Html5Icon className="h-8 w-8 text-accent" />,
  networking: <Network className="h-8 w-8 text-accent" />,
  javascript: <JavascriptIcon className="h-8 w-8 text-accent" />,
  dsa: <Binary className="h-8 w-8 text-accent" />,
  python: <PythonIcon className="h-8 w-8 text-accent" />,
  cloud: <Cloud className="h-8 w-8 text-accent" />,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-15">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-headline font-bold text-primary dark:text-primary">My Expertise</h2>
          <p className="text-lg text-muted-foreground mt-2 font-body">A glimpse into my technical and professional skill set.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-headline">{skill.name}</CardTitle>
                {iconComponents[skill.icon]}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{skill.level}%</div>
                <Progress value={skill.level} className="w-full h-2 mt-2" />
                <p className="text-xs text-muted-foreground mt-1">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
