import React from 'react'
import { Link } from 'react-router-dom';
import "./styles/home.css"

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci 
                    nesciunt iste? At saepe eligendi nostrum aliquid totam, ipsa aspernatur.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, id.
                  </p>
              </div>
                
              <button className='home-button'><Link className to={"/register"}>Explore Here</Link></button>
        </div>

       <div className="home-right-section">
              <img src="./Home-page-image.svg" className='home-image' alt="Home-page-image" srcset="" />
        </div>
      </div>
    </div>
  )
}

export default Home;