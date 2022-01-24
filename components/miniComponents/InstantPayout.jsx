import React from "react";
import styled from "styled-components";

function InstantPayout() {
  return (
    <InstantPayoutContainer>
      <InstantPayoutBox>
        <h1>One click, instant payout with credit or debit card.</h1>
        <InstantPayoutBoxImage>
          <img src="/people.png" alt="" />
          <h3>Create an account</h3>
        </InstantPayoutBoxImage>
        <InstantPayoutBoxImage>
          <img src="/bank.png" alt="" />
          <h3>Link your bank account</h3>
        </InstantPayoutBoxImage>
        <InstantPayoutBoxImage>
          <img src="/people.png" alt="" />
          <h3>Starting buying & selling</h3>
        </InstantPayoutBoxImage>
      </InstantPayoutBox>
      <InstantPayoutImage>
        <img src="phone.png" alt="" />
      </InstantPayoutImage>
    </InstantPayoutContainer>
  );
}

export default InstantPayout;

const InstantPayoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  color: #fff;
`;

const InstantPayoutBox = styled.div`
  h1 {
    font-size: 49px;
    line-height: 53.9px;
  }
`;
const InstantPayoutBoxImage = styled.div`
  display: flex;
  align-items: center;
  img {
    margin: 5px 10px;
    width: 71px;
    height: 71px;
  }
`;

const InstantPayoutImage = styled.div`
  text-align: center;

  img {
    width: 420px;
  }
`;
