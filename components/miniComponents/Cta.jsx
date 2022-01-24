import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

function Cta() {
  return (
    <CtaContainer>
      <p>Ready to start trading cryptocurrency?</p>
      <h1>New users can earn up to $80 in crypto rewards.</h1>
      <form action="">
        <input type="text" />
        <button>Get Started</button>
      </form>
      <Footer />
    </CtaContainer>
  );
}

export default Cta;

const CtaContainer = styled.div`
  color: inherit;
`;
