// src/App.tsx
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router/mainRouter"; 
import React from "react";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* Wrap global providers or layout here if needed */}
      <MainRouter />
    </BrowserRouter>
  );
};

export default App;
