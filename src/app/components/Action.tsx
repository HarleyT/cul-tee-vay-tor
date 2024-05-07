"use client"

import { signal } from "@preact/signals";
import {Select, SelectItem} from "@nextui-org/react";
import useTimer from '../hooks/useTimer';
import { useState } from "react";
import ReactDOMServer from 'react-dom/server';

interface Props {
  inlab: string;
}

export default function Action ({inlab}: Props) {
  const [action, setAction] = useState<string>('');

  var hours = useTimer().planetIn;

  var hourString = ReactDOMServer.renderToString(hours)
  const labelString = ("<div>" + inlab + "</div>")

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
    <div className='action'
    >
      <Select
        size="sm"
        items={action}
        label={inlab}
        variant="faded"
        onChange={handleChange}
        className='max-w-xs action-selection'
        style={ (hourString == labelString) ? {background:"green"} : {}}
      >
        {actionlabel}
      </Select>
    </div>
    </>
  );
}