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
  text-align: center;
  color: #fff;

  input {
    height: 64px;
    width: 562px;
    border: none;
    border-radius: 100px;
    text-align: center;
  }
  button {
    background-color: #f47323;
    margin-left: -220px;
    border: none;
    height: 67px;
    width: 227px;
    border-radius: 100px;
    padding: 18px 32px 18px 32px;
    color: #fff;
    font-size: 20px;
    z-index: 2;
  }
`;
