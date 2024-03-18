"use client"

import * as React from 'react';
import useTaskStore from '../store/task-store';
import {Select, SelectItem} from "@nextui-org/react";

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

import { signal } from "@preact/signals";
import DayNightCycle from './DayNightCycle';

interface Props {
  inlab: string;
}

export default function Action ({inlab}: Props) {
  const [action, setAction] = React.useState<string>('');
  const toggle = useTaskStore((state) => state.tasks);
  const high = toggle

  const variant = 'faded';

  const actions = signal([
    { id: '1', title: "Tr. Energy"},
    { id: '2', title: "Tr. Physical"},
    { id: '3', title: "Meditate"},
    { id: '4', title: "Rest"},
    { id: '5', title: "Explore"}
  ])

  const actionlabel = actions.value.map(actionlab => {
    return <SelectItem key={actionlab.id} id={actionlab.id}>{actionlab.title}</SelectItem>;
    })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAction(e.target.value);
  }

  return (
    <>
    <div>
    </div>
      <div>
        <Select
          size="sm"
          variant={variant}
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