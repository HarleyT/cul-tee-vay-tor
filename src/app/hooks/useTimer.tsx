"use client"

import { useState, useEffect } from "react";
import usePlanetStore, { useActionStore } from '../store/task-store'

export default function useTimer() {
    const store = usePlanetStore();
    // usePlanetStore().selectEarthAction(useActionStore().actionID,"dude")

    // Common //
    const running = usePlanetStore.getState().running;
    var planetName = usePlanetStore.getState().planet;
    var planetTime = usePlanetStore.getState().earthTime;
    var planetHours = store.earth.map((task) => {
        return <div key={task.id}>{task.value}</div>});
    var planetActions = store.earth.map((task) => {
        return <div key={task.id}>{task.action}</div>});
    var planetIndex = usePlanetStore.getState().earthIndex;
    const [loop, setLoop] = useState(0);
    const [index, setIndex] = useState(0);

    // Change Planet //
    if (planetName === "mars") {
        var planetTime = usePlanetStore.getState().marsTime;
        var planetHours = store.mars.map((mars) => {
            return <div key={mars.id}>{mars.value}</div>});
        var planetIndex = usePlanetStore.getState().marsIndex;
        var planetActions = store.mars.map((task) => {
            return <div key={task.id}>{task.action}</div>});
    } else if (planetName === "earth") {
        var planetTime = usePlanetStore.getState().earthTime;
        var planetHours = store.earth.map((earth) => {
            return <div key={earth.id}>{earth.value}</div>});
        var planetIndex = usePlanetStore.getState().earthIndex;
        var planetActions = store.earth.map((task) => {
            return <div key={task.id}>{task.action}</div>});
    };

    // Planet Indexes //
    const [planetIn, setPlanetIn] = useState(planetHours[index]);
    const [planetAct, setPlanetAct] = useState(planetActions[index]);

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
            setPlanetAct(planetActions[index]);
            }
        }, planetTime);
        }
        return () => {
        clearInterval(interval);
        };
    }, [index, loop, running,
        planetHours, planetIndex, planetTime, planetActions]);

    // Planet Data //
    return {index, loop,
            planetIn, planetIndex, planetHours, planetName, planetActions, planetAct};

}