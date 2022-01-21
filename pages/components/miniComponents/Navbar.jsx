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
  padding: 12px 5px;
  width: 92%;
  color: #fff;
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
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;

  li {
    font-size: 14px;
    width: 100%;
    margin-right: 2px;
    text-align: center;
  }
  button {
    background-color: #f47323;
    border: none;
    height: 47px;
    width: 150px;
    border-radius: 100px;
    padding: 10px 20px 10px 20px;
    color: #fff;
    width: 100%;
  }
`;
