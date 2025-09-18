import React from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="page">
      <Header />

      <div className="main">
        <Sidebar />
        <Content />
      </div>

      <Footer />
    </div>
  );
}
