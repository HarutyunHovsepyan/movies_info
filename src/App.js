import React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./style/GlobalStyle";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={'/movie/:id'} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
