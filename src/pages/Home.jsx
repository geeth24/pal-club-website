import React, { useState } from "react";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import Sidebar from "../components/Sidebar/Sidebar";
import WhoAreWe from "../components/WhoAreWe/WhoAreWe";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <Navbar toggle={toggle} />
      <Hero />
      <WhoAreWe />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
