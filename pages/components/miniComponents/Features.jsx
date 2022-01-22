import React from "react";
import styled from "styled-components";

function Features() {
  return (
    <FeaturesContainer>
      <FeaturesBox>
        <FeaturesTextContainer>
          <h1>What media says about Cryptolly?</h1>
          <p>
            body text goes here,body text goes here,body text goes here,body
            text goes here,
          </p>
          <span>Newsweek, 2020</span>
          <section>
            <img src="/ArrowLeftCircle.png" alt="" />
            <img src="/ArrowRightCircle.png" alt="" />
          </section>

          <FeaturesPhone>
            <img src="/FeaturesPhone.png" alt="" />
          </FeaturesPhone>
        </FeaturesTextContainer>
        <FeaturesImage>
          <FeaturesNewMedia>
            <img src="/NewsMedia.png" alt="" />
          </FeaturesNewMedia>
          <h1>Buy airtime and data with crypto </h1>
          <p>
            body text goes here,body text goes here,body text goes here,body
            text goes here,
          </p>
          <h3>Get the CryptoVest Wallet Mobile App Now!</h3>
          <FeaturesButton>
            <button>
              <img src="/googleplay.png" alt="" />
              <div>
                <span>get in on </span>
                <h2> google play</h2>
              </div>
            </button>
            <button>
              <img src="/apple.png" alt="" />
              <div>
                <span>Download on the </span>
                <h2> App Store</h2>
              </div>
            </button>
          </FeaturesButton>
        </FeaturesImage>
      </FeaturesBox>
    </FeaturesContainer>
  );
}

export default Features;

const FeaturesContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(25, 25, 40, 0.82) 100%,
      rgba(25, 25, 40, 0.9) 100%
    ),
    url("/mapbase.png");
  background-size: cover;
  background-position: center;
  color: #fff;
`;
const FeaturesBox = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
const FeaturesPhone = styled.div`
  img {
    width: 80%;
  }
`;
const FeaturesTextContainer = styled.div`
  padding: 32px;
  h1 {
    font-size: 49px;
    line-height: 53.9px;
    font-weight: 600;
  }
  p {
    color: #a5adcf;
    font-size: 20px;
    line-height: 24px;
  }
  span {
    color: #a5adcf;
    font-size: 18px;
    font-weight: 600;
  }
  section {
    display: flex;
    padding: 14px 0;

    img {
      margin: 2px;
    }
  }
`;
const FeaturesImage = styled.div`
  display: block;

  h1 {
    font-size: 49px;
  }
  p {
    color: #a5adcf;
    font-size: 20px;
  }
`;
const FeaturesNewMedia = styled.div`
  img {
    width: 90%;
  }
`;
const FeaturesButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: #171726;
    border: 2px solid #fff;
    text-transform: capitalize;
    height: 65px;
    width: 227px;
    border-radius: 100px;
    padding: 18px 32px 18px 32px;
    color: #fff;
    font-size: 20px;
    z-index: 2;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  span {
    line-height: 0.9;

    font-size: 14px;
  }
  h2 {
    line-height: 0.9;
    font-size: 16px;
  }
`;
