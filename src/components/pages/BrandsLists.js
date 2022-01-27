import React from "react";
import styled from "styled-components";
import { brandnames } from "../../data";

const Section = styled.section`
  .brands {
    .alphabets {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 1.9rem;
      margin: 0 auto;
      padding: 0 1em 2em;
      border-bottom: 1px solid #dddddd;
      max-width: 1100px;

      .letter {
        list-style: none;
        font-family: "Source Serif 4", sans-serif;
        font-weight: 600;
      }
    }
    .brand-names {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      padding: 0 1em;
      max-width: 1100px;

      .letters {
        display: flex;
        padding: 2em 0;
        border-bottom: 1px solid #dddddd;
        /* flex-direction: row; */

        .brand-index-title {
          display: flex;
          flex-basis: 10%;
          margin-right: 1em;
          h3 {
            margin-left: 2em;
            font-family: "Gideon Roman", cursive;
          }
        }

        ul {
          li {
            margin-left: 20px;
            list-style: none;
            font-family: "Gideon Roman", cursive;
            font-size: 18px;
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
  return (
    <Section>
      <Title>BRANDS DIRECTORY</Title>
      <div className="brands">
        <ul className="alphabets">
          <li className="letter">A</li>
          <li className="letter">B</li>
          <li className="letter">C</li>
          <li className="letter">D</li>
          <li className="letter">E</li>
          <li className="letter">F</li>
          <li className="letter">G</li>
          <li className="letter">H</li>
          <li className="letter">I</li>
          <li className="letter">J</li>
          <li className="letter">K</li>
          <li className="letter">L</li>
          <li className="letter">M</li>
          <li className="letter">N</li>
          <li className="letter">O</li>
          <li className="letter">P</li>
          <li className="letter">Q</li>
          <li className="letter">R</li>
          <li className="letter">S</li>
          <li className="letter">T</li>
          <li className="letter">U</li>
          <li className="letter">V</li>
          <li className="letter">W</li>
          <li className="letter">X</li>
          <li className="letter">Y</li>
          <li className="letter">Z</li>
        </ul>
        <div className="brand-names">
          {brandnames.map((brand, key) => {
            return (
              <div className="letters" key={key}>
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
