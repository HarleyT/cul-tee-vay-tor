"use client"

import { useState, useEffect } from "react";
import { useTestStoreEarth, useTestStoreMars } from "../store/test-store";

export default function useTestTimer() {

    // Earth //
    const earthRunning = useTestStoreEarth.getState().running;
    const earthName = useTestStoreEarth.getState().name;
    const earthInterval = useTestStoreEarth.getState().interval;
    const earthDay = useTestStoreEarth.getState().totalhours;
    const earthHoursList = useTestStoreEarth.getState().hours;
    const earthlist = Object.entries(earthHoursList).map(([key, value]) => {
        return {key, value}
    });

    const earthHours = Object.entries(earthHoursList).map((task) => {
        return <div key={task[0]}>{task[1].value}</div>
    });
    const [earthDayCount, setEarthDayCount] = useState(0);
    const [earthIndex, setEarthIndex] = useState(0);
    const [earthHourInd, setEarthHourInd] = useState(earthHours[earthIndex]);
    const [earthTest, setEarthTest] = useState(earthlist[earthIndex]);

    // Earth Timer //
    useEffect(() => {
        let interval: any;
        if (useTestStoreEarth.getState().running) {
        interval = setInterval(() => {
            if (earthIndex === earthDay) {
            setEarthIndex(0);
            setEarthDayCount(earthDayCount + 1);
            } else {
            setEarthIndex(earthIndex + 1);
            setEarthHourInd(earthHours[earthIndex]);
            setEarthTest(earthlist[earthIndex]);
            }
        }, earthInterval);
        }
        return () => {
        clearInterval(interval);
        };
    }, [earthIndex, earthDayCount, earthlist,
        earthHours, earthDay, earthInterval]);


    // Mars //
    const marsRunning = useTestStoreMars.getState().running;
    const marsName = useTestStoreMars.getState().name;
    const marsInterval = useTestStoreMars.getState().interval;
    const marsDay = useTestStoreMars.getState().totalhours;
    const marsHoursList = useTestStoreMars.getState().hours;
    const marsHours = Object.entries(marsHoursList).map((task) => {
        return <div key={task[0]}>{task[1].value}</div>
    });
    const marsAction = Object.entries(marsHoursList).map((task) => {
        return <div key={task[0]}>{task[1].action}</div>
    });
    const marsActive = Object.entries(marsHoursList).map((task) => {
        return <div key={task[0]}>{task[1].active}</div>
    });
    const [marsDayCount, setMarsDayCount] = useState(0);
    const [marsIndex, setMarsIndex] = useState(0);
    const [marsHourInd, setMarsHourInd] = useState(marsHours[marsIndex]);

    // Mars Timer //
    useEffect(() => {
        let interval: any;
        if (useTestStoreMars.getState().running) {
        interval = setInterval(() => {
            if (marsIndex === marsDay) {
            setMarsIndex(0);
            setMarsDayCount(marsDayCount + 1);
            } else {
            setMarsIndex(marsIndex + 1);
            setMarsHourInd(marsHours[marsIndex]);
            }
        }, marsInterval);
        }
        return () => {
        clearInterval(interval);
        };
    }, [marsIndex, marsDayCount,
        marsHours, marsDay, marsInterval]);


    // Planet Export Data //
    return {earthTest, earthlist, earthDayCount, earthIndex, earthHourInd, earthHours, earthDay, earthInterval, earthName,
            marsDayCount, marsIndex, marsHourInd, marsHours, marsDay, marsInterval, marsName};
}