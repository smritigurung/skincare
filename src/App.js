import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landing/Landing";
import ShopAllPage from "./components/pages/ShopAll";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/shop" element={<ShopAllPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
