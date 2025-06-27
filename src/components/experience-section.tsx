import { experiences } from '@/lib/data';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-15">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-primary dark:text-primary">Work Experience</h2>
          <p className="text-lg text-muted-foreground mt-2 font-body">My professional journey and key roles.</p>
        </div>

        {/* Desktop Timeline */}
        <div className="relative max-w-3xl mx-auto hidden md:block">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 flex justify-between items-center w-full">
              {index % 2 === 0 ? (
                <>
                  <div className="w-5/12 order-1 text-right">
                    <p className="text-sm text-muted-foreground font-body">{exp.duration}</p>
                    <h3 className="text-2xl font-headline font-bold text-primary dark:text-primary">{exp.role}</h3>
                    <h4 className="text-lg font-headline text-accent">{exp.company}</h4>
                    <p className="mt-2 text-foreground font-body">{exp.description}</p>
                  </div>
                  <div className="order-2 z-10 flex items-center justify-center w-8 h-8 bg-primary rounded-full">
                    <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div className="w-5/12 order-3"></div>
                </>
              ) : (
                <>
                  <div className="w-5/12 order-1"></div>
                  <div className="order-2 z-10 flex items-center justify-center w-8 h-8 bg-primary rounded-full">
                    <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div className="w-5/12 order-3 text-left">
                    <p className="text-sm text-muted-foreground font-body">{exp.duration}</p>
                    <h3 className="text-2xl font-headline font-bold text-primary dark:text-primary">{exp.role}</h3>
                    <h4 className="text-lg font-headline text-accent">{exp.company}</h4>
                    <p className="mt-2 text-foreground font-body">{exp.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="relative max-w-xl mx-auto md:hidden">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-4 top-1 -translate-x-1/2 z-10 flex items-center justify-center w-8 h-8 bg-primary rounded-full">
                  <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-muted-foreground font-body">{exp.duration}</p>
                  <h3 className="text-xl font-headline font-bold text-primary dark:text-primary">{exp.role}</h3>
                  <h4 className="text-lg font-headline text-accent">{exp.company}</h4>
                  <p className="mt-2 text-foreground font-body">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
