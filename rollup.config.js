import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/index.ts',
	output: [
    {
      dir: 'dist',
      format: 'cjs',
			entryFileNames: '[name].cjs',
			chunkFileNames: '[name]-[hash].cjs',
		},
    {
      dir: 'dist',
      format: 'es',
      entryFileNames: '[name].mjs',
      chunkFileNames: '[name]-[hash].mjs',
    },
  ],
  plugins: [
    typescript({ declaration: true, declarationDir: 'dist/types' }),
  ],
};

