// npm install react-bootstrap bootstrap@5.1.3
// npm install @mui/icons-material

import React from "react";
import Announcement from "../Announcement";
import NavBar from "../navbar/NavBar";
import LandingIntro from "./LandingIntro";
import Categories from "./Categories";
import Newsletter from "../Newsletter";
import Footer from "../Footer";

export default function LandingPage() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <LandingIntro />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
}
