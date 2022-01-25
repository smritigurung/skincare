import React from "react";
import styled from "styled-components";
import landingIntroPic from "../../images/landingIntroPic.jpeg";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 75%;
`;

const Image = styled.img`
  height: 70%;
  width: 80%;
  object-fit: cover;
  object-position: center;
  margin-left: 10%;
  transform: scale(1.2);

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 75%;
    height: 60%;
  }
`;

const ShopContainer = styled.div`
  flex: 25%;
  padding: 0px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  margin-bottom: 70px;
  margin-right: 30px;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    flex: 40%;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const Intro = styled.p`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: "Gideon Roman", cursive;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: #fb8484;
  color: white;
  font-family: "Gideon Roman", cursive;
  border-color: transparent;
  /* transition: 0.5s ease-in-out; */
  cursor: pointer;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 18px;
    padding: 5px;
  }
`;

function LandingIntro() {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={landingIntroPic} alt=""></Image>
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
