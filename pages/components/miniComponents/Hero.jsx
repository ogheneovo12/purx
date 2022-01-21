import React from "react";
import styled from "styled-components";

function Hero() {
  return (
    <HeroContainer>
      <TextContainer>
        <h1>A trusted and secure cryptocurrency exchange.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mi
          facilisis tortor ultricies integer. Ante viverra consequat in tellus
          duis. Odio scelerisque eu
        </p>
        <button> Download Now</button>
      </TextContainer>
      <PhoneContainer>
        <img src="/phone1.png" alt="" />
        <img src="/phone2.png" alt="" />
      </PhoneContainer>
    </HeroContainer>
  );
}
export default Hero;

const HeroContainer = styled.div`
  display: flex;
`;
const TextContainer = styled.div`
  text-align: left;

  button {
    background-color: #f47323;
    border: none;
    height: 47px;
    width: 150px;
    border-radius: 100px;
    padding: 10px 20px 10px 20px;
    color: #fff;
  }
`;
const PhoneContainer = styled.div`
  display: flex;

  img:nth-child(1) {
    width: 289.74px;
    height: 392.91px;
  }

  img:nth-child(2) {
    width: 204px;
    height: 383px;
  }
`;
