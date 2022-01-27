import React from "react";
import Announcement from "../Announcement";
import NavBar from "../navbar/NavBar";
import Footer from "../Footer";
import BrandsLists from "../pages/BrandsLists";
import Newsletter from "../Newsletter";

function Brands() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <BrandsLists />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Brands;
