import React from "react";
import Header from "../Views/Header";
import BestBusiness from "../Views/BestBusiness";
import BestPlatform from "../Views/BestPlatform";
import PlatformOverview from "../Views/PlatformOverview";
import BestPlatforms from "../Views/BestPlatforms";
import Acceleration from "../Views/Acceleration";
import Grow from "../Views/Grow";
import BootCamp from "./Boot";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <BootCamp/>
      <BestBusiness />
      <BestPlatform />
      <PlatformOverview />
      <BestPlatforms />
      <Acceleration />
      <Grow />
    </React.Fragment>
  );
};

export default Home;
