import React from "react";
import styled from "styled-components";
import about1 from "../../images/about1.jpeg";

const Container = styled.div`
  /* width: 100%;
  height: calc(100vh - 70px);
  margin-top: 60px; */

  /* .aboutTitle {
    
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    object-fit: contain;

    p {
    }
  } */
`;

const Section = styled.section`
  height: 50vh;
  position: relative;

  .background {
    height: 100%;
    max-width: 100%;
    overflow: hidden;
  }

  .aboutTitle {
    position: absolute;
    top: 25%;
    left: 35%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    p {
      text-align: center;
      font-family: "Source Serif 4", sans-serif;
      letter-spacing: 1.2px;
      line-height: 1.5;
      font-weight: 600;
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  /* color: #fff; */
  font-size: 50px;
  font-weight: 600;
  font-family: "Source Serif 4", sans-serif;
  letter-spacing: 1.2px;
  line-height: 1.2;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(90%);
`;

function AboutStory() {
  return (
    <Container>
      <Section>
        <div className="background">
          <Image src={about1} alt="About Background"></Image>
        </div>

        <div className="aboutTitle">
          <Title>Our Story</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            ad sapiente totam voluptatem maiores consequatur sed voluptatum
            sequi tenetur fugit, quam dignissimos numquam obcaecati reiciendis
            quos? Nobis vitae qui quos?
          </p>
        </div>
      </Section>
    </Container>
  );
}

export default AboutStory;
