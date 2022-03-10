import React from "react";
import dash from "./img/dash.png";
import shopify from "./img/shopify.png";
import nearpod from "./img/nearpod.png";
import forbes from "./img/forbes.png";
import bumble from "./img/bumble.png";
import bench from "./img/bench.png";

const Section1 = () => {
  return (
    <React.Fragment>
      <section className="container">
      <header className='row'>
        <div className='column text'>
          <h3 className='h2'>Advanced Platform</h3>
          <p className='column1'>
            Tack your team <br />
            to the next level
          </p>
          <h3 className='h3'>
            lorem ipsum dolor sit amet, consetetur sadipscing
            <br /> elitr, sed diam nonumy eirmod
          </h3>
          <botton className='btn' to='/'>
            About Us
          </botton>
        </div>

        <div class='column img'>
          <img alt='' className='img' src={dash}></img>
        </div>
      </header>
      <div className='bottom'>
        <div class='col-3 col-s-3 menu'>
          <a>
            {" "}
            <img alt='' className='bg-logo' src={shopify}></img>
          </a>
          <a>
            {" "}
            <img alt='' className='bg-logo' src={nearpod}></img>
          </a>
          <a>
            {" "}
            <img alt='' className='bg-logo' src={bench}></img>
          </a>
          <a>
            {" "}
            <img alt='' className='bg-logo' src={forbes}></img>
          </a>
          <a>
            {" "}
            <img alt='' className='bg-logo' src={bumble}></img>
          </a>
        </div>
      </div>
      </section>
    </React.Fragment>
  );
};

export default Section1;
