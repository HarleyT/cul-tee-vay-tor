"use client"

import React from 'react'
import usePlanetStore from '../store/task-store';
import { Button } from '@nextui-org/react';
import useTestStoreEarth, { usePlanetSelect, useTestStoreMars } from '../store/test-store';

export const PlanetSelector = () => {

  function earthButton(){
    usePlanetStore.setState({planet: "earth", running: false})
    usePlanetSelect.setState({planet: "earth"})
    useTestStoreEarth.setState({running: false})
  }

  function marsButton(){
    usePlanetStore.setState({planet: "mars", running: false})
    usePlanetSelect.setState({planet: "mars"})
    useTestStoreMars.setState({running: false})
  }

  return (
    <div>
        <Button onClick={earthButton}>Earth</Button>
        <br/>
        <Button onClick={marsButton}>Mars</Button>
    </div>
  )
}
