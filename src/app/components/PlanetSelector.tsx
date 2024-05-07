"use client"

import React from 'react'
import usePlanetStore from '../store/task-store';
import { Button } from '@nextui-org/react';

export const PlanetSelector = () => {

  return (
    <div>
        <Button onClick={usePlanetStore().selectEarth}>Earth</Button>
        <br/>
        <Button onClick={usePlanetStore().selectMars}>Mars</Button>
    </div>
  )
}
