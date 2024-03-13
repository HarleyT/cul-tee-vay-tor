"use client"

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

import { signal } from "@preact/signals";

export default function Task() {
  const [task, setTask] = React.useState('');
  const [time, setTime] = React.useState('');

  const tasks = signal([
    { id: '1', title: "Tr. Energy"},
    { id: '2', title: "Tr. Physical"},
    { id: '3', title: "Meditate"},
    { id: '4', title: "Rest"},
    { id: '5', title: "Explore"}
  ])
 
  const times = signal([
    {id: 1, value: "01:00"},
    {id: 2, value: "02:00"},
    {id: 3, value: "03:00"},
    {id: 4, value: "04:00"},
    {id: 5, value: "05:00"},
    {id: 7, value: "07:00"},
    {id: 6, value: "06:00"},
    {id: 8, value: "08:00"},
    {id: 9, value: "09:00"},
    {id: 10, value: "10:00"},
    {id: 11, value: "11:00"},
    {id: 12, value: "12:00"}
  ])

  const tasklabel = tasks.value.map(tasklab => {
    return <MenuItem key={tasklab.id} value={tasklab.title}>{tasklab.title}</MenuItem>;
    })

  const inputlabel = times.value.map(timelab => {
    return <div key={timelab.id}>{timelab.value}</div>;
    })

  const handleChange = (event: SelectChangeEvent) => {
    setTask(event.target.value);
  };

  return (
    <>
    <FormControl sx={{ m: 1, minWidth: 130 }} size="small">
      <InputLabel>{inputlabel[0]}</InputLabel>
      <Select
        value={task}
        onChange={handleChange}
        label={inputlabel[0]}
      >
        {tasklabel}
      </Select>
    </FormControl>
    </>
  );
}