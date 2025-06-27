import { Github, Linkedin} from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { href: 'https://github.com/Revith-Kumar', icon: <Github className="h-5 w-5" /> },
  { href: 'https://www.linkedin.com/in/revith-kumar-p-3251ba25b', icon: <Linkedin className="h-5 w-5" /> },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="font-body text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Revith Kumar. All rights reserved.</p>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.href} target="_blank" rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-300">
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
