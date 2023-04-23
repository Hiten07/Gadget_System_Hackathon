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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam 
                    repellat repellendus laudantium perferendis qui. Nobis, impedit.
                    Repellat modi praesentium eius ex quam, fugit magni quod, 
                    itaque aperiam quas hic!
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