import React, {Component} from 'react';
import {Link} from 'react-router-dom'

const WrappedLink = () => {
    return (
      <button className="button is-info is-medium home-button ">
        <Link to="/login" style={{color: 'white'}} />
      </button>
    )
}

const Home = (props) => (
    console.log('props', props),
    <div className="slide a">
        <div>
            <h1 className="title">Zellar.</h1>
            <h1 className="my-text">Simple, powerful, open source event software.</h1>
            <h1 className="small-description">Used by thousands of organisers and developers around the world.</h1>
            <div>
                <button onClick={()=> console.log('change state')} className="button is-primary is-medium home-button">Get Started</button>
                {/* <WrappedLink/> */}
                {/* <button className="button is-info is-medium home-button "><Link to="/login">Sign In</Link></button> */}
            </div>
        </div>
    </div>
)


export default Home