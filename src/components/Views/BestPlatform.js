import React from 'react'
import dash from "./img/dash.png"



const BestPlatform = () => {
    return (
        <React.Fragment>
            <section className="container">
            <div className='columns'>
                <img className='imgage2' src={dash} ></img>
                </div>
                <div className="columns">
                <div className="text2">
                <div className="line1"></div>
                {/* <p style= {{backgroundColor: "red",width:50,height:3,}}>&#9473;</p> */}
                <h2>Best Platform for the<br/>Technological Era</h2>
                <p className='column2'>
                Lorem ipsum dolor sit amet. consetetur
                sadipscing elitr, sed diam <br/> nonumy eirmod tempor invidunt ut labore
                et dolore magna<br/> aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo <br/>duo dolores et ea rebum.
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
            </p>
            <p className='column2 text'>Learn About Our Success &nbsp;&#8594;</p>
                </div>
                </div>
                </section>

        </React.Fragment>
    )
}

export default BestPlatform ;