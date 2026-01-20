// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import { visit } from 'unist-util-visit';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    site: 'https://fabian4.site',
    	integrations: [mdx(), sitemap(), tailwind(), partytown({
    		config: {
    			forward: ["dataLayer.push"],
    		},
    	})],    vite: {
        plugins: [yaml()]
    },
    markdown: {
        remarkPlugins: [
            remarkGfm,
            () => (tree) => {
                visit(tree, 'code', (node) => {
                    if (node.lang === 'mermaid') {
                        node.type = 'html';
                        const content = node.value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                        node.value = `<div class="mermaid">${content}</div>`;
                    }
                });
            },
        ],
        rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ],
        shikiConfig: {
            // Dual themes for light/dark mode support
            themes: {
                light: 'github-light',
                dark: 'github-dark',
            },
            // Prevent inline styles from overriding our CSS variables where possible,
            // though Astro's default behavior with themes is to use style attributes.
            // We will handle the container background via CSS.
            wrap: false,
        },
    },
});