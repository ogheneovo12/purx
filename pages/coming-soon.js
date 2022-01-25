import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import Countdown from "react-countdown";

const countDownRenderer = ({ days, hours, minutes, seconds, completed }) => (
  <HStack pt={5} textAlign={"center"} spacing={"20px"}>
    <Box>
      <Text fontWeight={"bold"} fontSize={"40px"} color="#fff">
        {days}
      </Text>
      <Text as="small">days</Text>
    </Box>
    <Box>
      <Text fontWeight={"bold"} fontSize={"40px"} color="#fff">
        {hours}
      </Text>
      <Text as="small">hours</Text>
    </Box>
    <Box>
      <Text fontWeight={"bold"} fontSize={"40px"} color="#fff">
        {minutes}
      </Text>
      <Text as="small">minutes</Text>
    </Box>
    <Box>
      <Text fontWeight={"bold"} fontSize={"40px"} color="#fff">
        {seconds}
      </Text>
      <Text as="small">seconds</Text>
    </Box>
  </HStack>
);

export default function ComingSoon(props) {
  return (
    <Box
      minHeight={"100vh"}
      backgroundColor={"#1D1D25"}
      backgroundImage={`linear-gradient(180deg, rgba(1, 8, 31, 0.8) 0%, #01081F 100%), url(/background.png)`}
    >
      <Container maxW={"container.xl"}>
        <Flex
          flexDirection={["column", "row"]}
          alignItems={"center"}
          justifyContent={"space-between"}
          as="header"
        >
          <Image
            height={"75px"}
            width={"199px"}
            src="/purex_logo.png"
            alt="logo"
          />
          <Countdown
            autoStart
            date={"2022-01-27T18:00:44.647Z"}
            renderer={countDownRenderer}
          />
        </Flex>
      </Container>
      <Container
        backgroundImage={"url(/bg-confetti.png)"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        maxW={"container.xl"}
        textAlign={"center"}
        minHeight={"100vh"}
        display={"flex"}
        alignSelf={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Text color={"#0DC5D4"} fontSize={"24px"}>
          Coming Soon
        </Text>
        <Heading
          my={"18px"}
          fontSize={{ base: "32px", md: "72px" }}
          fontWeight={"600"}
        >
          Something Big is Coming!
        </Heading>
        <Text mb={"18px"} mx="auto" maxW={"446px"} color={"#fff"}>
          Discover and be the first to be notified when we launch, kindly enter
          your email below
        </Text>
        <Box
          px={[5, 5, 5, 10]}
          py={5}
          borderRadius={"16px"}
          backgroundColor={"inherit"}
          mx={"auto"}
          maxW={"600px"}
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
          overflow={"hidden"}
          
          _before={{
            content: '""',
            position: "absolute",
            boxShadow:"inset 0 0 2000px rgba(255, 255, 255, .5)",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            filter: "blur(10px)",
          }}
        >
          <Heading
            color={"#FFFFFF"}
            my={"10px"}
            fontWeight={"400"}
            fontSize={"24px"}
          >
            Get Notified
          </Heading>
          <Flex
            width={"100%"}
            flexDirection={["column", "column", "row"]}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Input
              width={"100%"}
              my={2}
              borderRadius={"8px"}
              height={"64px"}
              mr={[0, 0, 10]}
            />
            <Button
              my={2}
              color="#fff"
              fontWeight={"400"}
              fontSize={"16px"}
              borderRadius={"100px"}
              backgroundColor={"#F47323"}
              height={"58px"}
              width={"167px"}
            >
              Notify Me
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

ComingSoon.propTypes = {};
