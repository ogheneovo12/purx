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
        <img src="/DecorativeLine.png" alt="" />
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
  padding: 2.3rem 1rem;
  width: 90%;
  margin: 0 auto;
  color: #fff;
  position: relative;
`;
const TextContainer = styled.div`
  text-align: left;
  position: relative;
  z-index: 2;

  h1 {
    font-size: 61px;
    line-height: 67.1px;
    font-weight: 600;
    z-index: 2;
  }
  p {
    font-size: 22px;
    line-height: 27px;
    z-index: 2;
  }
  button {
    background-color: #f47323;
    border: none;
    height: 65px;
    width: 287px;
    border-radius: 100px;
    padding: 18px 32px 18px 32px;
    color: #fff;
    font-size: 20px;
    z-index: 2;
  }
  img {
    width: 1320px;
    position: absolute;
    top: -20%;
    left: 0%;
    z-index: 0;
  }
`;
const PhoneContainer = styled.div`
  display: flex;
  z-index: 2;

  img:nth-child(1) {
    width: 289.74px;
    height: 392.91px;
  }

  img:nth-child(2) {
    width: 204px;
    height: 383px;
  }
`;
