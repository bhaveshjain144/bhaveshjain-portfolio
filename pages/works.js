import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";

// import thumbnailshopstore from '../public/images/works/shopstore.jpg'
// import thumbnailmcqexam from '../public/images/works/mcqexam.jpg'
// import thumbnailblog from '../public/images/works/blog.jpg'
// import thumbnailecom from '../public/images/works/ecom.jpg'
// import thumbnailplanningpoker from '../public/images/works/planningpoker.jpg'
// import thumbnailinsta from '../public/images/works/insta.jpg'
// import thumbnailgmail from '../public/images/works/gmail.jpg'
// import thumbnailchess from '../public/images/works/chess.jpg'
// import thumbnailweather from '../public/images/works/weather.jpg'
import thumbnailshopstore from '../public/images/works/shopstore.png';
import thumbnailmcqexam from '../public/images/works/mcqexam.png';
import thumbnailecom from '../public/images/works/ecom.png';
import thumbnailplanningpoker from '../public/images/works/planningpoker.png';
import thumbnailinsta from '../public/images/works/insta.png';
import thumbnailgmail from '../public/images/works/gmail.png';
import thumbnailblog from '../public/images/works/blog.png';
import thumbnailchess from '../public/images/works/chess.png';
import thumbnailweather from '../public/images/works/weather.png';
import thumbnailcalculator1 from '../public/images/works/calc1.png';
import thumbnailcalculator2 from '../public/images/works/calc2.png';


const Works = () => {
    return (
        <Layout title="Works">
            <Container maxWidth="1200px">
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="shopstore" title="ShopStore" thumbnail={thumbnailshopstore}>
                            An Inventory App - where you can find all the stock present in your store and manage them too.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="ecom" title="E-Commerce Website" thumbnail={thumbnailecom}>
                            An E-Commerce Website which is a clone of Flipkart. The website features user registration, Order placing and Cart.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="blog" title="Blog Website" thumbnail={thumbnailblog}>
                            A Blog Website  where you can share your thoughts and ideas.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="planningpoker" title="Planning Poker" thumbnail={thumbnailplanningpoker}>
                        A Planning Poker is a meeting platform used for project management tasks. It&apos;s a gamified technique that follows Agile Methodology and SDLC concepts.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="mcqexam" title="MCQ Exam" thumbnail={thumbnailmcqexam}>
                            An online  platform for conducting MCQ exams in various subjects.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="weatherapp" title="Weather App" thumbnail={thumbnailweather}>
                            A simple Weather application which provides weather information of any city by entering the name of that city.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="chess" title="Chess" thumbnail={thumbnailchess}>
                            A two player chess game with updated moves and patterns.
                        </WorkGridItem>
                    </Section>
                    {/* <Section>
                        <WorkGridItem id="rockpaperscissor" title="Rock Paper Scissor" thumbnail={thumbnailrockpaperscissor}>
                            Rock Paper Scissor
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="tictactoe" title="Tic Tac Toe" thumbnail={thumbnailtictactoe}>
                            Tic Tac Toe
                        </WorkGridItem>
                    </Section> */}
                    <Section>
                        <WorkGridItem id="gmail" title="Gmail Clone" thumbnail={thumbnailgmail}>
                            Gmail Clone App
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="instagram" title="Instagram Clone" thumbnail={thumbnailinsta}>
                            Instagram Clone App
                        </WorkGridItem>
                    </Section>
                    {/* <Section>
                        <WorkGridItem id="whatsapp" title="Whatsapp Clone" thumbnail={thumbnailecom}>
                            Whatsapp Clone App
                        </WorkGridItem>
                    </Section> */}
                    <Section>
                        <WorkGridItem id="calculator1" title="Calculator1" thumbnail={thumbnailcalculator1}>
                            Calculator
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="calculator2" title="Calculator2" thumbnail={thumbnailcalculator2}>
                            Calculator
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works