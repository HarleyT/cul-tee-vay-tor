"use client"

import { useState, useEffect } from "react";
import usePlanetStore from '../store/task-store'

export default function useTimer() {
    const store = usePlanetStore();

    // Earth //
    const earthHours = store.earth.map((earth) => {
    return <div key={earth.id}>{earth.value}</div>});

    const earthTime = usePlanetStore.getState().earthTime;

    const earthIndex = Object.keys(earthHours).length;

    // Mars //
    const marsHours = store.mars.map((mars) => {
        return <div key={mars.id}>{mars.value}</div>});

    const marsTime = usePlanetStore.getState().marsTime;

    const marsIndex = Object.keys(marsHours).length;

    // Common //
    const running = usePlanetStore.getState().running;
    const [loop, setLoop] = useState(0);
    const [index, setIndex] = useState(0);
    const planet = usePlanetStore.getState().planet[index];

    // Change Planet //
    // if (planet === "earth") {
    //     (null)
    // };

    // Planet Indexes //
    const [earth, setEarth] = useState(earthHours[index]);
    const [mars, setMars] = useState(marsHours[index]);

    // Earth Hours //
    useEffect(() => {
        let interval: any;
        if (running) {
        interval = setInterval(() => {
            if (index === earthIndex) {
            setIndex(0);
            setLoop(loop + 1);
            } else {
            setIndex(index + 1);
            setEarth(earthHours[index]);
            }
        }, earthTime);
        }
        return () => {
        clearInterval(interval);
        };
    }, [index, loop, running,
        earthHours, earthIndex, earthTime]);

    // Mars Hours //
    useEffect(() => {
        let interval: any;
        if (running) {
        interval = setInterval(() => {
            if (index === marsIndex) {
            setIndex(0);
            setLoop(loop + 1);
            } else {
            setIndex(index + 1);
            setMars(marsHours[index]);
            }
        }, marsTime);
        }
        return () => {
        clearInterval(interval);
        };
    }, [index, loop, running,
        marsHours, marsIndex, marsTime]);

    // Planet Data //
    return {index, loop,
            earth, earthIndex,
            mars, marsIndex};

}