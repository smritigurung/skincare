import React from "react";
import styled from "styled-components";
import { categories } from "../../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;

  background-color: aliceblue;
  height: 100vh;

  align-items: center;
  justify-content: center;

  /* @media only screen and (max-width: 700px) {
    margin-top: 20%;
    flex-direction: column;
  } */
`;

function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
}

export default Categories;
