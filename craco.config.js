const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@c': resolvePath('./src/components'),
      '@api': resolvePath('./src/api'),
      '@': resolvePath('./src'),
    },
  },
};
