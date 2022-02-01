import React from "react";
import Send from "@mui/icons-material/Send";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: "Gideon Roman", cursive;
  font-size: 50px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-family: "Gideon Roman", cursive;
  font-size: 22px;
  font-weight: 300;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

  @media screen and (min-width: 250px) and (max-width: 480px) {
    width: 80%;
  }
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  font-family: "Gideon Roman", cursive;
`;

const Button = styled.button`
  flex: 1;
  background-color: whitesmoke;
  border: none;
  border-left: 1px solid lightgray;
  color: lightgray;
`;

function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get timely updates from your favorite skincare products.
      </Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;
