import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import MainLayouts from "../layouts/mainLayouts";
import { Textarea } from "@chakra-ui/react";

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
          <Heading mb={5} textAlign={"center"}>
            Contact Us
          </Heading>
          <Text maxW={800} mx={"auto"} mb={20} textAlign={"center"}>
            Get in touch with us anytime any day
          </Text>

          <Flex flexDirection={["column","column","row"]} alignItems={"center"}>
            <Flex mr={[0, 10]} justifyContent={"center"} width={["100%","100%","50%"]}>
              <Box
                width={400}
                p={10}
                minH={"231px"}
                backgroundColor={"rgba(47, 50, 65, 0.5)"}
                mb={10}
              >
                <Text mb={20}>Email us: Support@purx.com</Text>
                <Text>Call us : 080848484848</Text>
              </Box>
            </Flex>
            <Box width={["100%","100%","50%"]}>
              <Heading textAlign={["center","center","center","left"]} mb={10} fontSize={24}>Send us a message</Heading>
              <form>
                <FormControl mb={"20px"}>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <Input backgroundColor={"#FFF"} id="firstName" type="text" />
                </FormControl>

                <FormControl mb={"20px"}>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <Input
                    backgroundColor={"#FFF"}
                    name="lastName"
                    id="lastName"
                    type="text"
                  />
                </FormControl>
                <FormControl mb={"20px"}>
                  <FormLabel htmlFor="email">Your Email</FormLabel>
                  <Input backgroundColor={"#FFF"} id="email" type="email" />
                </FormControl>
                <FormControl mb={"20px"}>
                  <FormLabel htmlFor="email">Message</FormLabel>
                  <Textarea backgroundColor={"#FFF"} />
                </FormControl>
              </form>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

Faq.layout = MainLayouts;
