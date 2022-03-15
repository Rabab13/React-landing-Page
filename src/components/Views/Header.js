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
      <section className="content-container">
          <div className="columns">
        <div className="columns-text">
          <p className="advanced">Advanced Platform</p>
          <h1 className="take" > Tack your team <br />
            to the next level
          </h1>
          <p className="lorem">
            lorem ipsum dolor sit amet, consetetur sadipscing
            <br /> elitr, sed diam nonumy eirmod
          </p>
          <botton className='btn-about' to='/'>
            About Us
          </botton>
          </div>
          </div>
          <div className="columns">
          <img alt='' className='img1' src={dash}></img>
        </div>
      <header className='grid-container88'>
        <div class='grid-item item5'>
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
        </header>
      </section>
      
    </React.Fragment>
  
  );
};

export default Section1;
