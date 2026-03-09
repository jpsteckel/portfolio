/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Add a basePath if your site is hosted at a subdirectory (e.g., GitHub Pages)
  // For a repo named 'my-repo', the basePath would be '/my-repo'
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', 
  images: {
    // If using the default next/image component with static export, you need to disable image optimization
    // unless you use a third-party loader (see below).
    unoptimized: true, 
  },
};

module.exports = nextConfig;

export default nextConfig;
