import { defineConfig } from 'rollup';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import image from '@rollup/plugin-image';

export default defineConfig([
  {
    input: './src/index.ts',
    output: [
      {
        dir: 'dist/lib',
        format: 'cjs',
        exports: 'named',
        entryFileNames: () => `index.js`
      }
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      typescript(),
      postcss(),
      commonjs(),
      image(),
      url({
        include: ['**/*.woff', '**/*.woff2', '**/*.ttf'],
        limit: Infinity
      })
    ],
    external: [/^react(\/.+|$)/]
  }
]);
