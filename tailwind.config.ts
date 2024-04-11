import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config = {
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: ['emerald', 'night']
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
