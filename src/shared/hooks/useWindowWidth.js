// DEPRECATED: useWindowWidth hook is no longer used in the project.
// Keeping for potential future use. If not needed, remove this file.
// Tailwind's responsive utilities (md:, lg:, etc) should be used instead.

/*
import { useEffect, useState } from 'react';

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}
*/
