"use client"

import { signal } from "@preact/signals";
import {Select, SelectItem} from "@nextui-org/react";
import useTimer from '../hooks/useTimer';
import { useEffect, useState } from "react";
import ReactDOMServer from 'react-dom/server';
import { useActionStore } from "../store/task-store";

interface Props {
  inlab: string;
}

export default function Action ({inlab}: Props) {
  const actions = useActionStore.getState()
  // const [action, setAction] = useState<string>('');

  var actionlabel = actions.actionList.map((list) => {
        return <SelectItem key={list.id} value={list.value}>{list.value}</SelectItem>
  })

  var hours = useTimer().planetIn;

  var hourString = ReactDOMServer.renderToString(hours)
  const labelString = ("<div>" + inlab + "</div>")

  // const actions = signal([
  //   { id: '1', title: "Tr. Energy"},
  //   { id: '2', title: "Tr. Physical"},
  //   { id: '3', title: "Meditate"},
  //   { id: '4', title: "Rest"},
  //   { id: '5', title: "Explore"}
  // ])

  // const actionlabel = actions.values.map(actionlab => {
  //   return <SelectItem key={actionlab.id} value={actionlab.title}>{actionlab.title}</SelectItem>;
  //   })

  const handleChange = (e: {target: {value: string}}) => {
    useActionStore.setState({action: e.target.value})
  }

  const logAction = () => {
    const actionLog = useActionStore.getState().action;
    // if (hourString == labelString) {
    //   useActionStore.setState({action: ''})
    // }
  }

  useEffect(() => {
    logAction();
  })

  return (
    <>
    <div className='action'
    >
      <Select
        size="sm"
        items={useActionStore.getState().action}
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