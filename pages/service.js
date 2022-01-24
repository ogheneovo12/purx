import MainLayouts from "../layouts/mainLayouts";
import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";

const boxStyle = {
  width: "100%",
  maxW: "267px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  margin:"20px"
};

export default function ServicePage() {
  return (
    <Box>
      <Box className="main_overlay">
        <Heading textAlign={"center"} color={"#fff"}>
          Services Page
        </Heading>
        <Text textAlign={"center"}>
          Upgrading the world to a better financial system
        </Text>
        <Box backgroundRepeat={"no-repeat"} backgroundImage={"url(/wavy_design.png)"} mt={20}>
          <Flex px={[10,10,20]} flexDirection={["column","column","row"]}>
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              width={["100%", "100%", "100%", "50%"]}
            >
              <Heading textAlign={"center"} as="h3" fontSize={32}>
                What we Offer
              </Heading>
              <Image
                maxW={"473px"}
                width={"100%"}
                src="/starryWallet.png"
                alt="staryWallet"
                mb={4}
              />
            </Flex>
            <Box width={["100%", "100%", "100%", "50%"]}>
              <Box
                borderRadius={12}
                backgroundColor={"rgba(47, 50, 65, 0.5)"}
                p={[5,5, 10]}
                width={"100%"}
                maxW={536}
                textAlign={"center"}
              >
                <Heading mb={"5"} fontSize={25}>
                  Peer to Peer{" "}
                </Heading>
                <Text>
                  body text goes here,body text goes here,body text goes
                  here,body text goes here,body text goes here,body text goes
                  here,body text goes here,body text goes here, \
                </Text>
              </Box>
              <Box
                borderRadius={12}
                // backgroundColor={"rgba(47, 50, 65, 0.5)"}
                p={10}
                width={"100%"}
                maxW={536}
                textAlign={"center"}
              >
                <Heading mb={"5"} fontSize={25}>
                  Buy {`&`} Sell Crypto
                </Heading>
                <Text>
                  body text goes here,body text goes here,body text goes
                  here,body text goes here,body text goes here,body text goes
                  here,body text goes here,body text goes here, \
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box
        minH={"100vh"}
        backgroundColor={"#01081F"}
        backgroundImage={"url(/oval_blue.png),url(/oval_orange.png), url(/circle_right.png)"}
        backgroundPosition={"top left, top right, left bottom"}
        backgroundRepeat={"no-repeat"}
        py={"150px"}
      >
        <Heading mb={20} textAlign={"center"}>
          More Features All for you
        </Heading>

        <Flex
          mb={"60px"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          flexWrap={"wrap"}
          spacing="24px"
        >
          <Box {...boxStyle}>
            <Image mb={10} src="/icons/receive_icon.png" />
            <Heading fontSize={[24]}>Receive Crypto</Heading>
            <Text>
              With lots of unique blocks, you can easily build a page without
              coding.
            </Text>
          </Box>
          <Box {...boxStyle}>
            <Image mb={10} src="/icons/send_icon.png" />
            <Heading fontSize={[24]}>Send Crypto</Heading>
            <Text>
              With lots of unique blocks, you can easily build a page without
              coding.
            </Text>
          </Box>
          <Box {...boxStyle}>
            <Image mb={10} src="/icons/rocket_icon.png" />
            <Heading fontSize={[24]}>Buy Airtime with Crypto</Heading>
            <Text>
              With lots of unique blocks, you can easily build a page without
              coding.
            </Text>
          </Box>
        </Flex>
        <Flex justifyContent={"center"} flexWrap={"wrap"} spacing="24px">
          <Box {...boxStyle}>
            <Image mb={10} src="/icons/buy_data_icon.png" />
            <Heading fontSize={[24]}>Buy Data with Crypto</Heading>
            <Text>
              With lots of unique blocks, you can easily build a page without
              coding.
            </Text>
          </Box>
          <Box {...boxStyle}>
            <Image mb={10} src="/icons/pay_icon.png" />
            <Heading fontSize={[24]}>Pay Bills with Crypto</Heading>
            <Text>
              With lots of unique blocks, you can easily build a page without
              coding.
            </Text>
          </Box>
          <Box {...boxStyle}>
            <Image mb={10} src="/icons/rocket_icon.png" />
            <Heading fontSize={[24]}>Store Securely</Heading>
            <Text>
              With lots of unique blocks, you can easily build a page without
              coding.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        backgroundColor={"#01081F"}
        minH={"100vh"}
        backgroundImage={"url(/mapstack.png)"}
        py={150}
      >
        <Flex
          backgroundPosition={"top"}
          backgroundRepeat={"no-repeat"}
          backgroundImage={"url(/white-curve-2.png)"}
          backgroundColor={"#262635"}
          backgroundSize={"contain"}
          minH={530}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          py={150}
        >
          <Heading mb={2}>Get the app now</Heading>
          <Text textAlign={"center"} width={"100%"} maxW={525} mb={20}>
          
            Create custom landing pages with Omega that converts more visitors
            than any website.
          </Text>
          <HStack justifyContent={"center"} flexWrap={"wrap"}  spacing={"20px"}>
            <Image m="10px" src="/GooglePlay.png" />
            <Image m="10px" src="/AppStore.png" />
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}

ServicePage.layout = MainLayouts;
