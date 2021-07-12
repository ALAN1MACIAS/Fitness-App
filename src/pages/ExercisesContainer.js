import React from 'react'
import Loading from '../components/Loading'
import { useFetch } from '../hooks/useFetch'
import FatalError from './500'
import Exercises from './Exercises'
import url from './config'

const ExercisesContainer = () => {
  const { data, loading, error } = useFetch(`${url}/fitnessregs`)

  if (loading)
      return <Loading />
  if (error)
    return <FatalError />
  return <Exercises data={data} />
}

export default ExercisesContainer
