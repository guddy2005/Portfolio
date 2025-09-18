'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export function useScrollAnimation(threshold = 0.2) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return {
    ref,
    isInView,
    hasAnimated,
    className: `transition-all duration-700 ${
      isInView
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'
    }`,
  };
}

export function useParallax(speed = 0.5) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const { top } = ref.current.getBoundingClientRect();
      const offset = window.scrollY * speed;
      setOffset(offset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return {
    ref,
    style: {
      transform: `translateY(${offset}px)`,
    },
  };
}

export function useTypewriter(text, speed = 50) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!text) return;

    setIsTyping(true);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayText, isTyping };
}

export function useSmoothCounter(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || isAnimating) return;

    setIsAnimating(true);
    const startTime = Date.now();
    const difference = end - start;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      if (progress < 1) {
        setCount(Math.floor(start + difference * progress));
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(updateCount);
  }, [start, end, duration, isInView, isAnimating]);

  return { ref, count, isAnimating };
}

export function useMouseParallax(strength = 20) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;

      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / strength;
      const y = (e.clientY - top - height / 2) / strength;

      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [strength]);

  return {
    ref,
    style: {
      transform: `translate(${position.x}px, ${position.y}px)`,
    },
  };
}
