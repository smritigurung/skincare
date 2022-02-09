import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";
import { Badge } from "@mui/material";

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
      margin-left: 15px;
      flex: 25%;
    }

    .shopMenu {
      justify-content: flex-start;
      padding: 10px;
      margin-top: 14px;
      margin-left: 10px;
      flex: 65%;
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
          <UserLink to="/account/login">
            <PersonOutlineIcon style={{ fontSize: "1.4rem" }} />
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
}

export default NavBar;
