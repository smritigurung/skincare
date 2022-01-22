import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  clip-path: circle();
  overflow: hidden;
`;

// object-fit: cover;
// width: 100%;
// height: 100%;
// clip-path: circle();

// width: 100%;
//  height: 100%;
// clip-path: circle();

// display: flex;
//   flex-wrap: wrap;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-family: "Gideon Roman", cursive;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 30px;
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
  font-family: "Gideon Roman", cursive;
  border: 1.5px solid #fb8484;
  background-color: transparent;
  color: #fb8484;
  cursor: pointer;
`;

function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />

      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}

export default CategoryItem;
