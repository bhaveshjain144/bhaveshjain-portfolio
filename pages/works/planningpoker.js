import { Container, Badge, Link, List, ListItem, SimpleGrid } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="ecom">
            <Container maxWidth="1200px">
                <Title>
                    E-Commerce Website <Badge fontSize={20}>2022</Badge>
                </Title>
                <P>
                    A Planning Poker is a gamified technique that follows Agile Methodology and SDLC which development teams uses to guess the effort of project management tasks. These estimations are based on the entire group&apos;s input and consensus, making them more engaging and accurate than other methods
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
                        <span>NodeJS, Express, ReactJS and Rest-Api</span>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="">aaaa</Link>
                    </ListItem> */}
                </List>
                <SimpleGrid columns={[1, 1, 1]} gap={6}>
                    <WorkImage src="/images/works/planningpoker.png" alt="Planning Poker" />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work