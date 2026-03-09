/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static exporting
  // Optional: Add a basePath if your site is deployed to a subpath (like GitHub Pages)
  //basePath: '/jsteckel', 
  images: {
    unoptimized: true, // Might be necessary for some static hosts if Image Optimization API is not supported
  },
};

export default nextConfig;