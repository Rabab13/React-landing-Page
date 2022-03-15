import React from "react";
import { Zoom } from "react-slideshow-image";
import girl2 from "./img/girl2.png";

const image = [girl2, girl2, girl2];

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
    <div className='slide-container2'>
      <Zoom {...zoomOutProperties}>
        {image.map((each, index) => (
          <img key={index} style={{ width: "100%" }} src={each} />
        ))}
      </Zoom>
    </div>
  );
};

const Grow = () => {
  return (
    <React.Fragment>
      <section>
      <div className='section1'> 
      <header className="head">Don't Just Take <br/>our Word for it!</header>
        <div className='count'>
          <ul>
            <li className='count text'>570</li>
            <li className='count row'>Download</li>
          </ul>
        </div>
        <div className='count'>
          <ul>
            <li className='count text'>570</li>
            <li className='count row'>Active User</li>
          </ul>
        </div>
        <div className='count'>
          <ul>
            <li className='count text'>570</li>
            <li className='count row'>Positive Feedback</li>
          </ul>
        </div>
        <div className='count'>
          <ul>
            <li className='count text'>570</li>
            <li className='count row'> + rating</li>
          </ul>
        </div>
      </div>
      </section>
      <section className='row'>
        <div className='columns'>
        <div className='contianer'>
          <Slideshow />
        </div>
        </div>
        <div className='columns'>
          <div className="column7">
          <h2>
            Grow Your Business and
            <br />
            Join Our Happy Users
          </h2>
          <p >
            {" "}
            Lorem ipsum dolor sit amet. consetetur sadipscing elitr, sed diam
            <br /> nonumy eirmod tempor invidunt ut labore et dolore magna
            <br />
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo{" "}
            <br />
            duo dolores et ea rebum.
            <br />
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem{" "}
          </p>
          <botton className='btn about' to='/'>
            About us
          </botton>
          </div>
        </div>
      
      </section>
    </React.Fragment>
  );
};

export default Grow                                                                                                                                   ;
