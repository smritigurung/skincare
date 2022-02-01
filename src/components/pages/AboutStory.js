import React from "react";
import styled from "styled-components";
import about1 from "../../images/about1.jpeg";
import about2 from "../../images/about2.jpeg";

const Container = styled.div``;

const Section = styled.section`
  height: 70vh;
  position: relative;

  @media screen and (min-width: 250px) and (max-width: 480px) {
    height: 80vh;
  }

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

    @media screen and (min-width: 250px) and (max-width: 350px) {
      top: 10%;
    }

    @media screen and (min-width: 350px) and (max-width: 880px) {
      top: 20%;
    }

    p {
      text-align: center;
      font-family: "Source Serif 4", sans-serif;
      letter-spacing: 1.2px;
      font-weight: 800;
      font-size: 18px;
      width: 95%;
      line-height: 1.8rem;

      @media screen and (min-width: 250px) and (max-width: 480px) {
        font-size: 12px;
        line-height: 1.3rem;
      }

      @media screen and (min-width: 481px) and (max-width: 880px) {
        font-size: 14px;
        line-height: 1.5rem;
      }
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  font-family: "Source Serif 4", sans-serif;
  letter-spacing: 1.2px;
  line-height: 1.2;
  width: 90%;

  @media screen and (min-width: 250px) and (max-width: 480px) {
    font-size: 30px;
  }

  @media screen and (min-width: 481px) and (max-width: 880px) {
    font-size: 40px;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(95%);
`;

const AboutSection = styled.section`
  display: flex;
  padding: 6rem 3rem;

  @media screen and (min-width: 250px) and (max-width: 879px) {
    padding: 4rem 2rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1079px) {
    padding: 5rem 1rem;
  }

  .aboutStory {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    p {
      font-family: "Source Serif 4", sans-serif;
      letter-spacing: 1.2px;
      font-weight: 600;
      width: 95%;
      line-height: 1.8rem;
    }
  }
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 80%;
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (min-width: 250px) and (max-width: 879px) {
    display: none;
  }

  @media screen and (min-width: 880px) and (max-width: 1079px) {
    height: 90%;
  }
`;

const Img = styled.img`
  height: 40%;
  width: 50%;
  object-fit: cover;
  margin-left: 20%;

  @media screen and (min-width: 880px) and (max-width: 1079px) {
    height: 90%;
    width: 70%;
  }

  @media screen and (min-width: 1080px) and (max-width: 1290px) {
    height: 50%;
    width: 60%;
  }
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
      <AboutSection>
        <div className="aboutStory">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam vero
            voluptas pariatur, officia reprehenderit cum animi, iste ipsam
            explicabo praesentium ex, ut blanditiis aliquam rerum atque repellat
            nemo autem consectetur cupiditate. Odio alias animi, quia vitae
            accusamus nulla magni! Blanditiis quidem eius ipsum nisi corporis
            libero sapiente?
          </p>
          <p>
            Ab impedit autem dolor dolores similique molestiae nemo, est
            expedita mollitia? Unde voluptas modi obcaecati a minima dicta et
            consequatur ducimus neque, beatae est, assumenda culpa dignissimos
            eius asperiores porro dolorem aliquid optio quos temporibus ea quod
            nam nisi! Mollitia placeat quisquam illo ullam unde, deleniti enim
            saepe animi iure soluta in nesciunt perspiciatis sequi reiciendis?
          </p>
        </div>
        <ImgContainer>
          <Img src={about2} alt="About Story"></Img>
        </ImgContainer>
      </AboutSection>
    </Container>
  );
}

export default AboutStory;
