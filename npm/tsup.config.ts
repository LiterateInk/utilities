import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts'],

    outDir: 'dist',
    format: ['cjs', 'esm'],
    
    sourcemap: true,
    minify: "terser",
    clean: true,
    dts: true
  },
  {
    entry: ["src/build.ts"],

    outDir: 'dist',
    format: ['esm'],
    
    sourcemap: true,
    minify: "terser",
    clean: true,
    // as a dependency.
    external: ["terser"]
  }
])