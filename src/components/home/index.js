import React from "react";
import "./home.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Body from "../body/Body";
function Home() {
  return (
    <div className="home">
      <div>
        <Header />
      </div>

      <div>
        <Body />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
}

export default Home;
