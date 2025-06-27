'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { smoothScrollTo } from '@/lib/scroll';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const isClickScrolling = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      // On page load or refresh, scroll to top and set active link to Home.
      window.scrollTo(0, 0);
      setActiveSection('#hero');
    } else {
      setActiveSection('');
      return;
    }

    const sections = navLinks
      .map(link => (link.href.startsWith('#') ? document.getElementById(link.href.substring(1)) : null))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-65px 0px -55% 0px",
      }
    );

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      
      isClickScrolling.current = true;
      setActiveSection(href);

      smoothScrollTo(href.substring(1), 400, () => {
        setTimeout(() => {
            isClickScrolling.current = false;
        }, 100);
      });
    }
    setIsMenuOpen(false);
  };
  
  const getNavLinkClasses = (href: string, isMobile = false) => {
    const isActive = pathname === '/' && activeSection === href;
    
    return cn(
      'relative font-medium font-headline text-foreground/80 hover:text-primary transition-colors duration-300',
      isMobile ? 'text-lg' : 'text-sm',
      {
        'active-link-underline text-primary': isActive,
      }
    );
  }
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
        href="/"
        onClick={(e) => {
          if (pathname === '/') {
            handleLinkClick(e, '#hero');
          }
        }}
        className="flex items-center space-x-2"
      >
          <span className="flex items-center justify-center h-8 w-8 bg-primary text-primary-foreground rounded-full text-lg font-bold">
            R
          </span>
          <span className="text-2xl font-bold font-headline text-primary dark:text-primary">Revith</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={getNavLinkClasses(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
                <nav className="flex flex-col gap-4 p-6 pt-12">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={getNavLinkClasses(link.href, true)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
