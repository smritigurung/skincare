import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;

  @media (max-width: 750px) {
    flex-flow: column;
  }
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 3;
`;

const Image = styled.img`
  height: 80%;
`;

const ShopContainer = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  @media (max-width: 750px) {
    margin-top: -8rem;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const Intro = styled.p`
  margin: 40px 0px;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: "Gideon Roman", cursive;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: #fb8484;
  color: white;
  font-family: "Gideon Roman", cursive;
  border-color: transparent;
  cursor: pointer;

  @media (max-width: 750px) {
    margin-top: -20px;
  }
`;

function LandingIntro() {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1577058109956-67adf6edc586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"></Image>
        </ImgContainer>
        <ShopContainer>
          <Intro>A best place to find your favorite skincare products</Intro>
          <Button>SHOP NOW</Button>
        </ShopContainer>
      </Wrapper>
    </Container>
  );
}

export default LandingIntro;
