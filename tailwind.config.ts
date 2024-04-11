import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config = {
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			'light',
			'dark',
			'cupcake',
			'bumblebee',
			'emerald',
			'corporate',
			'synthwave',
			'retro',
			'cyberpunk',
			'valentine',
			'halloween',
			'garden',
			'forest',
			'aqua',
			'lofi',
			'pastel',
			'fantasy',
			'wireframe',
			'black',
			'luxury',
			'dracula',
			'cmyk',
			'autumn',
			'business',
			'acid',
			'lemonade',
			'night',
			'coffee',
			'winter',
			'dim',
			'nord',
			'sunset'
		]
	},
	theme: {
		extend: {
			fontFamily: {
				poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans]
			}
		}
	}
} satisfies Config;

export default config;
