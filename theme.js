import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter, sans-serif",
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        color: "#A5ADCF",
      },
      a: {
        color: "#fff",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: "#fff",
      },
    },
    Link: {
      baseStyle: {
        color: "#fff",
      },
    },
  },
});

export default theme;
