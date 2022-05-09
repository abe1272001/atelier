import React from 'react';
import NextLink from 'next/link';
import { GridItem, Image, Text, Link } from '@chakra-ui/react';
import { urlFor } from '../../lib/sanity-client';

const CategoryBox = ({ category }) => {
	return (
		<NextLink href={`/collection/${category.name}`}>
			<Link>
				<GridItem width="100%" bg="gray.100" position="relative">
					{category.image && (
						<Image
							src={urlFor(category.image)}
							fit="cover"
							width="100%"
							height={['200px', '380px']}
							alt={category.name}
						/>
					)}
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
						{category.name}
					</Text>
				</GridItem>
			</Link>
		</NextLink>
	);
};

export default CategoryBox;
