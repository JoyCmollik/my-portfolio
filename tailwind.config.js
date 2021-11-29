module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				dark: '#0A192F',
				main: '#112240',
				primary: '#CCD6F6',
				secondary: '#8892B0',
				brand: '#64FFDA',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
