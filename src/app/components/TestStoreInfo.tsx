"use client"

import React from 'react'
import useTestStoreEarth, { usePlanetSelect, useTestStoreMars } from '../store/test-store'
import useTestTimer from '../hooks/useTest'

const TestStoreInfo = () => {
    const Name = usePlanetSelect.getState().planet
    const EarthRun = useTestStoreEarth.getState().running
    const EarthHour = useTestTimer().earthIndex
    const EarthTime = useTestTimer().earthTest.key
    const MarsRun = useTestStoreMars.getState().running
    const MarsHour = useTestTimer().marsIndex
    const MarsTime = useTestTimer().marsHourInd.key
  return (
    <>
        <div className='whitespace-nowrap'>
            <div>{"Current Planet = " + Name}</div>
            <div>{"Earth Running? " + EarthRun}</div>
            <div>{"Earth Index = " + EarthHour}</div>
            <div>{"Earth Time = " + EarthTime}</div>
            <br/>
            <div>{"Mars Running? " + MarsRun}</div>
            <div>{"Mars Index = " + MarsHour}</div>
            <div>{"Mars Time = " + MarsTime}</div>
        </div>
    </>
  )
}

export default TestStoreInfo