"use client"

import { useState, useEffect, useReducer } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

// import { PlanetContext } from "../state/planetState";
// import { signal } from "@preact/signals";
// import { useContext } from "preact/hooks";

const ACTIONS = {
  EARTH: 'Earth',
  MARS: 'Mars'
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case ACTIONS.EARTH:
      return {planet: state.planet = 24}
    case ACTIONS.MARS:
      return {planet: state.planet = 12}
    default:
      return state
  }
}

export default function DayNightCycle() {
  // const location = useContext(LocationContextProvider);

  const [state, dispatch] = useReducer(reducer, {planet: 24})

  const [time, setTime] = useState(state.planet);
  const [running, setRunning] = useState(false);
  const [loop, setLoop] = useState(0);

  function earth() {
    dispatch({ type: ACTIONS.EARTH })
  }

  function mars() {
    dispatch({ type: ACTIONS.MARS })
  }

  
  useEffect(() => {
    let interval: any;
    if (running) {
      interval = setInterval(() => {
        if (time === 0) {
        setTime(state.planet);
        setLoop(loop + 1);
        } else {
          setTime(time - 1);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [time, loop, running, state]);

  function playButton(){
    if(time !== 0) {
      setRunning(true);
    }
  }

  function pauseButton() {
    setRunning(false);
  }
  
  // const changeTime = (e) => {
  //   setTime(e.target.value);
  // }


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
          <button className="play" onClick={playButton}>
          <BsFillPlayFill />
          </button>
          )}
          {running && (
          <button className="pause" onClick={pauseButton}>
          <BsPauseFill />
          </button>
          )}
          <button onClick={earth}>earth</button>
          <button onClick={mars}>mars</button>
          <span>{state.planet}</span>
          {/* <span>{location}</span> */}
      </div>
    </>
  );
}