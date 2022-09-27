import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Categories from "../Categories";

// when you are using useNavigate() for this component, you have to wrap the component inside <Router> component. Otherwise, an error will occur.
describe("Categories in Landing Page Tests", () => {
  it("renders descriptions in Categories", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Categories />} />
        </Routes>
      </Router>
    );
    const shopBtns = screen.getAllByText("SHOP NOW");
    expect(shopBtns.length).toEqual(3);
    expect(screen.getByText("Hydrate your Lips")).toBeInTheDocument();
    expect(screen.getByText("Moisturizing is a must")).toBeInTheDocument();
    expect(screen.getByText("Skincare Tools")).toBeInTheDocument();
  });

  it("shop button is clickable", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Categories />} />
        </Routes>
      </Router>
    );
    const shopBtns = screen.getAllByText("SHOP NOW");
    userEvent.click(shopBtns[0]);
    userEvent.click(shopBtns[1]);
    userEvent.click(shopBtns[2]);
  });
});
