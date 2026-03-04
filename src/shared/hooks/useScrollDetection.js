import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for detecting current section during scroll
 * @param {Array} items - Array of items with sectionId
 * @returns {string} - Current section ID
 */
export const useScrollDetection = (items = []) => {
  const [currentSection, setCurrentSection] = useState("");

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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
