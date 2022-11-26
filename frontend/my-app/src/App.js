import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../src/GlobalStyle";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import UsersScreen from "./Screen/UsersScreen/UsersScreen";
import PostScreen from "./Screen/PostScreen/PostScreen";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/post" element={<PostScreen />} />
          <Route path="/users" element={<UsersScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
