import React from "react";
import styled from "styled-components";

function Card() {
  return (
    <CardContainer>
      <CardImageConatiner>
        <img src="/BitcoinLogo.png" alt="" />
        <img src="/BitcoinGraph.png" alt="" />
      </CardImageConatiner>

      <CardTextOne>
        <span>Bitcoin</span>
        <h6> 2.11%</h6>
      </CardTextOne>
      <CardTextTwo>
        <h1>USD 53,260.20</h1>
        <span>BTC</span>
      </CardTextTwo>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.div`
  width: 346px;
  height: 178px;
  border-radius: 8px;
  background: #262537;
`;
const CardImageConatiner = styled.div`
  display: flex;
  align-items: center;
`;
const CardTextOne = styled.div`
  display: flex;
  align-items: center;
`;
const CardTextTwo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
