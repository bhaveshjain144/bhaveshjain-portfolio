import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import Fonts from "../components/fonts.js";
import theme from "../lib/theme.js";
const { AnimatePresence } = require("framer-motion");

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout route={router}>
                <AnimatePresence initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}
export default Website;