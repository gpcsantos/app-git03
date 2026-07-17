import { useStade, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Produtos from "./pages/Produtos";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <main className="w-full mt-18">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
