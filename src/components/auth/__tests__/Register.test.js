import { render, screen } from "@testing-library/react";
import Register from "../Register";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Since we are using Router and Routes to navigate to other pages, you have to wrap the component inside <Router> component. Otherwise, an error will occur.
describe("Register Page Tests", () => {
  it("renders submit button in Register Page", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
      </Router>
    );
    expect(screen.getByText("SUBMIT")).toBeInTheDocument();
  });

  it("Submit Button is clickable in Register Page", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
      </Router>
    );
    userEvent.click(screen.getByText("SUBMIT"));
  });

  it("'Forgot your password?' is displayed in Register Page", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
      </Router>
    );
    expect(screen.getByText("Forgot your password?")).toBeInTheDocument();
  });

  it("'Sign in' title is displayed in Register Page", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
      </Router>
    );
    expect(screen.getByText("Sign in")).toBeInTheDocument();
  });

  it("'Forgot your password?' is clickable in Register Page", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
      </Router>
    );
    userEvent.click(screen.getByText("Forgot your password?"));
  });

  it("'Sign in' is clickable in Register Page", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
      </Router>
    );
    userEvent.click(screen.getByText("Sign in"));
  });
});
