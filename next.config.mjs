/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    distDir: 'dist',
    reactStrictMode: false,
    images: {
        unoptimized: true,
        disableStaticImages: true,
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;
