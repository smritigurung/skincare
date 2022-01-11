// npm install react-bootstrap bootstrap@5.1.3
// npm install @mui/icons-material

import React from "react";
import "./Landing.css";
import Announcement from "../Announcement";
import NavBar from "../navbar/NavBar";
import LandingIntro from "./LandingIntro";

export default function LandingPage() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <LandingIntro />
    </div>
  );
}
