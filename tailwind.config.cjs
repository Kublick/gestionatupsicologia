/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				experto1bg: '#6E172F',
				whatsapp: '#35B624',
				greenbutton: 'rgb(131, 201, 45)',
				secondary: '#fbb923',
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
