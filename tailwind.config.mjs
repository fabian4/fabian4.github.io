/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--gray-dark)',
				primary: 'var(--accent)',
				muted: 'var(--gray)',
				'gray-light': 'var(--gray-light)',
				border: 'var(--border-color)',
			},
			fontFamily: {
				sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
				mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						maxWidth: '74ch',
						color: 'var(--gray-dark)',
						fontSize: '1rem', // 16px base
						lineHeight: '1.7',

						// Large Screen Scaling (capped at ~17px)
						[`@media (min-width: ${theme('screens.lg')})`]: {
							fontSize: '1.0625rem', // 17px
							lineHeight: '1.75',
						},

						// Elements
						p: {
							marginTop: '1.25em',
							marginBottom: '1.25em',
						},
						a: {
							color: 'var(--black)',
							textDecoration: 'underline',
							textDecorationColor: 'var(--gray)',
							textUnderlineOffset: '4px',
							fontWeight: '500',
							transition: 'all 0.2s',
							'&:hover': {
								color: 'var(--accent)',
								textDecorationColor: 'var(--accent)',
							},
						},
						// Headings - slightly tighter spacing for density
						h1: {
							color: 'var(--black)',
							letterSpacing: '-0.025em',
							fontWeight: '800',
							marginBottom: '0.8em',
						},
						h2: {
							color: 'var(--black)',
							fontWeight: '700',
							marginTop: '2.5em',
							marginBottom: '1em',
							lineHeight: '1.3',
						},
						h3: {
							color: 'var(--black)',
							fontWeight: '600',
							marginTop: '2em',
							marginBottom: '0.8em',
							lineHeight: '1.3',
						},
						h4: {
							color: 'var(--black)',
							fontWeight: '600',
							marginTop: '1.5em',
							marginBottom: '0.5em',
						},

						// Lists - improve density
						'ul > li': {
							marginTop: '0.5em',
							marginBottom: '0.5em',
							paddingLeft: '0.375em',
						},
						'ol > li': {
							marginTop: '0.5em',
							marginBottom: '0.5em',
							paddingLeft: '0.375em',
						},

						strong: { color: 'var(--black)', fontWeight: '600' },

						blockquote: {
							borderLeftWidth: '3px',
							borderLeftColor: 'var(--accent)',
							color: 'var(--gray-dark)',
							fontStyle: 'italic',
							fontWeight: '500',
							marginTop: '0',
							marginBottom: '0',
							paddingLeft: '0.5em',
							paddingTop: '0.25em',
							paddingBottom: '0.25em',
							quotes: 'none',
							fontSize: '0.95em',
						},
						'blockquote p': {
							marginTop: '0',
							marginBottom: '0',
						},
						'blockquote p:first-of-type': {
							marginTop: '0',
						},
						'blockquote p:last-of-type': {
							marginBottom: '0',
						},

						// Code & Pre are handled globally for better Shiki/Dark mode support
						// See src/styles/global.css
						code: {
							fontWeight: '400',
							color: 'inherit',
						},
						'code::before': { content: 'none' },
						'code::after': { content: 'none' },

						pre: {
							fontWeight: '400',
							margin: '0', // Reset margin as it's handled by class
							padding: '0', // Reset padding
							backgroundColor: 'transparent',
						},

						hr: {
							borderColor: 'var(--border-color)',
							marginTop: '3em',
							marginBottom: '3em',
						},
					},
				},
			}),
		},
	},
	plugins: [typography],
}
