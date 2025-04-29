// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: './frontend',  // Set the root to the frontend directory
  build: {
    outDir: '../dist',  // Ensure the build output is in the root
  },
});
