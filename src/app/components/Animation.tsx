"use client"

import React, { useEffect } from 'react'
import useTimer from '../hooks/useTimer';
import usePlanetStore from '../store/task-store';

const Animation = () => {
  var index = useTimer().index;
  var hours = useTimer().planetIn;
  var actions = usePlanetStore.getState().earth[(index)]

  return (
    <>
    <div className='animation'>{hours}{actions.value} {actions.action}</div>
    </>
  )
}

export default Animation