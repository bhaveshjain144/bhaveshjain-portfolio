import { NextLink, Link } from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
// import FootprintIcon from './icons/footprint'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

> svg {
    transition 200ms ease;
}

&:hover img {
    transform: rotate(20deg);
}
`

const Logo = () => {
    const logoImg = `/images/footprint1${useColorModeValue('', '-dark')}.png`
    return (
        <NextLink href="/" passHref>
            <Link>
                <LogoBox>
                    <Image src={logoImg} width={40} height={40} alt="logo" />
                    {/* <FootprintIcon width={45} height={35} color={useColorModeValue("gray.600", "white")} /> */}
                    <Text
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
    )
}

export default Logo