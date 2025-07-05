import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -100px 0px' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin]);

  return { elementRef, isVisible };
}

export function useStaggeredScrollAnimation(itemsCount: number, options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -100px 0px' } = options;
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const elementRef = useRef<HTMLElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Clear any existing timeouts
          timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
          timeoutsRef.current = [];
          
          // Stagger the animations with 100ms delays
          for (let i = 0; i < itemsCount; i++) {
            const timeout = setTimeout(() => {
              setVisibleItems(prev => prev.includes(i) ? prev : [...prev, i]);
            }, i * 100);
            timeoutsRef.current.push(timeout);
          }
        } else {
          // Clear timeouts and reset visibility when out of view
          timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
          timeoutsRef.current = [];
          setVisibleItems([]);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentElement);

    return () => {
      // Cleanup timeouts
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [itemsCount, threshold, rootMargin]);

  return { elementRef, visibleItems };
}