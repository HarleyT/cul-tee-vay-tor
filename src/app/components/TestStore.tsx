"use client"

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import usePlanetStore from "../store/task-store";
import { IconButton } from '@mui/material';
import useTestTimer from '../hooks/useTest';
import useTimer from '../hooks/useTimer';
import useTestStoreEarth from '../store/test-store';

export default function TestBar() {
    const store = usePlanetStore();
    var storeActions = store.earth.map((earth) => {
        return <div key={earth.id}>{earth.action}</div>});
    const action1 = usePlanetStore.getState().earth[0].action;
    const action2 = usePlanetStore.getState().earth[1].action;

    const earthName = useTestTimer().earthName;
    const earthHoursList = useTestTimer().earthHours;
    const earthIndex = useTestTimer().earthIndex;
    const earthInterval = useTestTimer().earthInterval;
    const earthHourInd = useTestTimer().earthHourInd;
    const earthDayCount = useTestTimer().earthDayCount;

    const marsName = useTestTimer().marsName;
    const marsHoursList = useTestTimer().marsHours;
    const marsIndex = useTestTimer().marsIndex;
    const marsInterval = useTestTimer().marsInterval;
    const marsHourInd = useTestTimer().marsHourInd;
    const marsDayCount = useTestTimer().marsDayCount;

    const hours = useTimer().planetIn;

    const indexvalue = useTimer().index;

    const indexlength = useTimer().planetIndex;

    const hoursint = Array.from({ length: indexlength }, (value, index) => index);

    const days = useTimer().loop;

    function playButton(){
        if (usePlanetStore.getState().running) {
            usePlanetStore.setState({running: false})
        } else {
            usePlanetStore.setState({running: true})
        }
    }

	return (
		<>
        <div className="w-full text-center">
            {earthName}
        </div>
		<div className="nav-hours">
            <IconButton onClick={playButton}>
                {usePlanetStore.getState().running === true ? (
                <PlayArrowIcon />
            ) : (
                <PauseIcon />
            )}</IconButton>
            <div className="steps-container">
                {hoursint.map((stepNumber) => (
                    <span key={stepNumber}>
                    {stepNumber > 1 && <div className="line"></div>}
                    <span
                        className={`step-circle ${stepNumber === indexvalue ? 'active' : ''}`}
                    >
                        {stepNumber}
                    </span>
                    </span>
                ))}
                <div className="progress-bar-container">
                    <span
                    className="progress-indicator"
                    style={{
                        width: `${((indexvalue) / (indexlength-1)) * 100}%`,
                    }}
                    ></span>
                </div>
            </div>
            <div className="p-2">
                {hours}
                {days} Days
            </div>
            <div>
                {storeActions}
            </div>
		</div>
		</>
	);
};