export const getImageUrl = (path) => {
  // Get the base URL from Vite's import.meta.env
  const base = import.meta.env.BASE_URL;
  // Remove any leading slash from the path to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Combine base URL with image path
  return `${base}${cleanPath}`;
};
