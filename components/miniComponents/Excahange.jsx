import React from "react";
import styled from "styled-components";

function Excahange() {
  return (
    <ExchangeContainer>
      <ExchangeImage>
        <img src="/illustration.png" alt="" />
      </ExchangeImage>
      <div>
        <h1>We are the most trusted cryptocurrency platform.</h1>
        <p>
          body text goes here,body text goes here,body text goes here,body text
          goes here
        </p>
        <ExchangeHeading>
          <div>
            <img src="/Exchange1.png" alt="" />
            <article>
              <h1>Heading title 1</h1>
              <p>
                body text goes here,body text goes here,body text goes here,body
                text goes here,
              </p>
            </article>
          </div>
          <div>
            <img src="/Exchange2.png" alt="" />
            <article>
              <h1>Heading title 2</h1>
              <p>
                body text goes here,body text goes here,body text goes here,body
                text goes here,
              </p>
            </article>
          </div>
          <div>
            <img src="/Exchange3.png" alt="" />
            <article>
              <h1>Heading title 3</h1>
              <p>
                body text goes here,body text goes here,body text goes here,body
                text goes here,
              </p>
            </article>
          </div>
        </ExchangeHeading>
      </div>
    </ExchangeContainer>
  );
}

export default Excahange;

const ExchangeContainer = styled.div`
  display: flex;
  padding: 32px 2px;
  width: 90%;
  color: #fff;
`;
const ExchangeImage = styled.div`
  text-align: center;
`;
const ExchangeHeading = styled.div`
  div {
    display: flex;
    align-items: center;

    article {
      margin: 10px;
    }
  }
`;
