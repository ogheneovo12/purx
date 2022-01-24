import { AddIcon, MinusIcon } from "@chakra-ui/icons";
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

const questions = [
  {
    title: "How to log an error complaint?",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
   sed do eiusmod tempor incididunt ut labore et dolore magna
   aliqua. Ut enim ad minim veniam, quis nostrud exercitation
   ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    title: "How to fund your purx account with ease?",
    info: `answers and solutions to our most frequently received
  complaints and enquiries. We have compiled a list of
  frequently asked questions which offer answers We have
  compiled a list of frequently asked questions which offer
  answers and solutions to our most frequently received
  complaints and enquiries.`,
  },
  {
    title: "How to log an error complaint?",
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
];

export default function Faq() {
  return (
    <Box py={140} minH={"100vh"} className="main_overlay">
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
            <Accordion  allowToggle>
              {questions?.map((quest, i) => (
                <AccordionItem key={`${quest?.title}${i}`} >
                  {({ isExpanded }) => (
                    <>
                      <h2
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <AccordionButton minHeight={"97px"}>
                          <Box  fontSize={"20px"} flex="1" textAlign="left">
                            {i + 1}. {quest?.title}
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize="12px" />
                          ) : (
                            <AddIcon fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel fontSize={"16px"} pb={4}>{quest?.info}</AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

Faq.layout = MainLayouts;
