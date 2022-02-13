// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
	site: 'https://fabian4.site',
	integrations: [mdx(), sitemap()],
	vite: {
		plugins: [yaml()]
	},
	markdown: {
		shikiConfig: {
			// Steer clear of the default "github-dark" theme
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
		},
	},
});
