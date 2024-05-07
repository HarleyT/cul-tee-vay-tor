"use client"

import React from 'react'
import useTimer from '../hooks/useTimer';

const Animation = () => {
    var hours = useTimer().planetIn;

  return (
    <div className='animation'>{hours}</div>
  )
}

export default Animation