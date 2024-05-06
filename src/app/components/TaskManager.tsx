"use client"

import React from 'react'
import { usePlanetStore } from '../store/task-store'
import Action from './Action'
import useTimer from '../hooks/useTimer'

const TaskManager = () => {
  const planets = usePlanetStore();

  

  return (
    <div className='task-area'>
      {planets.earth.map((earth) => (
        <div key={earth.id}>
        <Action inlab={earth.value} /></div>))}
    </div>
  )
}

export default TaskManager