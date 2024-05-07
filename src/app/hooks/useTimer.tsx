"use client"

import { useState, useEffect } from "react";
import usePlanetStore from '../store/task-store'

export default function useTimer() {
    const store = usePlanetStore();

    // Common //
    const running = usePlanetStore.getState().running;
    var planetName = usePlanetStore.getState().planet;
    var planetTime = usePlanetStore.getState().earthTime;
    var planetHours = store.earth.map((earth) => {
        return <div key={earth.id}>{earth.value}</div>});
    var planetIndex = usePlanetStore.getState().earthIndex;
    const [loop, setLoop] = useState(0);
    const [index, setIndex] = useState(0);

    // Change Planet //
    if (planetName === "mars") {
        var planetTime = usePlanetStore.getState().marsTime;
        var planetHours = store.mars.map((mars) => {
            return <div key={mars.id}>{mars.value}</div>});
        var planetIndex = usePlanetStore.getState().marsIndex;
    } else if (planetName === "earth") {
        var planetTime = usePlanetStore.getState().earthTime;
        var planetHours = store.earth.map((earth) => {
            return <div key={earth.id}>{earth.value}</div>});
        var planetIndex = usePlanetStore.getState().earthIndex;
    };

    // Planet Indexes //
    const [planetIn, setPlanetIn] = useState(planetHours[index]);

    // Earth Hours //
    useEffect(() => {
        let interval: any;
        if (running) {
        interval = setInterval(() => {
            if (index === planetIndex) {
            setIndex(0);
            setLoop(loop + 1);
            } else {
            setIndex(index + 1);
            setPlanetIn(planetHours[index]);
            }
        }, planetTime);
        }
        return () => {
        clearInterval(interval);
        };
    }, [index, loop, running,
        planetHours, planetIndex, planetTime]);

    // Planet Data //
    return {index, loop,
            planetIn, planetIndex, planetHours, planetName};

}