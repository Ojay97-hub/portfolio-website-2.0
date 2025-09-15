import { useState, useEffect, useCallback } from 'react';

// Custom hook for throttled scroll events to improve performance
export const useThrottledScroll = (delay = 16) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const throttledScrollHandler = useCallback(() => {
    let timeoutId = null;
    let isThrottled = false;

    const scrollHandler = () => {
      if (!isThrottled) {
        setScrollY(window.scrollY);
        setIsScrolling(true);
        isThrottled = true;
        
        setTimeout(() => {
          isThrottled = false;
        }, delay);
      }

      // Clear existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Set new timeout to detect scroll end
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    return scrollHandler;
  }, [delay]);

  useEffect(() => {
    const scrollHandler = throttledScrollHandler();
    
    // Set initial scroll position
    setScrollY(window.scrollY);
    
    window.addEventListener('scroll', scrollHandler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [throttledScrollHandler]);

  return { scrollY, isScrolling };
};
