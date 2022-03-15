import React from "react";
import dash from "./img/dash.png";

const Bestplatform = () => {
  return (
    <React.Fragment>
      <section className="container">
      <header className='row'>
        <div className='columns'>
        <div className="text4">
          <div className="line1"></div>
          <h2>
            Best Platform for the
            <br />
            Technological Era
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
          <p className='column2 text'>Learn About Our Success &nbsp; &#8594;</p>
        </div>
        </div>
        <div class='columns'>
          <img className='image2' src={dash}></img>
        </div>
      </header>
      </section>
    </React.Fragment>
  );
};

export default Bestplatform;
