'use client';

export const smoothScrollTo = (targetId: string, duration: number = 400, onComplete?: () => void) => {
  const target = document.getElementById(targetId);
  if (!target) {
    console.warn(`Element with id "${targetId}" not found.`);
    onComplete?.();
    return;
  }

  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 0;
  
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 1;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      onComplete?.();
    }
  };

  requestAnimationFrame(animation);
};
