import React from "react";
import Hero from "../miniComponents/Hero";
import Navbar from "../miniComponents/Navbar";
import styled from "styled-components";
import Card from "../miniComponents/Card";
import TrustedPlatform from "../miniComponents/TrustedPlatform";
import InstantPayout from "../miniComponents/InstantPayout";
import Excahange from "../miniComponents/Excahange";
import Features from "../miniComponents/Features";
import Cta from "../miniComponents/Cta";

function HomePage() {
  return (
    <HomePageContainer>
      <NavbarHeroContainer>
        <Navbar />
        <Hero />
        <Card />
      </NavbarHeroContainer>
      <TrustedPlatform />
      <InstantPayout />
      <Excahange />
      <Features />
      <Cta />
    </HomePageContainer>
  );
}

export default HomePage;

const HomePageContainer = styled.div`
  background: #191927;
`;

const NavbarHeroContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.82) 100%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url("/background.png");
`;
