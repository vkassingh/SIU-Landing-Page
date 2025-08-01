import { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import ThankYouPage from "./components/ThankYouPage";
import { Routes , Route } from "react-router-dom";

const App = () => {
  return (
    <>
     <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/thank-you" element={<ThankYouPage />} />
  </Routes>
    </>
  );
};

export default App;