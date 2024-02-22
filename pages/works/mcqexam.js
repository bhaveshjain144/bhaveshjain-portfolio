import { Container, Badge, Link, List, ListItem, SimpleGrid } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="MCQEXAM">
            <Container maxWidth="1200px">
                <Title>
                    Mcq Exam <Badge fontSize={20}>2023</Badge>
                </Title>
                <P>
                    An innovative online MCQ (Multiple Choice Question) exam platform. The platform&apos;s main objective is to enable teachers to create MCQ-based exams, while providing users with the opportunity to participate in these online exams in real-time.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/bhaveshjain144/mcqexam/">
                        https://github.com/bhaveshjain144/mcqexam/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Python, Django, Django-Widget-Tweaks, Javascript and HTML/CSS</span>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="">aaaa</Link>
                    </ListItem> */}
                </List>

                <SimpleGrid columns={[1, 1, 1]} gap={6}>
                    <WorkImage src="/images/works/mcqexam.png" alt="MCQEXAM" />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work