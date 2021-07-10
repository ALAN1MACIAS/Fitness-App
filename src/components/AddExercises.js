import React from 'react'
import './styles/AddExercises.css'
import { Link } from 'react-router-dom'

const icon = 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d'

const AddExercises = () => (
  <div className='container'>
    <div className='icon-add-exercises'>
      <Link to='/exercise/new'>
        <img src={icon} alt='' />
      </Link>
    </div>
  </div>
)

export default AddExercises
