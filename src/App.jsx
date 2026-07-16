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
    </>
  );
}

export default App;
