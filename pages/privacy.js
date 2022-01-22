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
    <Box py={150} minH={"100vh"} className="main_overlay">
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
            <Text mb={5}>
              This Privacy Policy describes the policies and procedures of DApps
              Platform, Inc., SIX DAYS LLC (“we,” “our,” or “us”) pertaining to
              the collection, use, and disclosure of your information on
              www.trustwallet.com and related mobile applications and products
              we offer (the “Services” or “Trust Wallet”).
            </Text>
            <Heading fontSize={"20px"}>OVERVIEW</Heading>
            <Text mb={5}>
              Your privacy is important to us. At Trust Wallet, we follow a few
              fundamental principles: We don't ask you for personally
              identifiable information (defined below). That being said, your
              contact information, such as your phone number, social media
              handle, or email address (depending on how you contact us), may be
              collected when you communicate with us or if you report a bug or
              other error related to Trust Wallet. We don't share your
              information with third parties except to deliver you our Services
              and products, comply with the law, make Trust Wallet better,
              protect our rights, or effectuate a business transfer. We're not a
              huge, faceless corporation. We're just developers trying to
              deliver an incredible product. If you have any questions or
              concerns about this policy, please reach out to us at
              support@trustwallet.com. HOW YOU ACCEPT THIS POLICY By using Trust
              Wallet, including downloading one of our mobile applications,
              visiting our website, you agree to the use, disclosure, and
              procedures outlined in this Privacy Policy.
            </Text>
            <Heading fontSize={"20px"}>
              WHAT PERSONAL INFORMATION DO WE COLLECT FROM OUR USERS?
            </Heading>
            <Text mb={5}>
              The information we collect from you falls into two categories: (i)
              personally identifiable information (i.e., data that could
              potentially identify you as an individual) (“Personal
              Information”), and (ii) non-personally identifiable information
              (i.e., information that cannot be used to identify who you are)
              (“Non-Personal Information”). This Privacy Policy covers both
              categories and will tell you how we might collect and use each
              type. We do our best not to collect any Personal Information from
              Trust Wallet users. That being said, when using our Services, we
              do collect PUBlIC wallet addresses that you generate through Trust
              Wallet. Further, we may collect some Personal Information from you
              when you communicate with us, including your contact information,
              such as your phone number, social media handle, or email address
              (depending on how you reach out). Like other online services, we
              also collect a variety of Non-Personal Information, including:
              Information you create through the Trust Wallet's website or
              mobile applications, including public wallet addresses. Various
              analytics data, such as: (i) the IP address of the computer you
              use to access Trust Wallet; (ii) the type of browser software you
              are using; (iii) the operating system you are using; (iv) the date
              and time you access or use Trust Wallet; (v) the website address,
              if any, that linked you to Trust Wallet; (vi) the website address,
              if any, you leave our website and travel to; and (vii) other
              non-personally identifiable traffic data.
            </Text>
            <Heading fontSize={"20px"}> HOW WE COLLECT INFORMATION</Heading>
            <Text mb={5}>
              When You Contact Us. We may collect certain information if you
              choose to contact us, if you use our Services or if you report a
              bug or other error with Trust Wallet. This may include contact
              information such as your name, email address, phone number, and
              public wallet address. We, or companies that provide services on
              our behalf, may also collect certain Non-Personal Information from
              you, such as your locally hosted public wallet (a “Wallet”)
              addresses.
            </Text>
            <Heading fontSize={"20px"}>
              Information We Automatically Collect
            </Heading>
            <Text mb={5}>
              Users who visit our website or use our application may have their
              device's IP address logged for the purpose of generating anonymous
              statistics or troubleshooting the performance of our web servers.
              Your IP address will not be used to track or identify you, but may
              be used to determine your geographic location in order to
              determine which of our services you are presented with. Users of
              our website or mobile applications will receive an anonymous
              unique device id (“UDID”) for the purpose of identifying the
              device to Trust Wallet servers. This UDID will not be tied to
              users' identities, but will be used for debugging purposes and to
              differentiate devices when users access our Services using
              multiple devices.
            </Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

Faq.layout = MainLayouts;
