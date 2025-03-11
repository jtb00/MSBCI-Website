import React from 'react'
import './Home.css'
import icon1 from '../assets/chart-pie-svgrepo-com.svg'

const Home = () => {
  return (
    <div>
      <div className='hero'>
        <div className='hero-text'>
          <h1>Lorem ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className='services'>
        <div className='services-header'>
          <h1>What we do</h1>
        </div>
        <div className='row'>
          <div className='service'>
            <h3>Lorem ipsum</h3>
            <img src={icon1} alt="" className='icon'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className='service'>
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className='service'>
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
