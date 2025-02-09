// import { useState } from 'react'
import QRCodeGen from "./components/QRCodeGen";
import Header from "./components/Header";
import './index.css';
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <Header />
      <QRCodeGen />
      <Footer />
    </div>
  );
}

export default App
