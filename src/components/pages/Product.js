import styled from "styled-components";
import NavBar from "../navbar/NavBar";
import Announcement from "../Announcement";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import shop1 from "../../images/shop1.jpeg";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  @media screen and (min-width: 250px) and (max-width: 768px) {
    padding: 10px;
    flex-direction: column;
  }

  @media screen and (min-width: 769px) and (max-width: 967px) {
    padding: 20px;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;

  @media screen and (min-width: 250px) and (max-width: 700px) {
    height: 40vh;
  }
  @media screen and (min-width: 701px) and (max-width: 967px) {
    height: 55vh;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

  @media screen and (min-width: 250px) and (max-width: 768px) {
    padding: 15px;
  }

  @media screen and (min-width: 769px) and (max-width: 967px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-weight: 400;
  font-family: "Bellota", cursive;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 300;
  font-family: "Gideon Roman", cursive;
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 25px;
`;

const FilterContainer = styled.div`
  display: flex;
  margin: 30px 0px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 18px;
  font-weight: 200;
  font-family: "Gideon Roman", cursive;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 250px) and (max-width: 380px) {
    width: 100%;
  }
  @media screen and (min-width: 381px) and (max-width: 500px) {
    width: 85%;
  }
  @media screen and (min-width: 501px) and (max-width: 620px) {
    width: 65%;
  }
  @media screen and (min-width: 968px) and (max-width: 1097px) {
    width: 75%;
  }
  @media screen and (min-width: 1098px) and (max-width: 1300px) {
    width: 65%;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`;

const Quantity = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  font-weight: 550;
  font-family: "Gideon Roman", cursive;
  border: 1.5px solid black;
  border-radius: 5px;
  background-color: white;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #fb8484;
    border: 1.5px solid #fb8484;
    color: white;
  }
`;

const Icon = styled.div`
  margin-left: 1rem;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    svg {
      color: red;
      transform: scale(1.1);
    }
  }
`;

function Product() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Wrapper>
        <ImgContainer>
          <Image src={shop1} />
        </ImgContainer>
        <InfoContainer>
          <Title>PEARLESSENCE</Title>
          <Desc>Hydrating Face Mist</Desc>
          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            quas veniam ab consequuntur consequatur optio esse culpa soluta
            minus assumenda aperiam tempore, aut, quos atque nobis hic iusto
            animi explicabo.
          </Desc>
          <Price>$22.00</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>1.7oz/ 50 mL</FilterSizeOption>
                <FilterSizeOption>0.34oz/ 10 mL</FilterSizeOption>
                <FilterSizeOption>2.5oz/ 75 mL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <QuantityContainer>
              <RemoveIcon />
              <Quantity>1</Quantity>
              <AddIcon />
            </QuantityContainer>
            <div className="d-flex justify-content-center align-items-center">
              <Button>ADD TO CART</Button>
              <Icon>
                <FavoriteIcon />
              </Icon>
            </div>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Product;
