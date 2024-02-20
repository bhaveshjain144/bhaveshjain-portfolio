import { Container, Badge, Link, List, ListItem, SimpleGrid } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Weather App">
            <Container maxWidth="1200px">
                <Title>
                    Weather App <Badge>2023</Badge>
                </Title>
                <P>
                    A simple Weather Application that displays the current weather based on geolocation or search. It pulls data from the OpenWeatherMap API to allow users to search for and view the forecast in cities worldwide.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://weather-app-chi-plum.vercel.app//">
                            https://weather-app-chi-plum.vercel.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Javascript, React and Material-UI</span>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href=""></Link>
                    </ListItem> */}
                </List>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <WorkImage src="/images/works/weather.png" alt="Weather App" />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work