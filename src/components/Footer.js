import React from "react";




const MenuBar = () => {
  return (
    <footer>
        <div className='footer'>
          <div class="row primary">
          <div class="column about">
            <h3 className='st'>Study</h3>
            <p className='Lorem'>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
              <br />
              Vivamus eget diam at mi sollicitudin .
            </p>
            </div>
            
            <div class="column about">
            <h5 className='text-upper'>Nos services</h5>
            <p className='avis'>Avis clients <br />Mentions légale<br />
              Plan du site
              <br />
              Blog d'ldéematic <br />
              Le dictionnaira du digital
              <br /> Natre boutique/,{" "}
            </p>
            </div>
          
            <div class="column about">
              <p className='ph2'>
                <strong>Sign up Special Offers!</strong>
              </p>
              <span  class='inputWithButton'>
                  <input  type='search' placeholder='Mail' rel='search' />
                  <button>Subscribe</button>
                </span>
                </div>
                </div>
                </div>
                
      </footer>
  );
};
export default MenuBar;
