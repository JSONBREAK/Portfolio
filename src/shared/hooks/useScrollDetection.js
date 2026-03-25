import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Throttle function to limit function execution frequency
 * @param {Function} func - Function to throttle
 * @param {number} limit - Throttle interval in milliseconds
 * @returns {Function} - Throttled function
 */
const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Custom hook for detecting current section during scroll
 * @param {Array} items - Array of items with sectionId
 * @returns {string} - Current section ID
 */
export const useScrollDetection = (items = []) => {
  const [currentSection, setCurrentSection] = useState("");
  const throttledScrollRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (window.scrollY < 8) {
      setCurrentSection(items[0]?.sectionId || "");
      return;
    }

    let minDistance = Infinity;
    let closestSection = null;

    for (const item of items) {
      const element = document.getElementById(item.sectionId);
      if (element) {
        const distance = Math.abs(element.getBoundingClientRect().top);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = item.sectionId;
        }
      }
    }

    if (closestSection) {
      setCurrentSection(closestSection);
    }
  }, [items]);

  useEffect(() => {
    // Create throttled version of handleScroll (150ms throttle interval)
    throttledScrollRef.current = throttle(handleScroll, 150);
    
    window.addEventListener('scroll', throttledScrollRef.current);
    return () => window.removeEventListener('scroll', throttledScrollRef.current);
  }, [handleScroll]);

  const scrollToSection = (sectionId) => {
    setCurrentSection(sectionId);
    if (sectionId === items[0]?.sectionId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { currentSection, scrollToSection };
};
