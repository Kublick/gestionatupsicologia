/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,jsx,ts,tsx}',
		'./src/components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				experto1: '#6E172F',
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
