"use client"

import * as React from 'react';

import { signal } from "@preact/signals";
import {Select, SelectItem} from "@nextui-org/react";


// import useTaskStore from '../store/task-store';
// import { useState } from 'react';

interface Props {
  inlab: string;
}

export default function Action ({inlab}: Props) {
  const [action, setAction] = React.useState<string>('');

  // const times = useTaskStore();
  // const tasklabel = times.tasks.map((task) => {
  //   return <div key={task.id}>{task.inUse}</div>})

  // const tabel = times.tasks.map(data => data.inUse)

  // var varianter = 'faded';
  // if (inlab === "05:00") {
  //   varianter = 'bordered'
  // }

  // if (tabel.some(data => data.valueOf() === true)){
  //   console.log('Highlight');
  // }
  // else{
  //   console.log("Don't Highlight");
  // }

  const actions = signal([
    { id: '1', title: "Tr. Energy"},
    { id: '2', title: "Tr. Physical"},
    { id: '3', title: "Meditate"},
    { id: '4', title: "Rest"},
    { id: '5', title: "Explore"}
  ])

  const actionlabel = actions.value.map(actionlab => {
    return <SelectItem key={actionlab.id} value={actionlab.title}>{actionlab.title}</SelectItem>;
    })

  const handleChange = (e: {target: {value: string}}) => {
    setAction(e.target.value);
  }
  return (
    <>
    <div>
    </div>
      <div className='action'>
        <Select
          size="sm"
          variant="faded"
          items={action}
          label={inlab}
          onChange={handleChange}
          className='max-w-xs'
        >
          {actionlabel}
        </Select>
      </div>
    </>
  );
}