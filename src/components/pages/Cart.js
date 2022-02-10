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

    @media screen and (min-width: 250px) and (max-width: 400px) {
      flex-direction: column;
    }
    @media screen and (min-width: 401px) and (max-width: 868px) {
      flex-direction: column;
    }
  }
  .product {
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 250px) and (max-width: 400px) {
      flex-direction: column;
    }

    @media screen and (min-width: 401px) and (max-width: 868px) {
      flex-direction: column;
    }

    .details {
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }

  .summary-title {
    font-weight: 500;
    font-size: 28px;
    font-family: "Source Serif 4", sans-serif;
  }
`;

const Wrapper = styled.div`
  padding: 20px;

  @media screen and (min-width: 250px) and (max-width: 400px) {
    padding: 5px;
  }

  @media screen and (min-width: 401px) and (max-width: 800px) {
    padding: 5px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  font-family: "Source Serif 4", sans-serif;
  text-align: center;
  margin-top: 10px;
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

  @media screen and (min-width: 250px) and (max-width: 400px) {
    padding: 8px;
    letter-spacing: 0px;
    margin: 0px 10px;
    font-size: 13px;
  }
  @media screen and (min-width: 401px) and (max-width: 800px) {
    padding: 8px;
    margin: 0px 10px;
    font-size: 14px;
  }
`;

const TopTexts = styled.div`
  @media screen and (min-width: 250px) and (max-width: 400px) {
    display: none;
  }
  @media screen and (min-width: 401px) and (max-width: 800px) {
    display: none;
  }
`;

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
  font-family: "Source Serif 4", sans-serif;
  color: black;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;

  @media screen and (min-width: 250px) and (max-width: 400px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (min-width: 401px) and (max-width: 800px) {
    width: 180px;
    height: 180px;
  }
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
  font-family: "Source Serif 4", sans-serif;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-family: "Source Serif 4", sans-serif;
`;

const Quantity = styled.div`
  font-size: 22px;
  margin: 5px;

  @media screen and (min-width: 250px) and (max-width: 400px) {
    margin: 5px 15px;
  }

  @media screen and (min-width: 401px) and (max-width: 800px) {
    margin: 5px 15px;
  }
`;

const ProductPrice = styled.div`
  font-size: 26px;
  font-weight: 200;

  @media screen and (min-width: 250px) and (max-width: 400px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 401px) and (max-width: 800px) {
    margin-bottom: 22px;
  }
`;

const Hr = styled.hr`
  background-color: lightgray;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;

  @media screen and (min-width: 401px) and (max-width: 868px) {
    margin: 30px 10px;
  }
  @media screen and (min-width: 1025px) and (max-width: 1300px) {
    height: 50vh;
  }
  @media screen and (min-width: 1301px) {
    height: 55vh;
  }
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
  font-family: "Source Serif 4", sans-serif;
  font-weight: 600;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: 1.8px solid #d51280;
  color: #d51280;
  background-color: white;
  font-weight: 600;
  font-family: "Source Serif 4", sans-serif;
  letter-spacing: 1.1px;
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
                    <b>Product: </b>PEARLESSENCE Hydrating Face Mist
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>123456
                  </ProductId>
                  <ProductSize>
                    <b>Size: </b>1.7oz/ 50 mL
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
                    <b>Product: </b>COCOOIL Body Oil Organic Coconut Oil
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>112233
                  </ProductId>
                  <ProductSize>
                    <b>Size: </b>1.7oz/ 50 mL
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
          <Summary>
            <h1 className="summary-title">ORDER SUMMARY</h1>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$57.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$5.70</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.70</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$57.00</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </div>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
