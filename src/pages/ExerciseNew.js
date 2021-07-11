import React from 'react'
import ExercisesForm from '../components/ExerciseForm'
import Card from '../components/Card'

const ExerciseNew = ({form, onChange, onSubmit}) => (
  <div className='row mt-5'>
    <div className='col-sm mt-5'>
      <Card {...form}/>
    </div>
    <div className='col-sm'>
      <ExercisesForm
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
      />
    </div>
  </div>
)

export default ExerciseNew
