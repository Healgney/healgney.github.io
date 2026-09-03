import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const nodeEnv = (
  globalThis as typeof globalThis & {
    process: { env: Record<string, string | undefined> };
  }
).process.env;
const deployTarget = nodeEnv.DEPLOY_TARGET;
const repoName = nodeEnv.GH_REPO_NAME ?? 'personal-site';
const base = deployTarget === 'gh-pages' && repoName ? `/${repoName}/` : '/';

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: { '@': new URL('./src', import.meta.url).pathname },
  },
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 700,
  },
});
