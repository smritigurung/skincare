import styled from "styled-components";
import Announcement from "../Announcement";
import NavBar from "../navbar/NavBar";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1582616698198-f978da534162?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 35%;

  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;

  @media screen and (min-width: 250px) and (max-width: 768px) {
    width: 75%;
  }
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 300;
  font-family: "Source Serif 4", sans-serif;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  padding: 5px;
  margin: 10px 0;
  font-size: 20px;
  background-color: #fb8484;
  color: white;
  font-family: "Gideon Roman", cursive;
  border-color: transparent;
  cursor: pointer;
`;

const RegisterLink = styled(Link)`
  margin: 5px auto 0;
  font-size: 12px;
  color: black;
  text-align: center;
  display: block;
  max-width: 140px;
  cursor: pointer;

  &:hover {
    color: #db7093;
  }
`;

function Login() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="Username" />
            <Input placeholder="Password" type="password" />

            <Button>LOGIN</Button>
          </Form>

          <RegisterLink to="/">Forgot your password?</RegisterLink>
          <RegisterLink to="/account/register">
            Create a new account
          </RegisterLink>
        </Wrapper>
      </Container>
    </div>
  );
}

export default Login;
