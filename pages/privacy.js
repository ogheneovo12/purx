import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import MainLayouts from "../layouts/mainLayouts";

export default function Faq() {
  return (
    <Box py={50} minH={"100vh"} className="main_overlay">
      <Box
        backgroundRepeat={"no-repeat"}
        backgroundImage={
          "url(/wavy_design.png),url(/oval_blue.png),url(/oval_orange.png)"
        }
        backgroundPosition={"top left, bottom left, bottom right"}
      >
        <Container maxW="container.xl">
          <Heading mb={10} textAlign={"center"}>
            Privacy Policy
          </Heading>
          <Text maxW={800} mx={"auto"} mb={20} textAlign={"center"}>
            Last Updated: August 1st, 2021
          </Text>
          <Box>
            <Text mb={5}></Text>
            <Text mb={5}></Text>
            <Text mb={5}></Text>
            <Text mb={5}></Text>
            <Text mb={5}></Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

Faq.layout = MainLayouts;
