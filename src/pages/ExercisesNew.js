import React, { Component } from 'react'
import ExercisesForm from '../components/ExerciseForm'
import Card from '../components/Card'
import FatalError from './500'

export class ExercisesNew extends Component {

  state = {
    form: {
      title: '',
      description: '',
      img: '',
      leftColor: '',
      rightColor: ''
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      },
      loading: null,
      error: null
    })
  }

  handleSubmit = async e => {
    this.setState({
      loading: true
    })
    e.preventDefault()
    try {
      let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.form)
      }
      let res = await fetch('http://localhost:8000/api/exercises', config)
      let json = await res.json()

      this.setState({
        loading: false
      })

      this.props.history.push('/exercise')
    } catch (error) {
      this.setState({
        loading: false,
        error
      })
    }
  }

  render() {
    if (this.state.error)
      return <FatalError />
    return (
      <div className='row mt-5'>
        <div className='col-sm mt-5'>
          <Card {...this.state.form}/>
        </div>
        <div className='col-sm'>
          <ExercisesForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            form={this.state.form}
          />
        </div>
      </div>
    )
  }
}

export default ExercisesNew
