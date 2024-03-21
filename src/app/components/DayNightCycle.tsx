"use client"

import { useState, useEffect, useReducer } from "react";
import {Button} from "@nextui-org/react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { signal } from "@preact/signals";
import Task from "./Action";

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

  // const times = signal([
  //   {id: 1, value: "01:00"},
  //   {id: 2, value: "02:00"},
  //   {id: 3, value: "03:00"},
  //   {id: 4, value: "04:00"},
  //   {id: 5, value: "05:00"},
  //   {id: 7, value: "06:00"},
  //   {id: 6, value: "07:00"},
  //   {id: 8, value: "08:00"},
  //   {id: 9, value: "09:00"},
  //   {id: 10, value: "10:00"},
  //   {id: 11, value: "11:00"},
  //   {id: 12, value: "12:00"},
  //   {id: 13, value: "13:00"},
  //   {id: 14, value: "14:00"},
  //   {id: 15, value: "15:00"},
  //   {id: 16, value: "16:00"},
  //   {id: 17, value: "17:00"},
  //   {id: 18, value: "18:00"},
  //   {id: 19, value: "19:00"},
  //   {id: 20, value: "20:00"},
  //   {id: 21, value: "21:00"},
  //   {id: 22, value: "22:00"},
  //   {id: 23, value: "23:00"},
  //   {id: 24, value: "24:00"}
  // ])

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

  const inputlabel = times.tasks.map((task) => {
  return <div key={task.id}>{task.value}</div>})

  // const inputlabel = times.map(timelab => {
  //   return <div key={timelab.id}>{timelab.value}</div>;
  //   })

  const [running, setRunning] = useState(false);
  const [loop, setLoop] = useState(0);
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(inputlabel[index]);

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
        if (index === 24) {
        setIndex(0);
        setLoop(loop + 1);
        } else {
          setIndex(index + 1);
          setTime(inputlabel[index])
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [index, loop, running, inputlabel]);

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
          <Button className="play" color="primary" variant="bordered" onClick={playButton}>
            Play
          </Button>
          )}
          {running && (
          <Button className="pause" color="primary" variant="ghost" onClick={pauseButton}>
            Pause
          </Button>
          )}
          {/* <button onClick={earth}>earth</button>
          <button onClick={mars}>mars</button>
          <span>{state.planet}</span> */}
          {/* <span>{location}</span> */}
      </div>
    </>
  );
}