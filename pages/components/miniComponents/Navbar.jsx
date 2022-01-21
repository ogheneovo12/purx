import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <NavbarContainer>
      <div>
        <img src="/purxLogo.png" alt="" />
      </div>
      <LinkContainer>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Create Voucher</li>
        <li>Contact Us</li>
        <button> Download Now</button>
      </LinkContainer>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 30%;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  li {
    margin-right: 12px;
  }
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
