import { Container, Box } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
// import Bhavesh from '../public/BhaveshJain.pdf';

const Resume = () => {
    return (
        <Layout title="Resume">
            <Container maxWidth="1000px">
                <Box>
                    <iframe
                        src="/BhaveshJain.pdf"
                        title="Resume"
                        width="100%"
                        height="1000px" // Adjust height as needed
                        z-Index={1}
                    />
                </Box>
            </Container>
        </Layout>
    )
}

export default Resume
