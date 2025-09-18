// Performance monitoring utilities

// Web Vitals tracking
export const trackWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Track Largest Contentful Paint (LCP)
  const trackLCP = () => {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (process.env.NODE_ENV === 'development') {
        console.log('LCP:', lastEntry.startTime);
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });
  };

  // Track First Input Delay (FID)
  const trackFID = () => {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (process.env.NODE_ENV === 'development') {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
      });
    }).observe({ entryTypes: ['first-input'] });
  };

  // Track Cumulative Layout Shift (CLS)
  const trackCLS = () => {
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      if (process.env.NODE_ENV === 'development') {
        console.log('CLS:', clsValue);
      }
    }).observe({ entryTypes: ['layout-shift'] });
  };

  // Only track in development
  if (import.meta.env.DEV) {
    trackLCP();
    trackFID();
    trackCLS();
  }
};

// Resource loading performance
export const trackResourceLoading = () => {
  if (typeof window === 'undefined') return;

  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0];
    const resources = performance.getEntriesByType('resource');
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Page Load Time:', navigation.loadEventEnd - navigation.startTime);
      console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.startTime);
    }
    
    // Track image loading times
    const images = resources.filter(resource => resource.initiatorType === 'img');
    if (process.env.NODE_ENV === 'development') {
      console.log('Image Load Times:', images.map(img => ({
        name: img.name,
        duration: img.duration
      })));
    }
  });
};

// Memory usage tracking (for development)
export const trackMemoryUsage = () => {
  if (typeof window === 'undefined' || !performance.memory) return;

  const logMemory = () => {
    const memory = performance.memory;
    if (process.env.NODE_ENV === 'development') {
      console.log('Memory Usage:', {
        used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
        total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
        limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
      });
    }
  };

  // Log memory usage every 10 seconds in development
  if (import.meta.env.DEV) {
    setInterval(logMemory, 10000);
  }
};
