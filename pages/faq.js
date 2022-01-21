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
            Faq Page
          </Heading>
          <Text maxW={800} mx={"auto"} mb={20} textAlign={"center"}>
            We have compiled a list of frequently asked questions which offer
            answers and solutions to our most frequently received complaints and
            enquiries.
          </Text>
          <Box
            minH={536}
            borderRadius={7}
            backgroundColor={"rgba(47, 50, 65, 0.5)"}
            margin={"0 auto"}
            maxW={1013}
            p={10}
          >
            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      1. How to log an error complaint?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      3. How to fund your purx account with ease?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  answers and solutions to our most frequently received
                  complaints and enquiries. We have compiled a list of
                  frequently asked questions which offer answers We have
                  compiled a list of frequently asked questions which offer
                  answers and solutions to our most frequently received
                  complaints and enquiries.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

Faq.layout = MainLayouts;
