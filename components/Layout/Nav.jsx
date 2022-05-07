import React, { useRef } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import {
	Link,
	Box,
	Flex,
	Stack,
	Container,
	Text,
	useColorModeValue,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Button,
	Icon,
	List,
	ListItem,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { CgMenuRight } from 'react-icons/cg';

import logo from '../../public/images/logo.jpg';

const LinkItem = ({ href, path, target, children, ...props }) => {
	const active = path === href;
	const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.800');
	return (
		<NextLink href={href} passHref scroll={false}>
			<Link
				p={2}
				bg={active ? 'grassTeal' : undefined}
				color={active ? '#202023' : inactiveColor}
				target={target}
				{...props}
			>
				{children}
			</Link>
		</NextLink>
	);
};

function Nav(props) {
	const { path } = props;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const drawerBtnRef = useRef();
	const handleClick = () => {
		console.log('clicked');
		onOpen();
	};

	return (
		<Box
			bg={useColorModeValue('#ffffff40', '#6E7C7E')}
			position="fixed"
			width="100%"
			css={{ backdropFilter: 'blur(10px)' }}
			zIndex={1}
			h={['8vh', '70px']}
		>
			<Container maxW="container.md" justifyContent="space-between">
				<Flex as="nav" width="100%" height={70}>
					<Box
						grow="1"
						display="flex"
						justifyContent={['space-between', 'flex-start']}
						alignItems="center"
						width="100%"
					>
						<Box display="flex" justifyContent="flex-start" alignItems="center">
							{/* Logo position */}
							{/* <NextLink href="/">
								<Link>
									<Image
										alt="atelier"
										src={logo}
										layout="fixed"
										width={45}
										height={45}
										priority={true}
									/>
								</Link>
							</NextLink> */}
							<NextLink href="/" passHref>
								<Link ml={2}>
									<Text fontSize={['2xl', '3xl']} id="logo">
										atelier
									</Text>
								</Link>
							</NextLink>
						</Box>
						<Box display={{ base: 'block', md: 'none' }}>
							<Icon w={7} h={7} onClick={onOpen} as={CgMenuRight} />
						</Box>
						<Drawer placement="right" onClose={onClose} isOpen={isOpen}>
							<DrawerOverlay />
							<DrawerContent>
								<DrawerHeader textAlign="end">
									<Box>
										<CloseIcon onClick={onClose} />
									</Box>
								</DrawerHeader>
								<DrawerBody>
									<List spacing={3} mt={2}>
										<ListItem>
											<NextLink href="/about">
												<Link onClick={onClose}>About</Link>
											</NextLink>
										</ListItem>
										<ListItem>
											<NextLink href="/collection">
												<Link onClick={onClose}>Collection</Link>
											</NextLink>
										</ListItem>
										<ListItem>
											<NextLink href="/contact">
												<Link onClick={onClose}>Contact</Link>
											</NextLink>
										</ListItem>
										<ListItem onClick={onClose}>
											<NextLink href="/cooperation">
												<Link onClick={onClose}>Cooperation</Link>
											</NextLink>
										</ListItem>
									</List>
								</DrawerBody>
							</DrawerContent>
						</Drawer>
					</Box>

					<Stack
						direction={{ base: 'column', md: 'row' }}
						display={{ base: 'none', md: 'flex' }}
						width={{ base: 'full', md: 'auto' }}
						flexGrow={1}
						justifyContent="flex-end"
						alignItems="center"
					>
						<LinkItem href="/about" path={path}>
							About
						</LinkItem>
						<LinkItem href="/collection" path={path}>
							Collection
						</LinkItem>
						<LinkItem href="/contact" path={path}>
							Contact
						</LinkItem>
						<LinkItem href="/cooperation" path={path}>
							Cooperation
						</LinkItem>
					</Stack>
				</Flex>
			</Container>
		</Box>
	);
}

export default Nav;
