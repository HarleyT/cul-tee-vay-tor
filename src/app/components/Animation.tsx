"use client"

import React from 'react'
import useTimer from '../hooks/useTimer';
import { useActionStore } from '../store/task-store';

const Animation = () => {
    var hours = useTimer().planetIn;
    var actionName = useActionStore.getState().action;

  return (
    <div className='animation'>{hours}{actionName}</div>
  )
}

export default Animation