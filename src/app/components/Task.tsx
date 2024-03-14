"use client"

import * as React from 'react';

import {Select, SelectSection, SelectItem} from "@nextui-org/react";

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

import { signal } from "@preact/signals";

interface Props {
  inlab: string;
}

export default function Task ({inlab}: Props) {
  const [task, setTask] = React.useState<string>('');

  const tasks = signal([
    { id: '1', title: "Tr. Energy"},
    { id: '2', title: "Tr. Physical"},
    { id: '3', title: "Meditate"},
    { id: '4', title: "Rest"},
    { id: '5', title: "Explore"}
  ])

  const tasklabel = tasks.value.map(tasklab => {
    return <SelectItem key={tasklab.id} id={tasklab.id}>{tasklab.title}</SelectItem>;
    })

  // const times = signal([
  //   {id: 1, value: "01:00"},
  //   {id: 2, value: "02:00"},
  //   {id: 3, value: "03:00"},
  //   {id: 4, value: "04:00"},
  //   {id: 5, value: "05:00"},
  //   {id: 7, value: "07:00"},
  //   {id: 6, value: "06:00"},
  //   {id: 8, value: "08:00"},
  //   {id: 9, value: "09:00"},
  //   {id: 10, value: "10:00"},
  //   {id: 11, value: "11:00"},
  //   {id: 12, value: "12:00"}
  // ])

  // const inputlabel = times.value.map(timelab => {
  //   return <div key={timelab.id}>{timelab.value}</div>;
  //   })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTask(e.target.value);
  }

  return (
    <>
      <div className="task">
        <Select
          size="sm"
          variant="faded"
          items={task}
          label={inlab}
          onChange={handleChange}
          className='max-w-xs'
        >
          {tasklabel}
        </Select>
      </div>
    </>
  );
}