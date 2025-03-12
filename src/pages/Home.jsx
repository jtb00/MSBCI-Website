import React from 'react'
import './Home.css'
import icon1 from '../assets/chart-pie-svgrepo-com.svg'
import icon2 from '../assets/align-bottom-svgrepo-com.svg'
import icon3 from '../assets/checkmark-svgrepo-com.svg'
import image from '../assets/6240060.jpg'

const Home = () => {
  return (
    <div>
      <div className='hero'>
        <div className='hero-text'>
          <h1>IT Consulting Firm</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet tincidunt urna.</p>
        </div>
      </div>
      <div className='services'>
        <div className='section-header'>
          <h1>What we do</h1>
        </div>
        <div className='row'>
          <div className='service'>
            <h3>Lorem ipsum</h3>
            <img src={icon1} alt="" className='icon'/>
            <p>Aenean sollicitudin augue molestie suscipit pretium. Ut viverra, quam id pulvinar accumsan, ligula ligula suscipit lorem, vel imperdiet nisi risus at massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='service'>
            <h3>Lorem ipsum</h3>
            <img src={icon2} alt="" className='icon'/>
            <p>In hac habitasse platea dictumst. Quisque porta mauris vitae rhoncus fringilla. Nulla sit amet nisl varius quam hendrerit semper at ac diam.</p>
          </div>
          <div className='service'>
            <h3>Lorem ipsum</h3>
            <img src={icon3} alt="" className='icon'/>
            <p>Vivamus sagittis velit mauris, vel sodales mi accumsan convallis. Sed bibendum maximus lorem, nec dapibus elit commodo non. Morbi auctor gravida tincidunt.</p>
          </div>
        </div>
      </div>
      <div className='why-choose-us'>
        <div className='section-header'>
          <div className='image'>
            <img src={image} alt="" />
          </div>
          <h1>Why choose us?</h1>
          <ul>
            <li>
              <p>Vestibulum nec porttitor lacus. Ut eu pellentesque enim.</p>
            </li>
            <li>
              <p>Fusce libero ex, facilisis ut viverra quis, aliquam ut enim. Nunc ipsum erat, sagittis quis pretium vel, eleifend id enim.</p>
            </li>
            <li>
              <p>Mauris luctus, erat non tincidunt dictum, dui est posuere velit, commodo feugiat neque sem eget justo. Nam pulvinar commodo nulla et blandit.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
