import { useEffect, useRef } from 'react';

export function useParallax() {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      const yPos = -(rect.top + scrolled) * 0.5;
      
      // Apply parallax to background
      const bgElement = element.querySelector('.parallax-bg') as HTMLElement;
      if (bgElement) {
        bgElement.style.transform = `translate3d(0, ${rate}px, 0)`;
      }

      // Apply different rate to content for layered effect
      const contentElement = element.querySelector('.parallax-content') as HTMLElement;
      if (contentElement) {
        contentElement.style.transform = `translate3d(0, ${yPos * 0.1}px, 0)`;
      }
    };

    // Throttle scroll events for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return elementRef;
}

export function useIntersectionObserver() {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all fade-in elements within this section
    const fadeElements = element.querySelectorAll('.parallax-fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return elementRef;
}