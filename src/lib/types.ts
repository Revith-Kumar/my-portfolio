export type Skill = {
  name: string;
  level: number;
  icon: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  aiHint: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

export type Achievement = {
  title: string;
  description:string;
  icon: 'award' | 'medal' | 'briefcase';
};

export type Education = {
  degree: string;
  institution: string;
  duration: string;
  description: string;
};
