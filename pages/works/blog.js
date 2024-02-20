import { Container, Badge, Link, List, ListItem, SimpleGrid } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Blog">
            <Container maxWidth="1200px">
                <Title>
                    Blog Website <Badge fontSize={20}>2023-24</Badge>
                </Title>
                <P>
                    Designed and developed a dynamic and responsive blog website, showcasing proficiency in full-stack web development. The project focuses on providing users with a seamless and interactive blogging experience. Key Features :- User Authentication, CRUD Operations, Responsive UI/UX, RESTful API, Frontend-Backend Interaction, Rich Editor and Deployment.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://blog-website-cyan.vercel.app/">
                            https://blog-website-cyan.vercel.app/ <ExternalLinkIcon mx="2px" />
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
                    <WorkImage src="/images/works/blog.png" alt="Blog Website" />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work