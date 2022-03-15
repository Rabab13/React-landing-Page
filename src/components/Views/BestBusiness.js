import React from "react";
import image from "./img/image.png";
import Bootcamps from "./img/Bootcamps.png";
import Get from "./img/Get.png";
import scale from "./img/scale.png";
import hight from "./img/hight.png";
const BestBusiness = () => {
  return (
    <React.Fragment>
      <section className="container2">
        <div className='columns'>
          <div className="columns-text1">
          <div className="line1"></div>
          {/* <p style={{ backgroundColor: "red", width: 50, height: 3 }}>
            &#9473;
          </p> */}
          <h2 >
            The best business
            <br />
            solution for you
          </h2>
          <p className='column2'>
            Lorem ipsum dolor sit amet. consetetur
            sadipscing elitr, sed diam <br/> nonumy eirmod tempor invidunt ut labore
            et dolore magna<br/> aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo <br/>duo dolores et ea rebum.
            <br />
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
          </p>
          <p className='column2 text'>Learn About Our Success &nbsp; &#8594;</p>
        </div>
        </div>
        {/* <div className="row1"> */}
          <div className="grid-container">
        <div className='grid-item1'>
        <img className='icon1' src={scale}></img>
          <h4>Scale Your Activity</h4>
          <div className="line1"></div>
          <p>Lorem ipsum dolor sit amet.<br/> consetetur
            sadipscing elitr, sed diam <br/> 
            nonumy eirmod tempor invidunt ut<br/> labore</p>
          </div>
          <div className='grid-item1'>
          <img className='icon1' src={Bootcamps}></img>
          <h4>Bootcamps</h4>
          <div className="line1"></div>
          <p>Lorem ipsum dolor sit amet.<br/> consetetur
            sadipscing elitr, sed diam <br/>
            nonumy eirmod tempor invidunt ut<br/> labore</p>
          </div>
          <div className='grid-item1'>
          <img className='icon1' src={hight}></img>
          <h4>Hight Quality</h4>
          <div className="line1"></div>
          <p>Lorem ipsum dolor sit amet.<br/> consetetur
            sadipscing elitr, sed diam <br/>
            nonumy eirmod tempor invidunt ut<br/> labore</p>
          </div>
          <div className='grid-item1'>
          <img className='icon1' src={Get}></img>
          <h4>Get Certifcation</h4>
          <div className="line1"></div>
          <p>Lorem ipsum dolor sit amet.<br/> consetetur
            sadipscing elitr, sed diam <br/> 
            nonumy eirmod tempor invidunt ut<br/> labore</p>
          </div>
                </div>
      
      </section>
    </React.Fragment>
  );
};

export default BestBusiness;
