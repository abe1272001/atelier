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

export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode();
	const categories = [
		{
			categoryName: 'Aroma/Scent',
			imageUrl: '/images/S__14245957.jpg',
		},
		{
			categoryName: 'Parfume',
			imageUrl: '/images/S__14245962.jpg',
		},
		{
			categoryName: 'Hand',
			imageUrl: '/images/S__14245935.jpg',
		},
		{
			categoryName: 'Body',
			imageUrl: '/images/S__14245937.jpg',
		},
		{
			categoryName: 'Tableware',
			imageUrl: '/images/S__14245959.jpg',
		},
		{
			categoryName: 'Deco',
			imageUrl: '/images/S__14245938.jpg',
		},
		{
			categoryName: 'Vintages',
			imageUrl: '/images/S__14245962.jpg',
		},
	];
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
				<Box>
					<Grid templateColumns="repeat(2, 1fr)" gap={0}>
						{categories.map((category) => (
							<NextLink
								key={category.categoryName}
								href={`/collection/${category.categoryName}`}
							>
								<Link>
									<GridItem width="100%" bg="gray.100" position="relative">
										<Image
											src={category.imageUrl}
											fit="cover"
											width="100%"
											height={['200px', '380px']}
											alt={category.categoryName}
										/>
										<Text
											textAlign="center"
											position="absolute"
											bottom="8px"
											left="8px"
											px={3}
											py={1}
											borderRadius="base"
											bg={'whiteAlpha.800'}
											css={{ backdropFilter: 'blur(8px)' }}
										>
											{category.categoryName}
										</Text>
									</GridItem>
								</Link>
							</NextLink>
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
