import React from 'react';
import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Nav from './Nav';
import Footer from './Footer';
function Layout({ children, router }) {
	return (
		<Box pb={6}>
			{/* Nav */}
			<Nav path={router.asPath} />
			{/* Main */}
			<Container maxW="container.md" pt={20}>
				{children}
			</Container>
			{/* Footer */}
			<Footer />
		</Box>
	);
}

export default Layout;
