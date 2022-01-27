import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: pink;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  font-family: "Bellota", cursive;
  letter-spacing: 1px;
  text-align: center;

  @media screen and (min-width: 250px) and (max-width: 360px) {
    font-size: 12px;
  }
`;

function Announcement() {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
}

export default Announcement;
