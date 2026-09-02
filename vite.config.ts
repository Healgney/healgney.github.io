import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

const deployTarget = process.env.DEPLOY_TARGET;
const repoName = process.env.GH_REPO_NAME ?? 'personal-site';
const base = deployTarget === 'gh-pages' && repoName ? `/${repoName}/` : '/';

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 700,
  },
});
