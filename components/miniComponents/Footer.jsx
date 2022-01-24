import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box
    backgroundColor={"#01081f"}
      backgroundImage={"url(/footer-bg.png)"}
      backgroundRepeat={"no-repeat"}
       backgroundPosition={"right center"}
      padding={"0 2em"}
      py={5}
      as={"footer"}
     
    >
      <Container maxW={"container.xl"}>
      <Flex
        textAlign={"left"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        <Box mt={10} width={["100%", "100%", "33%"]}>
          <Flex alignItems={"flex-end"}>
            <Image alt="fitted logo" mr={5} src="/purex_logo.png" />
          </Flex>
          <Text mt={5}>
            Fitted is a platform bringing greater satisfaction to the fashion
            value chain through innovative technology solutions
          </Text>
          <HStack mt={5} spacing={"20px"}>
            <Link href="#">
              <Image alt="twitter account" src="/icons/linkedin.png" />
            </Link>
            <Link href="#">
              <Image alt="facebook account" src="/icons/Facebook.png" />
            </Link>
            <Link href="#">
              <Image alt="instagram account" src="/icons/Instagram.png" />
            </Link>
          </HStack>
        </Box>
        <VStack mt={10}>
          <Heading fontSize={20} as="h4">
            Links
          </Heading>
          <Link href="/#">Buy/Sell</Link>
          <Link href="/#">Trade Now</Link>
          <Link href="/#">Pricing</Link>
        </VStack>
        <VStack mt={20}>
          <Link href="/#">Wallets</Link>
          <Link href="/#">Company</Link>
        </VStack>
        <VStack spacing={"20px"} alignItems={"flex-start"} textAlign={"left"} mt={10}>
          <Heading fontSize={20} as="h4">
            Submit for updates.
          </Heading>
          <Text mb={20}>
            Subscribe to get update and notify our exchange and products
          </Text>
          <Flex
            border={"1px solid #34384C"}
            background={"rgba(47, 50, 65, 0.5)"}
            height={"63px"}
            borderRadius={"100px"}
            alignItems={"center"}
            px={"10px"}
           
          >
            <Input
              _focus={{
                boxShadow: "none",
              }}
              backgroundColor={"transparent"}
              border={"none"}
              borderRadius={"100px"}
              height={"100%"}
            />
            <Button
              width={"83px"}
              color={"#fff"}
              backgroundColor={"#F47323;"}
              borderRadius={"100px"}
              height={"47px"}
            >
              Send
            </Button>
          </Flex>
        </VStack>
      </Flex>
      <Box mt={20} pt={5} borderTop={"1.34584px solid rgba(36, 77, 77, 0.1)"}>
        <Text textAlign={"center"}>© 2021 Fitted.ng All rights reserved.</Text>
      </Box>
      </Container>
    </Box>
  );
}

export default Footer;
