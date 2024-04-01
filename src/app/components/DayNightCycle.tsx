"use client"

import { useState, useEffect, useReducer } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { signal } from "@preact/signals";


import useTaskStore from '../store/task-store'

//   return (
//     <div className='task-area'>
//       {time.tasks.map((task) => (
//         <div key={task.id}>
//         <Task inlab={task.value} />
//         </div>))}
//     </div>
//   )
// }

  // const inputlabel = times.value.map(timelab => {
  //   return <div key={timelab.id}>{timelab.value}</div>;
  //   })

// import { PlanetContext } from "../state/planetState";
// import { signal } from "@preact/signals";
// import { useContext } from "preact/hooks";

// const ACTIONS = {
//   EARTH: 'Earth',
//   MARS: 'Mars'
// }

// function reducer(state: any, action: any) {
//   switch (action.type) {
//     case ACTIONS.EARTH:
//       return {planet: state.planet = 24}
//     case ACTIONS.MARS:
//       return {planet: state.planet = 12}
//     default:
//       return state
//   }
// }

export default function DayNightCycle() {
  const times = useTaskStore();
  
  // const location = useContext(LocationContextProvider);

  // const [state, dispatch] = useReducer(reducer, {planet: 24})
//       {time.tasks.map((task) => (
//         <div key={task.id}>
//         <Task inlab={task.value} />
//         </div>))}

  // const tabel = times.tasks.map(data => data.inUse)

  

  const uselabel = times.tasks.map((task) => {
    return <div key={task.id}>{task.inUse}</div>})

  // if (tabel.some(data => data.valueOf() === true)){
  //   console.log('Highlight');
  // }
  // else{
  //   console.log("Don't Highlight");
  // }

  const inputlabel = times.tasks.map((task) => {
  return <div key={task.id}>{task.value}</div>})

  const inputkey = times.tasks.map((task) => {
    return <div key={task.id}>{task.id}</div>})


  const [running, setRunning] = useState(false);
  const [loop, setLoop] = useState(0);
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(inputkey[index])
  const [time, setTime] = useState(inputlabel[index]);
  const [high, setHigh] = useState(uselabel[index]);
  const [use, setUse] = useState(times.toggle(index, true));


  // function earth() {
  //   dispatch({ type: ACTIONS.EARTH })
  // }

  // function mars() {
  //   dispatch({ type: ACTIONS.MARS })
  // }

  
  useEffect(() => {
    let interval: any;
    if (running) {
      interval = setInterval(() => {
        // console.log(use)
        // console.log(high)
        if (index === 24) {
          setIndex(0);
          setLoop(loop + 1);
        } else {
          setIndex(index + 1);
          setTime(inputlabel[index]);
          setHigh(uselabel[index]);
          // console.log(high)
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [index, loop, running, inputlabel, use, uselabel]);

  function playButton(){
      setRunning(true);
  }

  function pauseButton() {
    setRunning(false);
  }

  return (
    <>
      <div className="daynightcycle">
        <div className="timer">
          <span>{time}</span>
        </div>
        <div className="loop">
          <span>{loop} Days</span>
        </div>
          {!running && (
          <button className="play" color="primary" onClick={playButton}>
            Play
          </button>
          )}
          {running && (
          <button className="pause" color="primary" onClick={pauseButton}>
            Pause
          </button>
          )}
          {/* <button onClick={earth}>earth</button>
          <button onClick={mars}>mars</button>
          <span>{state.planet}</span> */}
          {/* <span>{location}</span> */}
      </div>
    </>
  );
}