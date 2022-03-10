import React from 'react'
import dash from "./img/dash.png"



const BestPlatform = () => {
    return (
        <React.Fragment>
             <section className="container">
            <header className="row">
            <div class="column img">
                <img className='img' src={dash} ></img>
                </div>
                <div className="column text2">
                <p style= {{backgroundColor: "red",width:50,height:3,}}>&#9473;</p>
                <h2>Best Platform for the<br/>Technological Era</h2>
                <p className='column2'> Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                <br/>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem</p>
                <p className='column2 text'>Learn About Our Success &nbsp; &#8594;</p>
                </div>
                </header>
                </section>

        </React.Fragment>
    )
}

export default BestPlatform ;