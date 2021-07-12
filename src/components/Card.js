import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import circleImg from '../images/circles.png'
import './styles/Card.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'boxicons/css/boxicons.min.css'
import url from '../pages/config'

const removeExercise = (id) => {
  fetch (`${url}/fitnessregs/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
  })
}

const Card = ({ id, title, description, img, leftcolor, rightcolor }) => (
  <div className='card mx-auto Fitness-Card'
    style={{
      backgroundImage: `url(${circleImg}), linear-gradient(to right, ${leftcolor}, ${rightcolor})`
    }}
  >
    <div className='card-body'>
      <div className='row center'>
        <div className='col-1'>
          <button onClick={() => removeExercise(id)}><i className='bx bxs-trash'></i></button>
        </div>
        <div className='col-5'>
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