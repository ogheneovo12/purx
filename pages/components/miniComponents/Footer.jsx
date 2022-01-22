import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <PurxContainer>
        <img src="/Logo.png" alt="" />
        <p>Your best Crypto Partner</p>
      </PurxContainer>
      <QuickContainer>
        <h1>Quick Links</h1>
        <ul>
          <li>Buy/Sell</li>
          <li>Trade Now</li>
          <li>Pricing</li>
          <li>Wallet</li>
          <li>Company</li>
        </ul>
      </QuickContainer>
      <SubmitContainer>
        <h1>Submit for updates</h1>
        <p>Subscribe to get update and notify our exchange and products</p>
      </SubmitContainer>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const PurxContainer = styled.div`
  display: block;
`;
const QuickContainer = styled.div`
  display: block;
`;
const SubmitContainer = styled.div`
  display: block;
`;
