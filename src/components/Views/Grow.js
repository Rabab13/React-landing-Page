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
  arrows: true,
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

const BestBusiness = () => {
  return (
    <React.Fragment>
      <section className="container">
      <header className='head'>
        <h1>
          Don't Just Take
          <br />
          our Word for it!
        </h1>
      </header>
      <section className='section1'>
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
      </section>

      <section className='row'>
        <div className='column girl'>
          {/* <div className='card'>
<img className='img girl' src={girl} ></img> */}
          {/* </div> */}
          <Slideshow />
        </div>
        <div className='column text8'>
          <h2>
            Grow Your Business and
            <br />
            Join Our Happy Users
          </h2>
          <p className='column2'>
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
      </section>
      </section>
    </React.Fragment>
  );
};

export default BestBusiness;
