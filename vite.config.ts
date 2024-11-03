import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [svelte()],
	css: {
		postcss: {
			plugins: [require('tailwindcss'), require('autoprefixer')]
		}
	}
});
