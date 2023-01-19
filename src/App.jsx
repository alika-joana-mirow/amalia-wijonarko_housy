import React from "react";
import "./App.css";
import Header from "./components/navbar/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/sidebar";
import Content from "./components/content/content";

function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <Content />
    </>
  );
}

export default App;
