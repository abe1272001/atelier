import React from 'react';
import { Text, Box, Icon, Link } from '@chakra-ui/react';
import { DiGithubBadge } from 'react-icons/di';

function Footer() {
	return (
		<Box as="footer" w="100%" p={4} mt={4} textAlign="center">
			<Text fontSize="sm">
				Made in 🇹🇼 by{' '}
				<Link
					href="https://www.linkedin.com/in/%E5%81%89%E4%BF%A1-%E9%99%B3-485288130"
					isExternal
				>
					Abe Chen
				</Link>
			</Text>
			<Link href="https://github.com/abe1272001" isExternal>
				<Icon as={DiGithubBadge} w={6} h={6}></Icon>
			</Link>
		</Box>
	);
}

export default Footer;
