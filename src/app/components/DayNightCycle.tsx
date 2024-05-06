"use client"

import { useState, useEffect, useReducer } from "react";
// import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import useTimer from "../hooks/useTimer";

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
  const earth = useTimer().earth;
  const loop = useTimer().loop;

  // const [state, dispatch] = useReducer(reducer, {planet: 24})
//       {time.tasks.map((task) => (
//         <div key={task.id}>
//         <Task inlab={task.value} />
//         </div>))}


  // function earth() {
  //   dispatch({ type: ACTIONS.EARTH })
  // }

  // function mars() {
  //   dispatch({ type: ACTIONS.MARS })
  // }



  return (
    <>
      <div className="daynightcycle">
        <div className="timer">
          <span>{earth}</span>
        </div>
        <div className="loop">
          <span>{loop} Days</span>
        </div>
          {/* <button onClick={earth}>earth</button>
          <button onClick={mars}>mars</button>
          <span>{state.planet}</span>
          <span>{location}</span> */}
      </div>
    </>
  );
}