/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Exclude problematic directories from being scanned
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules',
        '**/.next',
        '**/Application Data',
        '**/AppData',
        '**/Local Settings',
        '**/Program Files',
        '**/Program Files (x86)',
        '**/Windows',
      ],
    };
    return config;
  },
};

module.exports = nextConfig;
