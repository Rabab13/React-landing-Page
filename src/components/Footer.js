import React from "react";
import { NavLink } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBFooter,
  MDBBtn,
} from "mdb-react-ui-kit";

const MenuBar = () => {
  return (
    <MDBFooter className='mdb'>
      <MDBContainer className='text-center'>
        <MDBRow>
          <MDBCol className='col1'>
            <p className='st'>Study</p>
            <p className='Lorem'>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
              <br />
              Vivamus eget diam at mi sollicitudin .
            </p>
          </MDBCol>
          <MDBCol className='col2'>
            <h5 className='text-upper'>Nos services</h5>
            <p className='avis'>
              Avis clients <br />
              Mentions légales
              <br />
              Plan du site
              <br />
              Blog d'ldéematic <br />
              Le dictionnaira du digital
              <br /> Natre boutique/,{" "}
            </p>
          </MDBCol>

          <MDBRow id='row'>
            <MDBCol id='col3'>
              <p className='ph2'>
                <strong>Sign up Special Offers!</strong>
              </p>
              <MDBCol className='col31'>
                <div class='inputWithButton'>
                  <input type='search' placeholder='Mail' rel='search' />
                  {/* <MDBCol className='col32'> */}
                  <button>Subscribe</button>
                </div>
                {/* </MDBCol>  */}
              </MDBCol>
            </MDBCol>
          </MDBRow>
        </MDBRow>
      </MDBContainer>
      <div className='footer-copyright text-center py-3'></div>
    </MDBFooter>
  );
};
export default MenuBar;
