import { render, screen } from "@testing-library/react";
import Login from "../Login";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Since we are using Router and Routes to navigate to other pages, you have to wrap the component inside <Router> component. Otherwise, an error will occur.
describe("Login Page Tests", () => {
  it("renders login button in Login Page", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    );
    expect(screen.getByText("LOGIN")).toBeInTheDocument();
  });

  it("SIGN IN title is displayed in Login Page", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    );
    expect(screen.getByText("SIGN IN")).toBeInTheDocument();
  });

  it("'Forgot your password?' is displayed in Login Page", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    );
    expect(screen.getByText("Forgot your password?")).toBeInTheDocument();
  });

  it("'Create a new account' is displayed in Login Page", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    );
    expect(screen.getByText("Create a new account")).toBeInTheDocument();
  });

  it("Login Button is clickable", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    );
    userEvent.click(screen.getByText("LOGIN"));
  });

  it("'Forgot your password?' link is clickable", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    );
    userEvent.click(screen.getByText("Forgot your password?"));
  });

  it("'Create a new account' link is clickable", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    );
    userEvent.click(screen.getByText("Create a new account"));
  });
});
