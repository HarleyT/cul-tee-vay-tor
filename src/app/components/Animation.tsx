"use client"

import React from 'react'
import useTimer from '../hooks/useTimer';
import usePlanetStore from '../store/task-store';
import TestStoreInfo from './TestStoreInfo';

const Animation = () => {
  var index = useTimer().index;
  var hours = useTimer().planetIn;
  var actions = usePlanetStore.getState().earth[(index)]

  return (
    <>
    <div className='animation'>{hours}<TestStoreInfo /></div>
    </>
  )
}

export default Animation