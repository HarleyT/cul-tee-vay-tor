"use client"

import { useState, useEffect } from "react";
import { useTestStoreEarth, useTestStoreMars } from "../store/test-store";

export default function useTestTimer() {

    // Earth //
    const earthRunning = useTestStoreEarth.getState().running;
    const earthName = useTestStoreEarth.getState().name;
    const earthInterval = useTestStoreEarth.getState().interval;
    const earthDays = useTestStoreEarth.getState().days;
    const earthHoursList = useTestStoreEarth.getState().hours;
    const earthHours = Object.entries(earthHoursList).map((task) => {
        return <div key={task[0]}>{task[1].value}</div>
    });
    const earthAction = Object.entries(earthHoursList).map((task) => {
        return <div key={task[0]}>{task[1].action}</div>
    });
    const earthActive = Object.entries(earthHoursList).map((task) => {
        return <div key={task[0]}>{task[1].active}</div>
    });
    const [earthDayCount, setEarthDayCount] = useState(0);
    const [earthIndex, setEarthIndex] = useState(0);
    const [earthHourInd, setEarthHourInd] = useState(earthHours[earthIndex]);

    // Earth Timer //
    useEffect(() => {
        let interval: any;
        if (earthRunning) {
        interval = setInterval(() => {
            if (earthIndex === earthDays) {
            setEarthIndex(0);
            setEarthDayCount(earthDayCount + 1);
            } else {
            setEarthIndex(earthIndex + 1);
            setEarthHourInd(earthHours[earthIndex]);
            }
        }, earthInterval);
        }
        return () => {
        clearInterval(interval);
        };
    }, [earthIndex, earthDayCount, earthRunning,
        earthHours, earthDays, earthInterval]);


    // Mars //
    const marsRunning = useTestStoreMars.getState().running;
    const marsName = useTestStoreMars.getState().name;
    const marsInterval = useTestStoreMars.getState().interval;
    const marsDays = useTestStoreMars.getState().days;
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
        if (marsRunning) {
        interval = setInterval(() => {
            if (marsIndex === marsDays) {
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
    }, [marsIndex, marsDayCount, marsRunning,
        marsHours, marsDays, marsInterval]);


    // Planet Export Data //
    return {earthDayCount,earthIndex, earthHourInd, earthHours, earthDays, earthInterval, earthName, earthAction, earthActive,
            marsDayCount, marsIndex, marsHourInd, marsHours, marsDays, marsInterval, marsName, marsAction, marsActive};
}