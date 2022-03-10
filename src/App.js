import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Browser from "./components/pages/Browser";
import Test from "./components/pages/Test";
import How from "./components/pages/How";
import Boot from "./components/pages/Boot";

import "./App.css";

function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Layout>
            <Routes>
              <Route path={"/Boot"} element={<Boot />}></Route>
              <Route path={"/Browser"} element={<Browser />}></Route>
              <Route path={"/How"} element={<How />}></Route>
              <Route path={"/Test"} element={<Test />}></Route>
              <Route path={"/"} element={<Home />}></Route>
            </Routes>
          </Layout>
        </Router>
      </div>
    </>
  );
}

export default App;
