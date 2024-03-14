"use client"

import React, { useState } from 'react'
import Task from './Task'

const TaskManager = () => {
  const [high, setHigh] = useState(false);



  return (
    <div className='task-area'>
        <Task inlab={"01:00"}/>
        <Task inlab={"02:00"}/>
        <Task inlab={"03:00"}/>
        <Task inlab={"04:00"}/>
        <Task inlab={"05:00"}/>
        <Task inlab={"06:00"}/>
        <Task inlab={"07:00"}/>
        <Task inlab={"08:00"}/>
        <Task inlab={"09:00"}/>
        <Task inlab={"10:00"}/>
        <Task inlab={"11:00"}/>
        <Task inlab={"12:00"}/>
        <Task inlab={"13:00"}/>
        <Task inlab={"14:00"}/>
        <Task inlab={"15:00"}/>
        <Task inlab={"16:00"}/>
        <Task inlab={"17:00"}/>
        <Task inlab={"18:00"}/>
        <Task inlab={"19:00"}/>
        <Task inlab={"20:00"}/>
        <Task inlab={"21:00"}/>
        <Task inlab={"22:00"}/>
        <Task inlab={"23:00"}/>
        <Task inlab={"24:00"}/>
    </div>
  )
}

export default TaskManager