import type { Skill, Project, Experience, Achievement, Education } from './types';

export const skills: Skill[] = [
  {
    name: 'Java',
    level: 90,
    icon: 'java',
    description: 'Building robust, enterprise-scale applications.',
  },
  {
    name: 'C',
    level: 80,
    icon: 'c',
    description: 'Low-level programming and system understanding.',
  },
    {
    name: 'MySQL',
    level: 90,
    icon: 'mysql',
    description: 'Designing and managing relational databases efficiently.',
  },
 
  {
    name: 'React',
    level: 70,
    icon: 'react',
    description: 'Advanced proficiency in building complex UIs.',
  },
  {
    name: 'Node.js',
    level: 70,
    icon: 'nodejs',
    description: 'Skilled in creating scalable back-end services.',
  },
  {
    name: 'Express.js',
    level: 70,
    icon: 'express',
    description: 'Rapidly developing RESTful APIs and web backends.',
  },
  {
    name: 'Spring Boot',
    level: 70,
    icon: 'springboot',
    description: 'Creating stand-alone, production-grade Spring based Applications.',
  },
  {
    name: 'CSS3',
    level: 92,
    icon: 'css3',
    description: 'Crafting modern, responsive layouts and animations.',
  },
    {
    name: 'HTML5',
    level: 95,
    icon: 'html5',
    description: 'Structuring web content with the latest standard.',
  },
    {
    name: 'Computer Networking',
    level: 80,
    icon: 'networking',
    description: 'Understanding network protocols and architecture.',
  },
  {
    name: 'Photoshop',
    level: 80,
    icon: 'photoshop',
    description: 'Professional image manipulation and graphic design.',
  },
  {
    name: 'JavaScript',
    level: 75,
    icon: 'javascript',
    description: 'Building interactive and dynamic web experiences.',
  },
  {
    name: 'DSA',
    level: 60,
    icon: 'dsa',
    description: 'Applying data structures and algorithms for efficient solutions.',
  },
  {
    name: 'Python',
    level: 60,
    icon: 'python',
    description: 'Versatile programming for web, data science, and scripting.',
  },
  {
    name: 'Cloud Computing',
    level: 60,
    icon: 'cloud',
    description: 'Deploying and managing applications on cloud platforms.',
  },
   {
    name: 'Figma',
    level: 60,
    icon: 'figma',
    description: 'From wireframes to high-fidelity prototypes.',
  },
];

export const projects: Project[] = [
  {
    title: 'Public Preference Smart Complaint System',
    description: 'A comprehensive social media platform designed to educate users by raising awareness about laws and regulations practiced in India. It also includes a complaint feature to address everyday issues, while enabling users to interact and engage by creating and sharing posts.',
    image: '/i1.png',
    aiHint: 'Social Media',
    tags: ['React Js', 'Node js', 'Express Js', 'MySql'],
    links: {
      github: 'https://github.com/Revith-Kumar/Public-Preference-Smart-Complaint-System-Social-Media-',
      live: '#',
    },
  },
  {
    title: 'Age and Gender Indentification System',
    description: 'A web Applicarion can able to identify a persons Gender and their Age .And this project is based on Machine Learning. The framework used in this project is OpenCV and Flask.',
    image: '/i2.png',
    aiHint: 'dashboard chart',
    tags: ['Python', 'Flask', 'Open CV'],
    links: {
      github: 'https://github.com/Revith-Kumar/Age-and-Gender-Detection',
      live: '#',
    },
  },
  {
    title: 'Console based Bank Application',
    description: 'The Console-Based Bank System is a simple Java application that simulates basic banking operations using Object-Oriented Programming principles. It allows users to manage savings and checking accounts, facilitating functionalities such as deposits, withdrawals, balance checks, and interest calculations.',
    image: '/i.png',
    aiHint: 'task manager',
    tags: ['Java', 'OOPS'],
    links: {
      github: 'https://github.com/Revith-Kumar/Banking-System',
      live: '#',
    },
  },
];

export const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Tata Consultancy Service(TCS)',
    duration: '2025 - Present',
    description: 'Led the development of core features for our flagship product, mentored junior engineers, and improved system performance by 30%.',
  },
  {
    role: 'Product Developer Intern',
    company: 'Tata Consultancy Service(TCS)',
    duration: '2 Months(2025)',
    description: 'Developed and maintained client websites and web applications, focusing on creating pixel-perfect, user-friendly experiences.',
  },
  {
    role: 'Web Developer Intern',
    company: 'Deciduo LLP',
    duration: '2 Months(2023)',
    description: 'Assisted in building responsive websites using HTML, CSS, and JavaScript. Gained foundational skills in a fast-paced agency environment.',
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Programming in Java (NPTEL Certified)',
    description: 'Certified in Java programming with demonstrated skills in object-oriented development and core Java concepts.',
    icon: 'award',
  },
  {
    title: 'Best Paper Award',
    description: 'Awarded by Kongu Engineering College. for a novel Idea that significantly reduce fuel consumption by regenerating electricity for E-Vehicles.',
    icon: 'medal',
  },
  {
    title: 'Problem Solving',
    description: 'Actively Solving problems in Leetcode around 200+ DSA Problems .',
    icon: 'briefcase',
  },
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Engineering in Mechanical Engineering',
    institution: 'Bannari Amman Institute of Technology',
    duration: '2021 - 2025',
    description: 'Graduated with honors.But Focused on software engineering, algorithms, and artificial intelligence.',
  },
  {
    degree: '12th Grade',
    institution: 'Venkateswara Vidyalaya Matric Higher Secondary School',
    duration: '2020 - 2021',
    description: 'Completed Higher Secondary Education (12th Grade) in Bio-Maths',
  }
];
