import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article"
import Section from "../components/section"
import { GridItem } from "../components/grid-item";
import thumbnail from '../public/images/works/shopstored.jpg';

const Posts = () => (
    <Layout title="Posts">
        <Container maxWidth="1000px">
            <Heading as="h1" fontSize={20} mb={4}>
                Something will be here soon!
            </Heading>
            {/* <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem 
                        title=""
                        thumbnail={thumbnail}
                        href=""
                    />
                    <GridItem 
                        title=""
                        thumbnail={thumbnail}
                        href=""
                    />
                </SimpleGrid>
            </Section> */}
        </Container>
    </Layout>
)

export default Posts