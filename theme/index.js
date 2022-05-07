import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config
const config = {
	colors: {
		brand: {
			100: '#6E7C7E',
			300: '#A4B0B1',
		},
	},
	fonts: {
		heading: 'Heading Font Name, sans-serif',
		body: 'Body Font Name, sans-serif',
	},
	initialColorMode: 'light',
	useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config });

export default theme;
