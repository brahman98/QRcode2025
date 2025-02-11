// import { useState } from 'react'
import QRCodeGen from "./components/QRCodeGen";
import Header from "./components/Header";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <QRCodeGen />
      <About />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
