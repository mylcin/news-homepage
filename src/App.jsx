import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="mx-auto max-w-7xl h-full">
      <span
        className={
          navbar
            ? "md:hidden absolute top-0 bottom-[-1400px] w-full bg-gray-900 opacity-50 shadow"
            : undefined
        }
      />
      <Header navbar={navbar} setNavbar={setNavbar} />
      <Hero />
      <Section />
      <Footer />
    </div>
  );
};

export default App;
