import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";

const App = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>

        <Route path="*" element={<PageNotFound></PageNotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
