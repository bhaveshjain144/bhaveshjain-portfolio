import { Container, Badge, Link, List, ListItem, SimpleGrid } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="ShopStore">
            <Container maxWidth="1200px">
                <Title>
                    Shop Store <Badge fontSize={20}>2024</Badge>
                </Title>
                <P>
                    Successfully created an Inventory Management App, which provides user-friendly interface and leading to a significant increase in user engagement by 20%.
                    Implemented advanced features such as real-time notifications, resulting in a substantial decrease in response time by 30% for critical inventory updates.
                    Deployed the application on Vercel and Render, ensuring seamless accessibility and optimal performance.
                    Utilized market analytics tools to make data-driven decisions, leading to a reduction in excess inventory.
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
                        <span>NodeJS, Express, React, MongoDB, SCSS, Redux Toolkit, Cloudinary, Nodemailer and Vercel</span>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="">aaaa</Link>
                    </ListItem> */}
                </List>
                <SimpleGrid columns={[1, 1, 1]} gap={6}>
                    <WorkImage src="/images/works/shopstore.png" alt="Shop Store Screenshot" />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work