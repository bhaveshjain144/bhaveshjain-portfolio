import Head from 'next/head'
import Navbar from '../navbar'
import NoSsr from '../no-ssr.js';
import { Box, Container } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import VoxelDog from '../voxel-dog';
import Footer from '../footer';
import { useColorModeValue } from '@chakra-ui/react';
const Main = ({ children }) => {
    const router = useRouter();
    return (
        // rgb(240, 231, 219)
        <Box as="main" pb={8} bg={useColorModeValue('#FFFFE0')} color={useColorModeValue('black', 'cyan')}>
            <Head>
                <meta name="viewport" content="width =device-width, initial-scale=1" />
                    <title>Bhavesh Jain's Homepage</title>
            </Head>

            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                {/* <NoSsr>
                </NoSsr> */}
                <VoxelDog />
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main