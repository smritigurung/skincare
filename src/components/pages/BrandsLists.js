import React, { useRef } from "react";
import styled from "styled-components";
import { brandnames } from "../../data";
import { Link } from "react-scroll";

const Section = styled.section`
  .brands {
    .index {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 1.6rem;
      margin: 0 auto;
      padding: 0 1em 2em;
      border-bottom: 1px solid #dddddd;
      max-width: 1100px;

      .letter {
        list-style: none;
        font-family: "Source Serif 4", sans-serif;
        font-weight: 600;

        &:hover {
          text-decoration: underline;
          color: #db7093;
          cursor: pointer;
        }
      }
    }
    .brand-names {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      padding: 0 2em;
      max-width: 1100px;

      .letters {
        display: flex;
        padding: 2em 0;
        border-bottom: 1px solid #dddddd;

        @media only screen and (max-width: 947px) {
          flex-direction: column;
        }

        .brand-index-title {
          display: flex;
          justify-content: center;
          flex-basis: 10%;
          margin-right: 1em;

          @media only screen and (max-width: 947px) {
            justify-content: flex-start;
          }

          h3 {
            margin-top: 0;
            font-family: "Gideon Roman", cursive;
            font-weight: 600;
          }
        }

        ul {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          padding: 0;

          li {
            flex-basis: 15%;
            list-style: none;
            font-family: "Gideon Roman", cursive;
            font-size: 18px;
            width: 270px;
            min-height: 30px;
            max-height: 40px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
  font-size: 40px;
  font-weight: 300;
  font-family: "Source Serif 4", sans-serif;
  letter-spacing: 1.2px;
  line-height: 1.2;

  @media screen and (min-width: 250px) and (max-width: 473px) {
    font-size: 30px;
  }
`;

function BrandsLists() {
  /*
  "Scroll to item from outside the list component" by Robin Wieruch
  https://www.robinwieruch.de/react-scroll-to-item/
  */
  const refs = brandnames.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const handleClick = (id) =>
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

  return (
    <Section>
      <Title>BRANDS DIRECTORY</Title>
      <div className="brands">
        <ul className="index">
          {brandnames.map((brand) => (
            <li
              className="letter"
              key={brand.id}
              onClick={() => handleClick(brand.id)}
            >
              {brand.letter}
            </li>
          ))}
        </ul>

        <div className="brand-names">
          {brandnames.map((brand) => {
            return (
              <div className="letters" key={brand.id} ref={refs[brand.id]}>
                <div className="brand-index-title">
                  <h3>{brand.letter}</h3>
                </div>

                {brand.names.map((n, i) => (
                  <ul className="brand" key={i}>
                    <li>{n.name1}</li>
                    <li>{n.name2}</li>
                    <li>{n.name3}</li>
                    <li>{n.name4}</li>
                  </ul>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default BrandsLists;
