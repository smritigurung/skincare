import React from "react";
import styled from "styled-components";
import { shopAllProducts } from "../../data";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Section = styled.section`
  .shopProducts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 3rem;
    justify-content: space-evenly;

    .product {
      display: flex;
      flex-direction: column;

      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      margin-top: 2px;

      .imageNicon {
        display: flex;

        justify-content: center;
        align-items: center;
        background-color: #f5fbfd;
        overflow: hidden;
        position: relative;

        .image {
          max-height: 20rem;

          img {
            height: 18rem;
            width: 18rem;
            object-fit: cover;
          }
        }
      }

      p {
        text-align: center;
        letter-spacing: 1.5px;
        line-height: 1rem;
      }
    }
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  font-family: "Gideon Roman", cursive;
  border: 1.5px solid #fb8484;
  background-color: transparent;
  color: #fb8484;
  cursor: pointer;
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

function ProductLists() {
  return (
    <Section>
      <div className="shopProducts">
        {shopAllProducts.map((product) => {
          return (
            <div className="product">
              <div className="imageNicon">
                <div className="image">
                  <img src={product.img} alt="ShopAllProducts" />
                </div>
                <Info>
                  <Icon>
                    <FavoriteBorderOutlinedIcon />
                  </Icon>
                </Info>
              </div>

              <h3>{product.title}</h3>

              <p>{product.desc}</p>

              <p>{product.price}</p>
              <Button>Add to Cart</Button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default ProductLists;
