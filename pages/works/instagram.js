import { Container, Badge, Link, List, ListItem, SimpleGrid } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Instagram">
            <Container maxWidth="1200px">
                <Title>
                    Instagram <Badge fontSize={20}>2023</Badge>
                </Title>
                <P>
                    Instagram Clone
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/bhaveshjain144/instagram-clone/">
                        https://github.com/bhaveshjain144/instagram-clone/ <ExternalLinkIcon mx="2px" />
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

                <SimpleGrid columns={[1, 1, 1]} gap={6}>
                    <WorkImage src="/images/works/insta.png" alt="Instagram" />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work