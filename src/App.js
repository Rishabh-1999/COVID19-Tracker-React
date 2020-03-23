import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import MainPart from "./Components/MainPart/MainPart"
import Footer from "./Components/footer/footer"

function App() {
  return (
    <div className="App">
      <Header />
      <MainPart />
      <Footer />
    </div>
  );
}

export default App;
