import React from "react";
import { Zoom } from "react-slideshow-image";
import dash from "./img/dash.png";
import slide1 from "./img/slide1.png";
import slide2 from "./img/slide2.png";

const image = [dash, slide1, slide2];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: false,
};

const Slideshow = () => {
  return (
    <div className='slide-container'>
      <Zoom {...zoomOutProperties}>
        {image.map((each, index) => (
          <img key={index} style={{ width: "100%" }} src={each} />
        ))}
      </Zoom>
    </div>
  );
};

const PlatformOverview = () => {
  return (
    <React.Fragment>
      <section className='container'>
          <p className='text3'>Advanced Customer Service Platform</p>
          <h1 className='text bold'>Platform Overview</h1>
          <p className='text3'>
            Lorem ipsum dolor sit amet. consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt
            <br />
            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo
            <br /> dolores et ea rebum.
            <br />
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem
          </p>
        <div className='row img'>
          <Slideshow />
        </div>
      </section>
    </React.Fragment>
  );
};

export default PlatformOverview;
