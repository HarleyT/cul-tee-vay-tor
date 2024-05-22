"use client"

import { Select, SelectItem } from "@nextui-org/react";
import useTimer from '../hooks/useTimer';
import ReactDOMServer from 'react-dom/server';
import usePlanetStore, { useActionStore } from "../store/task-store";
import { produce } from "immer";

interface Props {
  inlab: string;
  dex: number;
  act: string;
}

export default function Action ({inlab, dex, act}: Props) {
  const store = usePlanetStore.getState()
  const actions = useActionStore.getState()

  var actionlabel = actions.actionList.map((list) => {
        return <SelectItem key={list.id} value={list.value}>{list.value}</SelectItem>
  })
  var hours = useTimer().planetIn;

  var hourString = ReactDOMServer.renderToString(hours)
  const labelString = ("<div>" + inlab + "</div>")

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    

    // produce(store.earth, draft => {
    //   draft[(dex-1)].action = useActionStore.getState().actionList[Number(e.target.value)-1].value
    // })

    // usePlanetStore.setState({selectEarthAction: (id, action) => {
    //   id = (dex-1);
    //   action = useActionStore.getState().actionList[Number(e.target.value)-1].value
    // } }),

    // usePlanetStore.setState((state: PlanetStore) => {
    //   state.earth[(dex-1)].action = useActionStore.getState().actionList[Number(e.target.value)-1].value})
    console.log(usePlanetStore.getState().earth[(dex-1)])
    console.log(useActionStore.getState().actionList[Number(e.target.value)-1].value)
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