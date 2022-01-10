import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";
import { Badge } from "@mui/material";

const Container = styled.div`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  display: flex;
  flex-direction: column;
  background-color: green;
  margin-top: 20px;
  font-family: "Bellota", cursive;

  @media (min-width: 1256px) {
    height: 60px;
  }
`;

//font-family: "Gideon Roman", cursive;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExtendedWrapper = styled.div`
  flex-flow: column nowrap;
  background-color: teal;

  @media (min-width: 1256px) {
    display: none;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;

  @media (max-width: 1255px) {
    margin-left: 15%;
  }

  @media (max-width: 830px) {
    margin-left: 5%;
  }

  @media (max-width: 540px) {
    margin-left: 1%;
  }
`;

const Center = styled.div`
  display: flex;
  display: inline-block;
  text-align: center;
  background-color: orange;

  @media (min-width: 1300px) {
    flex: auto;
    margin-left: 5px;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: pink;
  margin-left: 5px;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 10px;

  @media (max-width: 1255px) {
    margin-left: 0px;
  }
`;

const Input = styled.input`
  border: none;

  @media (max-width: 1255px) {
    display: none;
  }
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const CartItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1255px) {
    transform: translateX(-50%);
  }
`;

const RightText = styled.text`
  @media (max-width: 1255px) {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const ShopLinkContainer = styled.div`
  display: flex;
`;

const ShopLinks = styled(Link)`
  color: black;
  font-size: 22px;
  font-weight: 500;
  text-decoration: none;
  margin-left: 15px;

  @media (max-width: 1255px) {
    display: none;
  }

  @media (min-width: 1322px) {
    display: flex;
    margin-left: 20px;
    margin-right: 15px;
  }
`;

const ShopLinksExtended = styled(Link)`
  color: black;
  font-size: 24px;
  text-decoration: none;
  margin: 10px;

  display: flex;
  justify-content: start;
  align-items: center;

  padding: 8px 0px 8px 16px;
  height: 60px;
`;

const HamburgerMenu = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: black;
  font-size: 45px;
  transform: translateY(-20%);
  cursor: pointer;

  @media (min-width: 1256px) {
    display: none;
  }
`;

function NavBar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <Container extendNavbar={extendNavbar}>
      <Wrapper>
        <HamburgerMenu
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        >
          {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
        </HamburgerMenu>

        <Left>
          <Logo>GLOW SKIN</Logo>
        </Left>
        <Center>
          <ShopLinkContainer>
            <ShopLinks to="/">SHOP ALL</ShopLinks>
            <ShopLinks to="/">BEST SELLERS</ShopLinks>
            <ShopLinks to="/">BRANDS</ShopLinks>
            <ShopLinks to="/">ABOUT</ShopLinks>
          </ShopLinkContainer>
        </Center>

        <Right>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: "18px" }} />
          </SearchContainer>
          <CartItem>
            <PersonOutlineIcon /> <RightText>Account</RightText>
          </CartItem>
          <CartItem>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlinedIcon /> <RightText>Cart</RightText>
            </Badge>
          </CartItem>
          <CartItem>
            <Language>EN</Language>
          </CartItem>
        </Right>
      </Wrapper>
      {extendNavbar && (
        <ExtendedWrapper>
          <ShopLinksExtended to="/">SHOP ALL</ShopLinksExtended>
          <ShopLinksExtended to="/">BEST SELLERS</ShopLinksExtended>
          <ShopLinksExtended to="/">BRANDS</ShopLinksExtended>
          <ShopLinksExtended to="/">ABOUT</ShopLinksExtended>
        </ExtendedWrapper>
      )}
    </Container>
  );
}

export default NavBar;
