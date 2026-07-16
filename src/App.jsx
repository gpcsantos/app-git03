import { useStade, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <main className="w-full mt-18">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
import Produtos from "./pages/Produtos";
function App() {
  return (
    <>
      <div className="p-5 bg-black text-white flex justify-center">
        <h1 className="text-2xl font-bold">Projeto Base</h1>
      </div>
      <Produtos />
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      {/* <div className="p-5 bg-cyan-950 text-gray-200 flex justify-center "> */}
        {/* <h1 className="text-2xl font-bold">Projeto BASE</h1> */}
      {/* </div> */}
      <Footer />
    </>
  );
}

export default App;
