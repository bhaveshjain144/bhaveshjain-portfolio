// import Logo from "./logo"
import NextLink from 'next/link'
// import noSsr from "./no-ssr.js"
import Image from "next/image"
import {
    Text,
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons"
import ThemeToggleButton from "./theme-toggle-button.js"
import { IoLogoGithub } from 'react-icons/io5'
import logoImg  from '../public/images/footprint1.png'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

img {
    transform: rotate(-20deg);
}
> svg {
    transition 200ms ease;
}

&:hover img {
    transform: rotate(20deg);
}
`
const LinkItem = ({ href, path, _target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href} passHref>
            <Link
                // href={href}
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '@202023' : inactiveColor}
                _target={_target}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px' }}
            zIndex={1}
            {...props}
            fontSize={'xl'}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        {/* <noSsr>
                            <Logo />
                        </noSsr> */}
                        <NextLink href="/" scroll={false} passHref>
                            <Link>
                                <LogoBox>
                                    <Image src={logoImg} width={45} height={45} alt="logo" />
                                    <Text
                                        mt={2}
                                        fontSize={'25px'}
                                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                                        fontFamily='M PLUS Rounded 1c", sans-serif'
                                        fontWeight="bold"
                                        ml={3}
                                    >
                                        Bhavesh Jain
                                    </Text>
                                </LogoBox>
                            </Link>
                        </NextLink>
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/works" path={path} _hover={{ bg: useColorModeValue('teal', 'whiteAlpha.500') }} borderRadius={'40px'}>
                        Works
                    </LinkItem>
                    <LinkItem href="/posts" path={path} _hover={{ bg: useColorModeValue('teal', 'whiteAlpha.500') }} borderRadius={'40px'}>
                        Posts
                    </LinkItem>
                    <LinkItem href="https://github.com/bhaveshjain144/bhaveshjain-portfolio/" path={path} _hover={{ bg: useColorModeValue('teal', 'whiteAlpha.500') }} borderRadius={'40px'}>
                        Resume
                    </LinkItem>
                    <LinkItem
                        _target="_blank"
                        href="https://github.com/bhaveshjain144/bhaveshjain-portfolio/"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                        _hover={{ bg: useColorModeValue('teal', 'whiteAlpha.500') }}
                        borderRadius={'40px'}
                    >
                        <IoLogoGithub />
                        Source
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />

                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Works</MenuItem>
                                </NextLink>
                                <NextLink href="/posts" passHref>
                                    <MenuItem as={Link}>Posts</MenuItem>
                                </NextLink>
                                <NextLink href="/resume" passHref>
                                    <MenuItem as={Link}>Resume</MenuItem>
                                </NextLink>
                                <MenuItem
                                    as={Link}
                                    href="https://github.com/bhaveshjain144/bhaveshjain-portfolio/"
                                >
                                    View Source
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar