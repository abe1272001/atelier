import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';
import theme from '../theme';
import Fonts from '../styles/fonts.js';

function MyApp({ Component, pageProps, router }) {
	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<Layout router={router}>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
