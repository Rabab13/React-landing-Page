import React from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Layout from "./components/Layout";
import Browser from "./components/pages/Browser";
import Test from "./components/pages/Test";
import How from "./components/pages/How";
import Boot from "./components/pages/Boot";
import About from "./components/pages/About";

import "./App.css";

function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  return (
    <>
    <div className="App">
      {isMobileDevice }
      {isTabletDevice} 
          {isDesktop }
          {isLaptop }
          {isBigScreen }
        <Router>
          <Layout>
            <Routes>
              <Route path={"/Boot"} element={<Boot />}></Route>
              <Route path={"/Browser"} element={<Browser />}></Route>
              <Route path={"/How"} element={<How />}></Route>
              <Route path={"/Test"} element={<Test />}></Route>
              <Route path={"/About"} element={<About />}></Route>
              <Route path={"/"} element={<Browser />}></Route>
            </Routes>
          </Layout>
        </Router>
        </div>
        </>
  );
}

export default App;