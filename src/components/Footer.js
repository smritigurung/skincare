import React from "react";
import styled from "styled-components";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";

const Section = styled.footer`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;

  p {
    font-size: 14px;
    font-family: "Bellota", cursive;
    line-height: 1.5rem;
    letter-spacing: 0.1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 0.5vw;
    padding: 0;

    li {
      padding: 0.8rem;
      border-radius: 2rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;

      svg {
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
      }
      &:hover {
        svg {
          transform: scale(1.2);
        }
      }
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 24px;
      font-family: "Bellota", cursive;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        color: #f19cbb;
      }
    }
  }

  .contact {
    p {
      line-height: normal;
    }
  }

  @media screen and (min-width: 250px) and (max-width: 480px) {
    .about {
      display: none;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    .about {
      display: none;
    }
  }

  @media screen and (min-width: 250px) and (max-width: 480px) {
    grid-template-columns: 1fr;
    margin-top: 20px;

    .container {
      h3 {
        color: #f19cbb;
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    margin-top: 20px;
    grid-template-columns: 1fr;

    .container {
      h3 {
        color: #f19cbb;
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    margin-top: 20px;
    gap: 2vw;

    .container {
      h3 {
        color: #f19cbb;
      }
    }
  }
`;

const Title = styled.h1`
  font-size: 26px;
  font-family: "Bellota", cursive;
  font-weight: bolder;
  text-decoration: none;
  color: black;
  cursor: pointer;

  &:hover {
    color: #f19cbb;
  }
  @media screen and (min-width: 250px) and (max-width: 480px) {
    color: #f19cbb;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    color: #f19cbb;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    color: #f19cbb;
  }
`;

const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 1rem;

  h2 {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;

    span {
      color: #db7093;
    }
  }
`;

function Footer() {
  return (
    <div className="footer">
      <Section>
        <div className="logo container">
          <Title>GLOW SKIN</Title>
          <p style={{ marginBottom: "2.2rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p
            style={{
              fontWeight: "600",
              fontSize: "18px",
              marginBottom: "2px",
            }}
          >
            Connect with us
          </p>
          <ul>
            <li style={{ backgroundColor: "#E4405F" }}>
              <AiFillInstagram />
            </li>
            <li style={{ backgroundColor: "#3B5999" }}>
              <FaFacebookF />
            </li>
            <li style={{ backgroundColor: "#0a66c2" }}>
              <GrLinkedinOption />
            </li>
            <li style={{ backgroundColor: "#55ACEE" }}>
              <BsTwitter />
            </li>
          </ul>
        </div>
        <div className="about container">
          <div className="title">
            <h3>About Us</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>Contact Us</h3>
          </div>
          <p>123 456 7890</p>
          <p>contact@glowskin.com</p>
          <p>@glowskin</p>
          <p style={{ lineHeight: "1.5rem" }}>
            123 Main Street, San Francisco, CA, USA
          </p>
        </div>
      </Section>
      <LowerFooter className="lower_footer">
        <h2>
          Copyright &copy; 2022 <span>GLOW SKIN</span>
        </h2>
      </LowerFooter>
    </div>
  );
}

export default Footer;
