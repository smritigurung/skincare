import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LandingIntro from "../LandingIntro";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

describe("Landing Intro Tests", () => {
  it("renders shopButton and description in landing intro", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<LandingIntro />} />
        </Routes>
      </Router>
    );
    expect(screen.getByText("SHOP NOW")).toBeInTheDocument();
    expect(
      screen.getByText("A best place to find your favorite skincare products")
    ).toBeInTheDocument();
  });

  it("shop button is clickable", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<LandingIntro />} />
        </Routes>
      </Router>
    );
    userEvent.click(screen.getByText("SHOP NOW"));
  });
});