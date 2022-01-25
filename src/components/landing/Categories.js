import React from "react";
import styled from "styled-components";
import { categories } from "../../data";

const Section = styled.section`
  .categories {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    margin-top: 1rem;

    padding: 0 4vw;

    .category {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-top: 3vw;
      margin-bottom: 3vw;

      .image {
        max-height: 20rem;
        overflow: hidden;

        border-radius: 10rem;
        width: max-content;

        img {
          height: 20rem;
          width: 20rem;
          object-fit: cover;

          transition: 0.8s ease-in-out;
          &:hover {
            transform: scale(1.2);
          }
        }
      }

      h3 {
        font-family: "Gideon Roman", cursive;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 2px;
        margin-top: 30px;
        text-align: center;
      }
    }
  }

  @media screen and (min-width: 250px) and (max-width: 739px) {
    .categories {
      grid-template-columns: repeat(1, 1fr);

      .category {
        margin-top: 6vw;
        margin-bottom: 6vw;

        h3 {
          margin-top: 15px;
        }
      }
    }
  }

  @media screen and (min-width: 740px) and (max-width: 942px) {
    .categories {
      gap: 0;

      .category {
        .image {
          max-height: 10rem;
          border-radius: 5rem;

          img {
            height: 10rem;
            width: 10rem;
          }
        }
        h3 {
          font-size: 18px;
        }
      }
    }
  }

  @media screen and (min-width: 943px) and (max-width: 1100px) {
    .categories {
      gap: 2rem;

      .category {
        .image {
          max-height: 16rem;
          border-radius: 8rem;

          img {
            height: 16rem;
            width: 16rem;
          }
        }
      }
    }
  }
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
  font-family: "Gideon Roman", cursive;
  border: 1.5px solid #fb8484;
  background-color: transparent;
  color: #fb8484;
  cursor: pointer;

  @media screen and (min-width: 555px) and (max-width: 942px) {
    font-size: 18px;
  }

  @media screen and (min-width: 250px) and (max-width: 739px) {
    margin-top: 0;
  }
`;

function Categories() {
  return (
    <Section>
      <div className="categories">
        {categories.map((category) => {
          return (
            <div className="category">
              <div className="image">
                <img src={category.img} alt="Category Image" />
              </div>
              <h3>{category.title}</h3>
              <Button>SHOP NOW</Button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default Categories;
