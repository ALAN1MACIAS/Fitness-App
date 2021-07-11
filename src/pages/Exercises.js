import React from 'react'
import AddExercises from '../components/AddExercises'
import ExerciseList from '../components/ExersiceList'
import Welcome from '../components/Welcome'

const Exercises = ({data}) => (
  <React.Fragment>
    <Welcome username='Name' />
    <ExerciseList exercises={data} />
    <AddExercises />
  </React.Fragment>
)

export default Exercises