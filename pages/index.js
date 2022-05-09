import Head from 'next/head';
import NextImage from 'next/image';
import NextLink from 'next/link';
import {
	Button,
	useColorMode,
	Link,
	Box,
	Grid,
	GridItem,
	VStack,
	Image,
	Text,
	useColorModeValue,
	Heading,
} from '@chakra-ui/react';

import { client, urlFor } from '../lib/sanity-client';
import CategoryBox from '../components/categoryBox';
// {
// 	iiii_atelier;
// }
// Parfume;
// Aroma / Scent;
// Hand;
// Body;

// {
// 	FORi;
// }
// Tableware;
// Deco;
// Vintages;

export default function Home({ categories }) {
	const { colorMode, toggleColorMode } = useColorMode();
	console.log(categories);
	categories.sort((a, b) => {
		return a.order - b.order;
	});
	const filterCategory = (brandName) => {
		return categories.filter((category) => category.brand === brandName);
	};
	const categoriesByFORi = categories.filter(
		(category) => category.brand === 'FORi'
	);
	console.log(filterCategory('FORi'));

	return (
		<VStack spacing={4} align="stretch">
			<Head>
				<title>atelier</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Box
				as="main"
				mt={3}
				// border="1px"
				// borderColor="gray.200"
				// height="1000px"
				// maxHeight="1200px"
			>
				<Box
					width="100%"
					bg="#616C6E"
					height={['200px', '380px']}
					// overflow="hidden"
					backgroundImage="url('/images/logo.jpg')"
					backgroundPosition="50% 50%"
					backgroundRepeat="no-repeat"
					backgroundSize="86%"
				/>
				<Box mt={2}>
					<Heading>FORi</Heading>
					<Grid templateColumns="repeat(2, 1fr)" gap={2}>
						{filterCategory('FORi').map((category) => (
							<CategoryBox category={category} key={category.name} />
						))}
					</Grid>
				</Box>
				<Box mt={1}>
					<Heading>iiii atelier</Heading>
					<Grid templateColumns="repeat(2, 1fr)" gap={2}>
						{filterCategory('iiii atelier').map((category) => (
							<CategoryBox category={category} key={category.name} />
						))}
					</Grid>
				</Box>
			</Box>

			{/* <Button onClick={toggleColorMode}>
				Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
			</Button> */}
		</VStack>
	);
}

export async function getServerSideProps() {
	const categories = await client.fetch('*[_type == "category"]');
	console.log(categories);
	return {
		props: {
			categories,
		},
	};
}
