import { extendTheme } from '@chakra-ui/react';

const styles = {
	global: (props) => ({
		body: {
			bg: mode('#f0e7db', '#202023')(props),
		},
	}),
};

const components = {
	Heading: {
		variants: {
			'section-title': {
				textDecoration: 'underline',
				fontSize: 20,
				textUnderlineOffset: 6,
				textDecorationColor: '#525252',
				textDecorationThickness: 4,
				marginTop: 3,
				marginBottom: 4,
			},
		},
	},
	Link: {
		baseStyle: (props) => ({
			color: mode('#3d7aed', '#ff63c3')(props),
			textUnderlineOffset: 3,
		}),
	},
};

// color mode config
const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

// colors
const colors = {
	brand: {
		100: '#6E7C7E',
		300: '#A4B0B1',
	},
};

// fonts
const fonts = {
	heading: "'Solway', serif",
	body: "'Solway', serif",
};
// extend the theme
const theme = extendTheme({ config, fonts, colors });

export default theme;
