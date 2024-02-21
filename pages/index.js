import NextLink from 'next/link'
import {
    Container,
    Box,
    Button,
    List,
    Icon,
    Heading,
    Image,
    Link,
    useColorModeValue,
    ListItem
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import Paragraph from '../components/paragraph';
import Section from '../components/section';
import { BioSection, BioYear } from '../components/bio';
// import { GridItem } from '../components/grid-item';
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoVercel
} from 'react-icons/io5';
import { SiLeetcode } from "react-icons/si";

const Page = () => {
    return (
        <Layout>
            <Container maxWidth={'1200px'} fontSize={"xl"}>
                {/* <Box
                    borderRadius="lg"
                    bg={useColorModeValue('#D3D3D3', '#D0D0D0 ')}
                    p={3}
                    mb={6}
                    align="center"
                >
                    Hello, I&apos;m a full-stack developer based in India!
                </Box> */}

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Bhavesh Jain
                        </Heading>
                        <p>[ Developer | Athlete | Trader | Artist ]</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        textAlign="center"
                    >
                        <Image
                            borderColor="#FFEFD5"
                            borderWidth={4}
                            borderStyle="solid"
                            maxWidth="130px"
                            display="inline-block"
                            borderRadius="full"
                            src="images/bhavesh.png"
                            alt="Profile Image"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About Me
                    </Heading>
                    <Box
                        borderRadius="lg"
                        mb={6}
                        p={3}
                        textAlign="center"
                        bg={useColorModeValue('#FFEFD5', 'whiteAlpha.200')}
                    >
                        <Paragraph>
                            Hello people, I am Bhavesh Jain. I&apos;m 22 years old. A Full Stack Developer and a freelancer too
                            with a passion and potential in building digital services. I have a
                            knack for recent technologies, from planning and designing all the way
                            to solving real-life problems with code. When not working on devlopment,
                            I prefer developing and upgrading my lifestyle. I&apos;m very much involed into fitness (body building and yoga). 
                            Also, I love to play all sort of sports (chess, cricket, volleyball and etc...) and sometimes gets into trading.
                            Additionally my acting and dancing skills are very fine. I always thrive for challenges and have desire to learn.
                        </Paragraph>
                    </Box>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section>
                    <Heading as="h2" variant="section-title">
                        Work
                    </Heading>
                    <Box
                        borderRadius="lg"
                        mb={6}
                        p={3}
                        textAlign="center"
                        bg={useColorModeValue('#FFEFD5', 'whiteAlpha.200')}
                    >
                        <Paragraph>
                            My work-related tech stack is MERN (MongoDB, ExpressJS, ReactJS and Nodejs) but I love learning new frameworks as well as language. Right now I am trying out Socket Programming , Next.Js and ChakraUI. You can checkout some of my work in my portfolio.
                        </Paragraph>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h2" variant="section-title">
                        Bio
                    </Heading>
                    <Box
                        borderRadius="lg"
                        mb={6}
                        p={3}
                        textAlign="left"
                        bg={useColorModeValue('#FFEFD5', 'whiteAlpha.200')}
                    >
                        <BioSection>
                            <BioYear>2001</BioYear>
                            Born in Bhatapara, India.
                        </BioSection>
                        <hr style={{
                            backgroundColor: "teal",
                            height: 1.5,
                            marginBottom: "10px"
                        }} />
                        <BioSection>
                            <BioYear>2018</BioYear>
                            Graduated Higher Secondary School from Ambuja Vidya Peeth, Rawan
                        </BioSection>
                        <hr style={{
                            backgroundColor: "teal",
                            height: 1.5,
                            marginBottom: "10px"
                        }} />
                        <BioSection>
                            <BioYear>2018</BioYear>
                            Cleared [ JEE, SRMJEEE and VITEEE ]
                        </BioSection>
                        <hr style={{
                            backgroundColor: "teal",
                            height: 1.5,
                            marginBottom: "10px"
                        }} />
                        <BioSection>
                            <BioYear>2022</BioYear>
                            Graduated in B.Tech degree in the field of Computer Science & Engineering with specialization in Software Engineering from SRM University
                        </BioSection>
                        <hr style={{
                            backgroundColor: "teal",
                            height: 1.5,
                            marginBottom: "10px"
                        }} />
                        <BioSection>
                            <BioYear>2022</BioYear>
                            Completed Internship as a Software Engineer Trainee at Impelsys. Got esential industrial training and worked in few real-time projects.
                        </BioSection>
                        <hr style={{
                            backgroundColor: "teal",
                            height: 1.5,
                            marginBottom: "10px"
                        }} />
                        <BioSection>
                            <BioYear>2023</BioYear>
                            Worked under an Early-Startup Company called AIE Technology Pvt Ltd. and contributed  to the major development of a Web Application SchoolPen.
                        </BioSection>
                        <hr style={{
                            backgroundColor: "teal",
                            height: 1.5,
                            marginBottom: "10px"
                        }} />
                        <BioSection>
                            <BioYear>2022 to present</BioYear>
                            Working as a freelancer.
                        </BioSection>
                        <hr style={{
                            backgroundColor: "teal",
                            height: 1.5,
                            marginBottom: "10px"
                        }} />
                    </Box>

                </Section>

                <Section delay={0.3}>
                    <Heading as="h2" variant="section-title">
                        I 🤍
                    </Heading>
                    <Box
                        borderRadius="lg"
                        mb={6}
                        p={3}
                        textAlign="center"
                        bg={useColorModeValue('#FFEFD5', 'whiteAlpha.200')}
                    >
                        <Paragraph as="h2" >
                            <Link href="https://leetcode.com/bhaveshjain14" color={useColorModeValue('teal', 'magenta')}>
                                Coding |{' '}
                            </Link>
                            <Link href="https://www.instagram.com/bhaveshjain_._" color={useColorModeValue('teal', 'magenta')}>
                                Travelling |{' '}
                            </Link>
                            <Link color={useColorModeValue('teal', 'magenta')}>Trading |</Link>
                            <Link href="https://www.instagram.com/bhaveshjain_._" color={useColorModeValue('teal', 'magenta')}>
                                {' '}Blogging{' '}|
                            </Link>
                            <Link href="https://www.instagram.com/_khuli_kitaab_" color={useColorModeValue('teal', 'magenta')}> Poetry |</Link>
                            <Link color={useColorModeValue('teal', 'magenta')}> Art |</Link>
                            <Link color={useColorModeValue('teal', 'magenta')}> Music |</Link>
                            <Link color={useColorModeValue('teal', 'magenta')}> Sports |</Link>
                            <Link color={useColorModeValue('teal', 'magenta')}> Dance |</Link>
                            <Link color={useColorModeValue('teal', 'magenta')}> Acting</Link>
                        </Paragraph>
                    </Box>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h2" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/bhaveshjain14/" target="_blank">
                                <Button variant="ghost" colorScheme='teal' leftIcon={<Icon as={IoLogoLinkedin} />} fontSize={'20px'}>
                                    @bhaveshjain14
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://github.com/bhaveshjain144/" target="_blank">
                                <Button variant="ghost" colorScheme='teal' leftIcon={<Icon as={IoLogoGithub} />} fontSize={'20px'}>
                                    @bhaveshjain144
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/bhaveshjain_._/" target="_blank">
                                <Button variant="ghost" colorScheme='teal' leftIcon={<Icon as={IoLogoInstagram} />} fontSize={'20px'}>
                                    @bhaveshjain_._
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/bhaveshbj14" target="_blank">
                                <Button variant="ghost" colorScheme='teal' leftIcon={<Icon as={IoLogoTwitter} />} fontSize={'20px'}>
                                    @bhaveshbj14
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://leetcode.com/bhaveshjain14/" target="_blank">
                                <Button variant="ghost" colorScheme='teal' leftIcon={<Icon as={SiLeetcode} />} fontSize={'20px'}>
                                    @bhaveshjain14
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://vercel.com/new/bhavesh-jains-projects-898cdc08" target="_blank">
                                <Button variant="ghost" colorScheme='teal' leftIcon={<Icon as={IoLogoVercel} />} fontSize={'20px'}>
                                    @bhaveshjain144
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page;