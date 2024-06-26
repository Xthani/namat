const path = require('path');

/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['www.namatgt.com'],
  },
};

module.exports = nextConfig;
