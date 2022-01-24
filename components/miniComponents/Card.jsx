import React from "react";
import styled from "styled-components";

function Card() {
  return (
    <CardImageContainer>
      <img src="/Ethereum.png" alt="" />
      <img src="/bitcoin.png" alt="" />
      <img src="/ust.png" alt="" />
    </CardImageContainer>
  );
}

export default Card;

const CardImageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  padding: 40px 15px;
`;
