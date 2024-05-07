"use client"

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import usePlanetStore from "../store/task-store";
import useTimer from "../hooks/useTimer";  
import { IconButton } from '@mui/material';

export default function TimeBar() {
    const planetName = useTimer().planetName;

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
            {planetName}
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
		</div>
		</>
	);
};