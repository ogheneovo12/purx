import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Image,
} from "@chakra-ui/react";
import React from "react";
import MainLayouts from "../layouts/mainLayouts";

export default function Voucher() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box
      mt={"-72px"}
      py={20}
      minH={"100vh"}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      backgroundImage={` url(/voucher-bg.png), url(/voucher-bg2.png),url(/voucher-bg3.png)`}
    >
      <SuccessAlert isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Container maxW="container.xl">
        <Flex
          flexDirection={["column", "column", "row"]}
          minH={"100vh"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box width={["100%", "100%", "50%"]}>
            <Box
              textAlign={["center", "center", "left"]}
              py={[10, 10, 0]}
              maxW={"591px"}
              mx={["auto", "auto", "0"]}
            >
              <Heading mb={5} fontSize={["24px", "32px", "32px", "55px"]}>
                One-stop Virtual Voucher Solution For Your Business Needs
              </Heading>
              <Text mb={10} lineHeight={"28px"}>
                An enim nullam tempor sapien gravida donec enim ipsum porta
                congue magna at pretium purus pretium{" "}
              </Text>
              <Button
                width={"182px"}
                height={"60px"}
                color={"#fff"}
                backgroundColor={"#F67E26"}
                borderRadius={"50px"}
                fontSize={"18px"}
              >
                How it works
              </Button>
            </Box>
          </Box>
          <Box width={["100%", "100%", "50%"]}>
            <Box borderRadius={"20px"} p={10} backgroundColor={"#fff"}>
              <Heading fontSize={"32px"} textAlign={"center"} color={"#000000"}>
                Create Voucher
              </Heading>
              <Divider
                mt={2}
                mb={5}
                mx={"auto"}
                maxW={"308px"}
                width={"100%"}
              />
              <form>
                <FormControl mb={"20px"}>
                  <FormLabel color={"#2D3339"} htmlFor="fullname">
                    Enter Full Name
                  </FormLabel>
                  <Input
                    height={"56px"}
                    backgroundColor={"rgba(234, 233, 242, 0.44)"}
                    id="fullname"
                    type="fullname"
                    placeholder="Enter Full Name"
                    _placeholder={{
                      color: "#363534",
                    }}
                  />
                </FormControl>
                <FormControl mb={"20px"}>
                  <FormLabel color={"#2D3339"} htmlFor="email">
                    Enter Email Address
                  </FormLabel>
                  <Input
                    height={"56px"}
                    backgroundColor={"rgba(234, 233, 242, 0.44)"}
                    id="email"
                    type="email"
                    placeholder="Enter Email Address"
                    _placeholder={{
                      color: "#363534",
                    }}
                  />
                </FormControl>
                <FormControl mb={"20px"}>
                  <FormLabel color={"#2D3339"} htmlFor="amount">
                    Amount to Buy
                  </FormLabel>
                  <Input
                    height={"56px"}
                    backgroundColor={"rgba(234, 233, 242, 0.44)"}
                    id="amount"
                    type="amount"
                    placeholder="Amount to Buy"
                    _placeholder={{
                      color: "#363534",
                    }}
                  />
                </FormControl>
                <Flex>
                  <Button
                    mx="auto"
                    width={"163px"}
                    height={"47px"}
                    color={"#fff"}
                    backgroundColor={"#F67E26"}
                    borderRadius={"50px"}
                    fontSize={"14px"}
                    onClick={() => setIsOpen(true)}
                  >
                    Buy Now
                  </Button>
                </Flex>
              </form>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

function SuccessAlert({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width={"90%"} maxW={"500px"}>
        <ModalCloseButton />
        <Flex
          textAlign={"center"}
          width={"100%"}
          borderRadius={"10px"}
          p={5}
          alignItems={"center"}
          minHeight={"400px"}
          backgroundColor={"#fff"}
          flexDirection={"column"}
        >
          <Image src="/t_comp.png" />
          <Text color="#464141" fontSize={"20px"} my={5} fontWeight={"bold"}>
            Voucher Created Successfully
          </Text>
          <Text color="#464141" fontSize={"20px"} mb={"5px"} fontWeight={"500"}>
            Your Voucher Code:
          </Text>
          <Text color="#464141" fontSize={"20px"} fontWeight={"700"}>
            830-8393-8494-9393
          </Text>
        </Flex>
      </ModalContent>
    </Modal>
  );
}

Voucher.layout = MainLayouts;
