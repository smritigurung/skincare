import styled from "styled-components";
import Announcement from "../Announcement";
import NavBar from "../navbar/NavBar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .link {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;

  @media screen and (min-width: 250px) and (max-width: 880px) {
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-size: 15px;

  @media screen and (min-width: 250px) and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  line-height: 1.5;
`;

const Button = styled.button`
  width: 100%;
  padding: 5px;
  margin: 10px 0;
  font-size: 20px;
  background-color: #fb8484;
  color: white;
  font-family: "Gideon Roman", cursive;
  border-color: transparent;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  color: black;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #db7093;
  }
`;

function Register() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Username" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>SUBMIT</Button>
            <div className="link">
              <Link>Forgot your password?</Link>
              <Link href="/account/login">Sign in</Link>
            </div>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
}

export default Register;
