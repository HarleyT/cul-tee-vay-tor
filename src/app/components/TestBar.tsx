"use client"

import { IconButton } from '@mui/material';
import useTestTimer from '../hooks/useTest';
import IconPlay from './Icons/Play';
import IconPause from './Icons/Pause';
import useTestStoreEarth, { usePlanetSelect, useTestStoreMars } from '../store/test-store';

export default function TestBar() {
    var planetName = usePlanetSelect.getState().planet;

    const earthIndex = useTestTimer().earthIndex;
    // const earthHours = useTestTimer().earthHours[earthIndex];
    // const earthInterval = useTestTimer().earthInterval;
    const earthTotalHours = useTestTimer().earthDay;
    const earthHourInd = useTestTimer().earthHourInd;
    const earthDayCount = useTestTimer().earthDayCount;
    const earthRunning = useTestStoreEarth.getState().running;

    const marsIndex = useTestTimer().marsIndex;
    // const marsHours = useTestTimer().marsHours[marsIndex];
    // const marsInterval = useTestTimer().marsInterval;
    const marsTotalHours = useTestTimer().marsDay;
    const marsHourInd = useTestTimer().marsHourInd;
    const marsDayCount = useTestTimer().marsDayCount;
    const marsRunning = useTestStoreMars.getState().running;

    if (planetName === "earth") {
        var runningState = earthRunning
        var hourVal = earthHourInd
        var daysVal = earthDayCount
        var indexVal = earthIndex
        var totalHours = earthTotalHours
        var hoursArr = Array.from({ length: totalHours }, (value, index) => index);
    } else if (planetName === "mars") {
        var runningState = marsRunning
        var hourVal = marsHourInd
        var daysVal = marsDayCount
        var indexVal = marsIndex
        var totalHours = marsTotalHours
        var hoursArr = Array.from({ length: totalHours }, (value, index) => index);
    }

    function earthPlayButton(){
        if (useTestStoreEarth.getState().running) {
            useTestStoreEarth.setState({running: false})
        } else {
            useTestStoreEarth.setState({running: true})
        }
        console.log("EarthRunningState: ", useTestStoreEarth.getState().running)
    }

    function marsPlayButton(){
        if (useTestStoreMars.getState().running) {
            useTestStoreMars.setState({running: false})
        } else {
            useTestStoreMars.setState({running: true})
        }
        console.log("MarsRunningState: ", useTestStoreMars.getState().running)
    }

	return (
		<>
        <div className="w-full text-center">
            {planetName}
        </div>
		<div className="nav-hours">
            <IconButton onClick={earthPlayButton}>
                {useTestStoreEarth.getState().running === true ? (
                <IconPlay />
            ) : (
                <IconPause />
            )}</IconButton>
            <IconButton onClick={marsPlayButton}>
                {useTestStoreMars.getState().running === true ? (
                <IconPlay />
            ) : (
                <IconPause />
            )}</IconButton>
            <div className="steps-container">
                {hoursArr.map((stepNumber) => (
                    <span key={stepNumber}>
                    {stepNumber > 1 && <div className="line"></div>}
                    <span
                        className={`step-circle ${stepNumber === indexVal ? 'active' : ''}`}
                    >
                        {stepNumber}
                    </span>
                    </span>
                ))}
                <div className="progress-bar-container">
                    <span
                    className="progress-indicator"
                    style={{
                        width: `${((indexVal) / (totalHours-1)) * 100}%`,
                    }}
                    ></span>
                </div>
            </div>
            <div className="p-2">
                {hourVal}
                {daysVal} Days
            </div>
		</div>
		</>
	);
};