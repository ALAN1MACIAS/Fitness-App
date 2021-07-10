import React, { Component } from 'react'
import AddExercises from '../components/AddExercises'
import ExerciseList from '../components/ExersiceList'
import Welcome from '../components/Welcome'
import Loading from '../components/Loading'
import FatalError from './500'

export class Exercises extends Component {

  state = {
    data: [],
    loading: true,
    error: null
  }

  async componentDidMount() {
    await this.fetchExercises()
  }

  async fetchExercises() {
    try {
      let res = await fetch('http://localhost:8000/api/exercises')
      let data = await res.json()

      this.setState({
        data,
        loading: false
      })
    } catch (error) {
      this.setState({
        loading: false,
        error
      })
    }
  }

  render() {
    if (this.state.loading)
      return <Loading />
    if (this.state.error)
      return <FatalError />

    return (
      <div>
        <Welcome username='Name' />
        <ExerciseList exercises={this.state.data} />
        <AddExercises />
      </div>
    )
  }
}

export default Exercises
