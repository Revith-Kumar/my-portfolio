import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


export default function HeroSection() {

  return (
    <section id="hero" className="relative py-20 md:py-30">
       <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="s.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm z-10"></div>
      <div className="container relative z-20 mx-auto px-4 text-center">
        <Avatar className="w-60 h-60 mx-auto mb-6 border-4 border-primary shadow-lg">
          <AvatarImage src="/pd.jpg" alt="Profile Picture" data-ai-hint="profile picture" />
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
        <h1 className="text-5xl md:text-7xl font-bold font-headline text-primary dark:text-primary">
          Revith Kumar
        </h1>
        <p className="text-2xl font-headline mt-2 text-accent">
          Software Engineer
        </p>
        <p className="max-w-3xl mx-auto mt-6 text-lg font-body text-foreground/80">
          I&apos;m a passionate developer with a knack for creating elegant and efficient solutions. 
          With a strong foundation in modern technologies, I love bringing ideas to life from concept to deployment.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
