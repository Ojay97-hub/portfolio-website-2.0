// Image dimensions data for responsive images
const IMAGE_DIMENSIONS = {
  '/owen-profile.webp': { width: 400, height: 530 },
  '/project-pics/blackjack.webp': { width: 800, height: 450 },
  '/project-pics/dino-quiz.webp': { width: 800, height: 436 },
  '/project-pics/eventory.webp': { width: 800, height: 433 },
  '/project-pics/jp-brewing.webp': { width: 800, height: 390 },
  '/project-pics/shegitsit.webp': { width: 800, height: 290 },
  '/project-pics/winchester.webp': { width: 800, height: 435 }
}

export const getImageUrl = (path) => {
  // Get the base URL from Vite's import.meta.env
  const base = import.meta.env.BASE_URL;
  // Remove any leading slash from the path to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Combine base URL with image path
  return `${base}${cleanPath}`;
};

// Generate responsive image sources
export const getResponsiveImageUrl = (path, width) => {
  const baseUrl = getImageUrl(path);
  // For now, return the base URL. In production, you could implement
  // server-side image resizing or use a CDN like Cloudinary
  return baseUrl;
};

// Generate srcSet string for responsive images
export const generateSrcSet = (imagePath, widths = [400, 800, 1200, 1600]) => {
  // For now, we'll use the same image but in production you'd have different sizes
  const baseUrl = getImageUrl(imagePath);
  
  // In a real implementation, you would have different sized versions:
  // return widths.map(width => `${baseUrl.replace('.webp', `-${width}w.webp`)} ${width}w`).join(', ');
  
  // For now, return the base image for all sizes (browser will handle scaling)
  return widths.map(width => `${baseUrl} ${width}w`).join(', ');
};

// Generate sizes attribute based on component usage
export const generateSizes = (usage = 'default') => {
  const sizeMap = {
    // Profile image in About section
    profile: '(max-width: 640px) 280px, (max-width: 1024px) 320px, 400px',
    
    // Project cards in grid
    project: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    
    // Featured project carousel
    featured: '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px',
    
    // UI design showcase
    design: '(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 400px',
    
    // Default fallback
    default: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
  };
  
  return sizeMap[usage] || sizeMap.default;
};

// Helper to get responsive image props with dimensions
export const getResponsiveImageProps = (imagePath, usage = 'default') => {
  const dimensions = IMAGE_DIMENSIONS[imagePath] || { width: 800, height: 600 }
  
  return {
    src: getImageUrl(imagePath),
    srcSet: generateSrcSet(imagePath),
    sizes: generateSizes(usage),
    width: dimensions.width,
    height: dimensions.height
  };
};

// Preload critical images
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Batch preload multiple images
export const preloadImages = async (imagePaths) => {
  const promises = imagePaths.map(path => preloadImage(getImageUrl(path)));
  try {
    await Promise.all(promises);
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};
