"use client"

import {Select, SelectItem} from "@nextui-org/react";
import useTimer from '../hooks/useTimer';
import ReactDOMServer from 'react-dom/server';
import usePlanetStore, { useActionStore } from "../store/task-store";
import { produce } from "immer";

interface Props {
  inlab: string;
  dex: number;
}

export default function Action ({inlab, dex}: Props) {
  const store = usePlanetStore.getState()
  const actions = useActionStore.getState()

  var actionlabel = actions.actionList.map((list) => {
        return <SelectItem key={list.id} value={list.value}>{list.value}</SelectItem>
  })

  var hours = useTimer().planetIn;

  var acts = useTimer().planetAct;

  var hourString = ReactDOMServer.renderToString(hours)
  const labelString = ("<div>" + inlab + "</div>")

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(Number(acts.key)-1),
    // usePlanetStore.setState({selectEarthAction: (id, action) => {
    //   id = (Number(e.target.value)-1),
    //   action = useActionStore.getState().actionList[Number(e.target.value)-1].value
    // }}),
    produce(store.earth, draft => {
      draft[(dex-1)].action = useActionStore.getState().actionList[Number(e.target.value)-1].value
    })
    // usePlanetStore.setState({selectEarthAction: (id, action) => {
    //   id = (dex-1);
    //   action = useActionStore.getState().actionList[Number(e.target.value)-1].value
    // } }),
    // usePlanetStore.setState((state: PlanetStore) => {
    //   state.mars[(dex-1)].action = useActionStore.getState().actionList[Number(e.target.value)-1].value})
    console.log(usePlanetStore.getState().earth[(dex-1)])
  };

  return (
    <>
    <div className='action'
    >
      <Select
        size="sm"
        // items={useActionStore.getState().actionList}
        label={inlab}
        variant="faded"
        onChange={handleSelectionChange}
        className='max-w-xs action-selection'
        style={ (hourString == labelString) ? {background:"green"} : {}}
      >
        {actionlabel}
      </Select>
    </div>
    </>
  );
}