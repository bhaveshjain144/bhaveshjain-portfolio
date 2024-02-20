import { Container, Badge, Link, List, ListItem, SimpleGrid } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Chess">
            <Container maxWidth="1200px">
                <Title>
                    Chess <Badge>2023</Badge>
                </Title>
                <P>
                    A Two Player Chess game using Python and Pygame Module. This allows two players to compete in the classic game of chess complete with checking valid moves for all pieces on the board, putting kings in check, and tracking defeated pieces as well as forfeiting and restarting! Also with the functionality of Castling and Pawn Promotion.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://chess-io.vercel.app/">
                            https://chess-io.vercel.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Python, pygame, pygame-application, pygame-gui and pygame-games</span>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="">aaaa</Link>
                    </ListItem> */}
                </List>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <WorkImage src="/images/works/chess.png" alt="Chess" />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work