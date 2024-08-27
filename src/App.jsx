import React from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tokenomics from "./pages/Tokenomics";
import Banner from "./pages/Banner";

const App = () => {
  return (
    <main className="w-full overflow-hidden min-h-screen bg-[#fdccae]">
      <Hero />
      <About />
      <Tokenomics />
      <Banner />
      <Contact />
    </main>
  );
};

export default App;
