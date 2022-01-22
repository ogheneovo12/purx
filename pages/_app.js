import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "./Fonts";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
