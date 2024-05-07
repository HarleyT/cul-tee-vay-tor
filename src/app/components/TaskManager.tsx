"use client"

import React from 'react'
import { usePlanetStore } from '../store/task-store'
import Action from './Action'

const TaskManager = () => {
  const store = usePlanetStore();
  var planetName = usePlanetStore.getState().planet;

  if (planetName === "mars") {
    var planetHours = store.mars.map((mars) => {
        return <div key={mars.id}>
          <Action inlab={mars.value}/></div>});
    } else {
      var planetHours = store.earth.map((earth) => {
        return <div key={earth.id}>
          <Action inlab={earth.value}/></div>});
    }

  return (
    <div className='task-area'>
      {planetHours}
    </div>
  )
}

export default TaskManager