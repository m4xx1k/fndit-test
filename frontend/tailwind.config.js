/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	safelist: [
		{
			pattern: /(text|font|bg|m|p|flex|align|items|justify|w|h)-*/,
		},
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
