import React from "react";
import styled from "styled-components";
import { shopAllProducts } from "../../data";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Section = styled.section`
  .shopProducts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 3rem;
    justify-content: space-evenly;

    @media screen and (min-width: 653px) and (max-width: 963px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 250px) and (max-width: 652px) {
      grid-template-columns: repeat(1, 1fr);
    }

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

            @media screen and (min-width: 402px) and (max-width: 652px) {
              height: 20rem;
              width: 20rem;
            }

            @media screen and (min-width: 250px) and (max-width: 401px) {
              height: 16rem;
              width: 16rem;
            }
          }
        }
      }

      p {
        a {
          text-align: center;
          letter-spacing: 1.5px;
          line-height: 1.2rem;
          font-family: "Gideon Roman", cursive;
          text-decoration: none;
          color: black;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      h3 {
        a {
          margin-top: 5px;
          font-family: "Bellota", cursive;
          font-weight: 600;
          text-decoration: none;
          color: black;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }
      span {
        text-align: center;
        letter-spacing: 1.5px;
        line-height: 1.2rem;
        font-family: "Bellota", cursive;
        font-weight: 600;
        margin-top: auto;
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

              <h3>
                <a href="/shop/collections/product">{product.title}</a>
              </h3>

              <p>
                <a href="/shop/collections/product">{product.desc}</a>
              </p>

              <span>{product.price}</span>
              <Button>Add to Cart</Button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default ProductLists;
