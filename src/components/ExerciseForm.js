import React from 'react'

const ExercisesForm = ({ onChange, onSubmit, form }) => (
  <div className='container'>
    <form onSubmit={onSubmit} className='row'>
      <div className='col-md-12 mb-3'>
        <div className='form-group'>
          <input
              type='text'
              className='form-control'
              placeholder='title'
              name='title'
              onChange={onChange}
              value={form.title}
          />
        </div>
      </div>
      <div className='col-md-12 mb-3'>
        <div className='form-group'>
          <input
              type='text'
              className='form-control'
              placeholder='description'
              name='description'
              onChange={onChange}
              value={form.description}
          />
        </div>
      </div>
      <div className='col-md-12 mb-3'>
        <div className='form-group'>
          <input
              type='text'
              className='form-control'
              placeholder='img'
              name='img'
              onChange={onChange}
              value={form.img}
          />
        </div>
      </div>
      <div className='col-md-6 mb-3'>
        <div className='form-group'>
          <input
              type='color'
              className='form-control'
              placeholder='leftcolor'
              name='leftcolor'
              onChange={onChange}
              value={form.leftcolor}
          />
        </div>
      </div>
      <div className='col-md-6 mb-3'>
        <div className='form-group'>
          <input
              type='color'
              className='form-control'
              placeholder='rightcolor'
              name='rightcolor'
              onChange={onChange}
              value={form.rightcolor}
          />
        </div>
      </div>
      <div className='col-md-12'>
        <button type='submit' className='btn btn-primary col-md-3'>Submit</button>
      </div>
    </form>
  </div>
)

export default ExercisesForm
