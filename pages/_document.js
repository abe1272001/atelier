import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '../theme';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					{/* 👇 Here's the color mode script */}
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
