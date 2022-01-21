import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import MainLayouts from "../layouts/mainLayouts";

export default function AboutUs() {
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
          <Heading textAlign={"center"}>About Purx</Heading>
          <Text mb={20} textAlign={"center"}>
            Upgrading the world to a better financial system
          </Text>
          <Flex
            flexDirection={["column", "column", "column", "row"]}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box maxW={546}>
              <Heading mb={18}>Who we are?</Heading>
              <Text mb={5}>
                We're a bunch of misfits who believe that crypto can be
                simplified into its easiest form. Together, we have created a
                really interesting place to work.
              </Text>
              <Text mb={5}>
                From our lollipop moments to our ambiance and work ethics that
                encourage growth, Patricia has the best company culture style in
                Africa
              </Text>
              <Text mb={5}>
                We're a bunch of misfits who believe that crypto can be
                simplified into its easiest form. Together, we have created a
                really interesting place to work.
              </Text>
              <Text mb={5}>
                From our lollipop moments to our ambiance and work ethics that
                encourage growth, Patricia has the best company culture style in
                Africa
              </Text>
              <Image src="/signature.png" />
            </Box>
            <Box flexShrink={0}>
              <Image src="/about_illust.png" />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

AboutUs.layout = MainLayouts;
