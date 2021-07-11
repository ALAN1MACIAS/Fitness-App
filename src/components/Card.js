import React from 'react'
import circleImg from '../images/circles.png'
import './styles/Card.css'
import 'bootstrap/dist/css/bootstrap.css'

const Card = ({ title, description, img, leftColor, rightColor }) => (
  <div className='card mx-auto Fitness-Card'
    style={{
      backgroundImage: `url(${circleImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
    }}
  >
    <div className='card-body'>
      <div className='row center'>
        <div className='col-6'>
          <img src={img} alt='' className='float-right ' />
        </div>
        <div className='col-6 Fitness-Card-Info'>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  </div>
)

export default Card