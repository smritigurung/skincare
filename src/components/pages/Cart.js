import styled from "styled-components";
import Announcement from "../Announcement";
import NavBar from "../navbar/NavBar";
import Footer from "../Footer";
import shop1 from "../../images/shop1.jpeg";
import shop2 from "../../images/shop2.jpeg";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Container = styled.div`
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
  }
  .product {
    display: flex;
    justify-content: space-between;

    .details {
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  font-family: "Source Serif 4", sans-serif;
  text-align: center;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  border-radius: 5px;
  font-family: "Source Serif 4", sans-serif;
  letter-spacing: 1.1px;
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
  letter-spacing: 1px;
  cursor: pointer;
`;

const Info = styled.div`
  flex: 3;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Quantity = styled.div`
  font-size: 22px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 26px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: lightgray;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
`;

function Cart() {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <div className="top">
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </div>
        <div className="bottom">
          <Info>
            <div className="product">
              <ProductDetail>
                <Image src={shop1} />
                <div className="details">
                  <ProductName>
                    <b>Product:</b> PEARLESSENCE Hydrating Face Mist
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 123456
                  </ProductId>
                  <ProductSize>
                    <b>Size:</b>1.7oz/ 50 mL
                  </ProductSize>
                </div>
              </ProductDetail>
              <PriceDetail>
                <QuantityContainer>
                  <AddIcon />
                  <Quantity>2</Quantity>
                  <RemoveIcon />
                </QuantityContainer>
                <ProductPrice>$22.00</ProductPrice>
              </PriceDetail>
            </div>
            <Hr />
            <div className="product">
              <ProductDetail>
                <Image src={shop2} />
                <div className="details">
                  <ProductName>
                    <b>Product:</b> COCOOIL Body Oil Organic Coconut Oil
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 112233
                  </ProductId>
                  <ProductSize>
                    <b>Size:</b>1.7oz/ 50 mL
                  </ProductSize>
                </div>
              </ProductDetail>
              <PriceDetail>
                <QuantityContainer>
                  <AddIcon />
                  <Quantity>1</Quantity>
                  <RemoveIcon />
                </QuantityContainer>
                <ProductPrice>$13.00</ProductPrice>
              </PriceDetail>
            </div>
          </Info>
          <Summary>summary</Summary>
        </div>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
