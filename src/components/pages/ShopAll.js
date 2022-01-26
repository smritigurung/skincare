import React from "react";
import NavBar from "../navbar/NavBar";
import styled from "styled-components";
import Announcement from "../Announcement";
import ProductLists from "../pages/ProductLists";
import Newsletter from "../Newsletter";
import Footer from "../Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
  font-size: 50px;
  font-weight: 300;
  font-family: "Source Serif 4", sans-serif;
  letter-spacing: 1.2px;
  line-height: 1.2;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 16px;
  font-weight: normal;
  font-family: "Gideon";
  letter-spacing: 1px;
  margin-right: 10px;
`;

const Select = styled.select`
  font-size: 16px;
  font-weight: normal;
  font-family: "Gideon";
  letter-spacing: 0.5px;
  padding: 8px;
  margin-right: 20px;
`;

const Option = styled.option``;

function ShopAll() {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Title>Korean Skin Care</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Product Type
            </Option>
            <Option>Moisturizer</Option>
            <Option>Sunscreen</Option>
            <Option>Toner</Option>
            <Option>Essence</Option>
            <Option>Serum</Option>
            <Option>Eye Cream</Option>
            <Option>Hand Sanitizer</Option>
            <Option>Sleeping Mask</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Skin Type
            </Option>
            <Option>Combination</Option>
            <Option>Dry</Option>
            <Option>Normal</Option>
            <Option>Oily</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Best Selling</Option>
            <Option value="price:asc">Price, low to high</Option>
            <Option value="price:desc">Price, high to low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductLists />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ShopAll;
