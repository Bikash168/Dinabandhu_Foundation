'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'flip-up';
  delay?: number;
  duration?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.15,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationStyles = () => {
    const baseTransition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    if (isVisible) {
      return {
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1)',
        transition: baseTransition,
      };
    }

    switch (animation) {
      case 'fade-up':
        return {
          opacity: 0,
          transform: 'translate3d(0, 28px, 0)',
          transition: baseTransition,
        };
      case 'fade-down':
        return {
          opacity: 0,
          transform: 'translate3d(0, -28px, 0)',
          transition: baseTransition,
        };
      case 'fade-left':
        return {
          opacity: 0,
          transform: 'translate3d(-32px, 0, 0)',
          transition: baseTransition,
        };
      case 'fade-right':
        return {
          opacity: 0,
          transform: 'translate3d(32px, 0, 0)',
          transition: baseTransition,
        };
      case 'zoom-in':
        return {
          opacity: 0,
          transform: 'scale(0.92)',
          transition: baseTransition,
        };
      case 'flip-up':
        return {
          opacity: 0,
          transform: 'perspective(600px) rotateX(15deg) translate3d(0, 20px, 0)',
          transition: baseTransition,
        };
      default:
        return {
          opacity: 0,
          transform: 'translate3d(0, 24px, 0)',
          transition: baseTransition,
        };
    }
  };

  return (
    <div ref={domRef} style={getAnimationStyles()} className={className}>
      {children}
    </div>
  );
}
