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
                    E-Commerce Website <Badge>2024</Badge>
                </Title>
                <P>
                    Successfully replicated the core features of a renowned E-Commerce platform, showcasing proficiency in frontend and backend development.
                    Optimized the user journey, resulting in a significant increase in user satisfaction and a reduction in cart abandonment rates.
                    Integrated secure payment gateways, leading to a substantial improvement in successful payment completions.
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
                        <span>NodeJS, Express, React, MongoDB, Redux and Material-UI</span>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="">aaaa</Link>
                    </ListItem> */}
                </List>


                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <WorkImage src="/images/works/ecom.png" alt="E-Commerce Website" />
                    <WorkImage src="/images/works/ecomcart.png" alt="E-Commerce Website" />
                    <WorkImage src="/images/works/ecomlogin.png" alt="E-Commerce Website" />
                    <WorkImage src="/images/works/ecomsignup.png" alt="E-Commerce Website" />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work