import { defineConfig, loadEnv } from 'vite'
import analyze from 'rollup-plugin-analyzer'

import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))
  return defineConfig({
    plugins: [react()],
    base: '/openforge_builder/',
    build: {
      target: 'esnext'
    }
  })
}
