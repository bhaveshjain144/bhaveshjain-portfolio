import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
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
    transition: 200ms ease;
}
&:hover img {
    transform: rotate(20deg);
}
`

const Logo = () => {
    const logoImg = `/images/footprint1.png`

    return (
        (<Link href="/" passHref>
            <LogoBox>
                <Image src={logoImg} width={45} height={45} alt="logo" />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c", sans-serif'
                    fontWeight="bold"
                    ml={3}
                >
                    Bhavesh Jain
                </Text>
            </LogoBox>
        </Link>)
    )
}

export default Logo