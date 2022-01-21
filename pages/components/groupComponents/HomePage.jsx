import React from "react";
import Hero from "../miniComponents/Hero";
import Navbar from "../miniComponents/Navbar";
import styled from "styled-components";

function HomePage() {
  return (
    <div>
      <NavbarHeroContainer>
        <Navbar />
        <Hero />
      </NavbarHeroContainer>
    </div>
  );
}

export default HomePage;

const NavbarHeroContainer = styled.div`
  background: linear-gradient(0, 0, 0, 0.3);
`;
