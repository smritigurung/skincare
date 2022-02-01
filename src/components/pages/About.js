import React from "react";
import Announcement from "../Announcement";
import NavBar from "../navbar/NavBar";
import AboutStory from "../pages/AboutStory";
import Newsletter from "../Newsletter";
import Footer from "../Footer";

function About() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <AboutStory />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default About;
