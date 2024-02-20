import { Container, Badge, Link, List, ListItem, SimpleGrid } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Gmail">
            <Container maxWidth="1200px">
                <Title>
                    Gmail<Badge>2023</Badge>
                </Title>
                <P>
                    Gmail Clone
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://gmail-clone-fawn-pi.vercel.app/">
                            https://gmail-clone-fawn-pi.vercel.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, Express, React and MongoDB</span>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="">aaaa</Link>
                    </ListItem> */}
                </List>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <WorkImage src="/images/works/gmail.png" alt="Gmail Clone" />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work