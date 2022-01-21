import React from "react";
import styled from "styled-components";

function TrustedPlatform() {
  return (
    <BackgroundContainer>
      <HeadingSection>
        <div>
          <HeadingOne>
            <img src="/Icon.png" alt="" />
            <h4>Heading One</h4>
            <p>
              body text goes here,body text goes here,body text goes here,body
              text goes here,
            </p>
          </HeadingOne>
          <HeadingTwo>
            <img src="/Icon-2.png" alt="" />
            <h4>Heading Two</h4>
            <p>
              body text goes here,body text goes here,body text goes here,body
              text goes here,
            </p>
          </HeadingTwo>
        </div>
        <HeadingThree>
          <img src="/Icon-3.png" alt="" />
          <h4>Heading Three</h4>
          <p>
            body text goes here,body text goes here,body text goes here,body
            text goes here,
          </p>
        </HeadingThree>
      </HeadingSection>
      <TextContainer>
        <h1>The most trusted cryptocurrency platform.</h1>
        <p>
          body text goes here,body text goes here,body text goes here,body text
          goes here,
        </p>
        <button>Let's Trade Now</button>
      </TextContainer>
    </BackgroundContainer>
  );
}

export default TrustedPlatform;

const BackgroundContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(25, 25, 40, 0.82) 100%,
      rgba(25, 25, 40, 0.9) 100%
    ),
    url("/mapbase.png");
  background-size: cover;
  background-position: center;
  color: #fff;
  width: 90%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const HeadingSection = styled.div`
  display: flex;
  padding: 30px;
`;

const HeadingOne = styled.div`
  text-align: center;
  margin: 10px;
  border-radius: 12px;
  width: 285px;
  height: 329px;
  padding: 20px 5px;
  background-color: #2f3241;
`;
const HeadingTwo = styled.div`
  text-align: center;
  margin: 10px;
  padding: 20px 5px;
  border-radius: 12px;
  width: 285px;
  height: 329px;
  background-color: #2f3241;
`;
const HeadingThree = styled.div`
  text-align: center;
  margin: 10px;
  padding: 20px 5px;
  border-radius: 12px;
  align-self: center;
  width: 285px;
  height: 329px;
  background-color: #2f3241;
`;
const TextContainer = styled.div`
  h1 {
    font-size: 49px;
    line-height: 53.9px;
  }
  p {
    color: #a5adcf;
    font-size: 20px;
    line-height: 24px;
  }
  button {
    background-color: #f47323;
    border: none;
    height: 53px;
    width: 225px;
    border-radius: 100px;
    padding: 10px 20px 10px 20px;
    color: #fff;
  }
`;
