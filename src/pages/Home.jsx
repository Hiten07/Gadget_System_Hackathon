import React from 'react'
import { Link } from 'react-router-dom';
import "./styles/home.css";
import "../index.css";
import { motion } from "framer-motion";
import { Colors } from 'chart.js';
import { MovingComponent } from 'react-moving-text';

function Home() {
  const text = "WELCOME TO GADGET WORLD...!";
  return (
    <div>
      <div className="home-container grid grid-two-column">
        <div className="home-left-section">
          
          <motion.div className="text">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1,iteration:Infinity,fade: true}}
                iteration="5"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <div className="home-paragraph">
            <p>
              Our system will make it easier for the shopkeepers as well as customers
              by managing the accessories having their report of model numbers,
              available with their quantity, and easier to locate exact accessories
              whenever there is requirement.
            </p>
          </div>

          <Link className to={"/register"}><button className='explore-btn'>Explore Here</button></Link>
        </div>

        <div className="home-right-section">
          <img src="./home-image.svg" className='home-image' alt="Home-page-image" srcset="" />
        </div>
      </div>
    </div>
    
  )
}

export default Home;