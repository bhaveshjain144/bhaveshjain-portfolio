import { Container, Badge, Link, List, ListItem, SimpleGrid } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Whatsapp">
            <Container maxWidth="1200px">
                <Title>
                    Whatsapp<Badge>2023</Badge>
                </Title>
                <P>
                    Whatsapp Clone
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="www.youtube.com/">
                            https://www.google.com/ <ExternalLinkIcon mx="2px" />
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
                    <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="">aaaa</Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <WorkImage src="/images/works/whatsapp.png" alt="Whatsapp" />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work