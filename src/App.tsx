// import { useState } from 'react'
import QRCodeGen from "./components/QRCodeGen";
import Header from "./components/Header";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <Header />
      <QRCodeGen />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App
