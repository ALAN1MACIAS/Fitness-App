import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExercisesContainer from '../pages/ExercisesContainer'
import ExercisesNewContainer from '../pages/ExercisesNewContainer'
import { NotFound } from '../pages/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/exercise' component={ExercisesContainer} />
      <Route exact path='/exercise/new' component={ExercisesNewContainer} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App