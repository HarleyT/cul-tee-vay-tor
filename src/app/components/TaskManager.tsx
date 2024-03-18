"use client"

import React from 'react'
import useTaskStore from '../store/task-store'
import Action from './Action'

const TaskManager = () => {
  const time = useTaskStore();

  return (
    <div className='task-area'>
      {time.tasks.map((task) => (
        <div key={task.id}>
        <Action inlab={task.value} />
        </div>))}
    </div>
  )
}

export default TaskManager