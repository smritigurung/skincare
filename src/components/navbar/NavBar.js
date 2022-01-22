import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";
import { Badge } from "@mui/material";

// const Container = styled.div`
//   width: 100%;
//   height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
//   display: flex;
//   flex-direction: column;

//   margin-top: 20px;
//   font-family: "Bellota", cursive;

//   @media (min-width: 1256px) {
//     height: 60px;
//   }
// `;

// const Wrapper = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   @media only screen and (max-width: 450px) {
//     padding: 10px 0px;
//   }
// `;

// const ExtendedWrapper = styled.div`
//   flex-flow: column nowrap;
//   background-color: pink;

//   @media (min-width: 1256px) {
//     display: none;
//   }
// `;

// const Left = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 1255px) {
//     margin-left: 15%;
//   }

//   @media (max-width: 830px) {
//     margin-left: 5%;
//   }

//   @media (max-width: 540px) {
//     margin-left: 1%;
//   }
// `;

// const Center = styled.div`
//   display: flex;
//   display: inline-block;
//   text-align: center;

//   @media (min-width: 1300px) {
//     flex: auto;
//     margin-left: 5px;
//   }
// `;

// const Right = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   margin-left: 5px;

//   @media only screen and (max-width: 450px) {
//     justify-content: center;
//   }
// `;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
// `;

// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;

//   @media (max-width: 1255px) {
//     margin-left: 0px;
//     border: none;
//   }
// `;

// const Input = styled.input`
//   border: none;

//   @media (max-width: 1255px) {
//     display: none;
//   }
// `;

// const Logo = styled.h1`
//   font-weight: bold;

//   @media only screen and (max-width: 450px) {
//     font-size: 23px;
//   }
// `;

// const CartItem = styled.div`
//   font-size: 16px;
//   cursor: pointer;
//   margin-left: 20px;
//   display: flex;
//   justify-content: space-between;

//   @media only screen and (max-width: 450px) {
//     font-size: 14px;
//     margin-left: 10px;
//   }
// `;

// const RightText = styled.text`
//   @media (max-width: 1255px) {
//     opacity: 0;
//     width: 0;
//     height: 0;
//   }
// `;

// const ShopLinkContainer = styled.div`
//   display: flex;
//   justify-content: space-evenly;
// `;

// const ShopLinks = styled(Link)`
//   color: black;
//   font-size: 22px;
//   font-weight: 500;
//   text-decoration: none;
//   margin-left: 15px;

//   @media (max-width: 1255px) {
//     display: none;
//   }
// `;

// const ShopLinksExtended = styled(Link)`
//   color: black;
//   font-size: 24px;
//   text-decoration: none;
//   margin: 10px;

//   display: flex;
//   justify-content: start;
//   align-items: center;

//   padding: 8px 0px 8px 16px;
//   height: 60px;
// `;

// const HamburgerMenu = styled.button`
//   width: 70px;
//   height: 50px;
//   background: none;
//   border: none;
//   color: black;
//   font-size: 45px;
//   transform: translateY(-30%);
//   cursor: pointer;

//   @media (min-width: 1256px) {
//     display: none;
//   }
// `;

const Nav = styled.nav`
  height: 70px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  position: sticky;
  top: 0;
  z-index: 999;

  /* overflow: hidden; */
  /* position: relative; */

  .logo {
    display: flex;
    flex: 20%;
    justify-content: flex-start;
    align-items: center;
    margin-left: 40px;
    cursor: pointer;
  }

  .toggleIcon {
    display: none;
  }

  .toggleLine {
    width: 100%;
    height: 3px;
    background-color: black;
  }

  .toggleMenu {
    display: none;
  }

  .shopMenu {
    display: flex;
    flex: 70%;

    justify-content: space-evenly;
    align-items: center;
    margin-top: 12px;
    list-style: none;
    gap: 2rem;
    font-size: 20px;
  }

  .userMenu {
    display: flex;
    flex: 10%;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
    margin-left: 20px;
    list-style: none;
    gap: 1.3rem;
    font-weight: 500;
  }

  .userMenuList {
    .language:hover {
      color: #f9c74f;
      font-weight: 600;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    .logo {
      justify-content: center;
      margin-left: 0;
    }

    .shopMenu {
      display: none;
    }

    .userMenu {
      gap: 0.9rem;
      margin-left: 0px;
      padding: 0;
    }

    .toggleIcon {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 20px;
      height: 15px;
      cursor: pointer;
    }

    .toggleMenu {
      /* position: fixed; */
      position: absolute;
      height: calc(100vh - 70px);
      width: 50vw;
      top: 70px;
      margin: 0;
      padding: 0;
      color: white;
      list-style: none;
      transition: all 1s ease;

      display: flex;
      flex-direction: column;

      li {
        width: 100%;
        margin: 1rem 0;
        margin-left: 2rem;
        z-index: 999;
        overflow-y: hidden;
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 880px) {
    .logo {
      justify-content: flex-end;
      margin-left: 0;
    }

    .shopMenu {
      display: none;
    }

    .userMenu {
      gap: 0.9rem;
      margin-left: 0px;
      padding: 0;
    }

    .toggleIcon {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 25px;
      height: 20px;
      cursor: pointer;
    }

    .toggleMenu {
      /* position: fixed; */
      position: absolute;
      height: calc(100vh - 70px);
      width: 50vw;
      top: 70px;
      margin: 0;
      padding: 0;
      color: white;
      list-style: none;
      transition: all 1s ease;

      display: flex;
      flex-direction: column;

      li {
        width: 100%;
        margin: 1rem 0;
        margin-left: 2rem;
        z-index: 999;
        font-size: 20px;
        overflow-y: hidden;
      }
    }
  }

  @media screen and (min-width: 881px) and (max-width: 1098px) {
    .logo {
      margin-left: 0;
    }

    .shopMenu {
      justify-content: flex-start;
      padding: 20px;
      margin-top: 14px;
    }

    .userMenu {
      gap: 0.9rem;
      margin-left: 0px;
      padding: 0;
    }
  }
`;

const LogoLink = styled(Link)`
  font-size: 28px;
  font-family: "Bellota", cursive;
  font-weight: bold;
  text-decoration: none;
  color: black;

  &:hover {
    color: red;
    font-weight: 600;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 22px;
  }
`;

const ShopLink = styled(Link)`
  font-family: "Bellota", cursive;
  text-decoration: none;
  color: black;
  font-weight: 550;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #f9c74f;
    font-weight: 600;
  }
`;

const UserLink = styled(Link)`
  color: black;
  font-family: "Bellota", cursive;
  text-decoration: none;
  font-size: 16px;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #f9c74f;
  }
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;

  padding: 5px;
  width: 110%;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    border: none;
    margin-left: 0px;
  }

  @media screen and (min-width: 481px) and (max-width: 880px) {
    border: none;
    margin-left: 0px;
  }

  @media screen and (min-width: 881px) and (max-width: 1098px) {
    border: none;
    margin-left: 0px;
  }
`;

const Input = styled.input`
  border: none;
  width: 110px;
  margin-right: 5px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }

  @media screen and (min-width: 481px) and (max-width: 880px) {
    display: none;
  }

  @media screen and (min-width: 881px) and (max-width: 1098px) {
    display: none;
  }
`;

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <div className="toggleIcon" onClick={() => setOpen(!open)}>
        <div className="toggleLine" />
        <div className="toggleLine" />
        <div className="toggleLine" />
      </div>
      <ul
        onClick={() => setOpen(false)}
        className="toggleMenu"
        style={{ left: open ? "0px" : "-50vw", backgroundColor: "white" }}
      >
        <li className="toggleMenuList">
          <ShopLink to="/shop">SHOP ALL</ShopLink>
        </li>
        <li className="toggleMenuList">
          <ShopLink to="/bestsellers">BEST SELLERS</ShopLink>
        </li>
        <li className="toggleMenuList">
          <ShopLink to="/brands">BRANDS</ShopLink>
        </li>
        <li className="toggleMenuList">
          <ShopLink to="/about">ABOUT</ShopLink>
        </li>
      </ul>
      <div className="logo">
        <LogoLink to="/">GLOW SKIN</LogoLink>
      </div>

      <ul className="shopMenu">
        <li className="shopMenuList">
          <ShopLink to="/shop">SHOP ALL</ShopLink>
        </li>
        <li className="shopMenuList">
          <ShopLink to="/bestsellers">BEST SELLERS</ShopLink>
        </li>
        <li className="shopMenuList">
          <ShopLink to="/brands">BRANDS</ShopLink>
        </li>
        <li className="shopMenuList">
          <ShopLink to="/about">ABOUT</ShopLink>
        </li>
      </ul>

      <ul className="userMenu">
        <li className="userMenuList">
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon
              style={{
                color: "#777777",
                fontSize: "18px",
                marginRight: "-12px",
                marginTop: "2px",
              }}
            />
          </SearchContainer>
        </li>
        <li className="userMenuList">
          <UserLink to="/account">
            <PersonOutlineIcon style={{ fontSize: "1.3rem" }} />
          </UserLink>
        </li>
        <li className="userMenuList">
          <Badge badgeContent={1} color="primary">
            <UserLink to="/cart">
              {" "}
              <ShoppingCartOutlinedIcon style={{ fontSize: "1.3rem" }} />
            </UserLink>{" "}
          </Badge>
        </li>
        <li className="userMenuList">
          <span
            className="language"
            style={{
              fontFamily: "Bellota",
              fontWeight: "bold",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            EN
          </span>
        </li>
      </ul>
    </Nav>
  );

  // const [extendNavbar, setExtendNavbar] = useState(false);
  // return (
  //   <Container extendNavbar={extendNavbar}>
  //     <Wrapper>
  //       <HamburgerMenu
  //         onClick={() => {
  //           setExtendNavbar((curr) => !curr);
  //         }}
  //       >
  //         {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
  //       </HamburgerMenu>
  //       <Left>
  //         <Logo>GLOW SKIN</Logo>
  //       </Left>
  //       <Center>
  //         <ShopLinkContainer>
  //           <ShopLinks to="/">SHOP ALL</ShopLinks>
  //           <ShopLinks to="/">BEST SELLERS</ShopLinks>
  //           <ShopLinks to="/">BRANDS</ShopLinks>
  //           <ShopLinks to="/">ABOUT</ShopLinks>
  //         </ShopLinkContainer>
  //       </Center>
  //       <Right>
  //         <SearchContainer>
  //           <Input placeholder="Search" />
  //           <SearchIcon style={{ color: "#777777", fontSize: "18px" }} />
  //         </SearchContainer>
  //         <CartItem>
  //           <PersonOutlineIcon /> <RightText>Account</RightText>
  //         </CartItem>
  //         <CartItem>
  //           <Badge badgeContent={1} color="primary">
  //             <ShoppingCartOutlinedIcon /> <RightText>Cart</RightText>
  //           </Badge>
  //         </CartItem>
  //         <CartItem>
  //           <Language>EN</Language>
  //         </CartItem>
  //       </Right>
  //     </Wrapper>
  //     {extendNavbar && (
  //       <ExtendedWrapper>
  //         <ShopLinksExtended to="/">SHOP ALL</ShopLinksExtended>
  //         <ShopLinksExtended to="/">BEST SELLERS</ShopLinksExtended>
  //         <ShopLinksExtended to="/">BRANDS</ShopLinksExtended>
  //         <ShopLinksExtended to="/">ABOUT</ShopLinksExtended>
  //       </ExtendedWrapper>
  //     )}
  //   </Container>
  // );
}

export default NavBar;
