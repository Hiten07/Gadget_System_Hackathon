import React from 'react'
import { Link } from 'react-router-dom';
import "./styles/home.css"
import "../index.css"

function Home() {
  return (
    <div>
      <div className="home-container grid grid-two-column">
        <div className="home-left-section">

          <div className="home-heading">
            <h1>Gadgets World</h1>
          </div>

          <div className="home-paragraph">
            <p>
              Our system will make it easier for the shopkeepers as well as customers
              by managing the accessories having their report of model numbers,
              available with their quantity, and easier to locate exact accessories
              whenever there is requirement.
            </p>
          </div>

          <button className='global-button'><Link className to={"/register"}>Explore Here</Link></button>
        </div>

        <div className="home-right-section">
          <img src="./Home-page-image.svg" className='home-image' alt="Home-page-image" srcset="" />
        </div>
      </div>
    </div>
  )
}

export default Home;