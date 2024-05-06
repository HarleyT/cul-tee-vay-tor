"use client"

import usePlanetStore from "../store/task-store";
import useTimer from "../hooks/useTimer";  

export default function TimeBar() {
    const value = useTimer().index;

    const length = useTimer().earthIndex;

    const hoursint = [0 ,1 ,2 ,3 ,4];

    function playButton(){
        if (usePlanetStore.getState().running) {
            usePlanetStore.setState({running: false})
        } else {
            usePlanetStore.setState({running: true})
        }
    }

	return (
		<>
		<div className="nav-hours">
            <button className="button" onClick={playButton}>play<br/>pause</button>
            <div className="steps-container">
                {hoursint.map((stepNumber) => (
                    <span key={stepNumber}>
                    {stepNumber > 1 && <div className="line"></div>}
                    <span
                        className={`step-circle ${stepNumber === value ? 'active' : ''}`}
                    >
                        {stepNumber}
                    </span>
                    </span>
                ))}
                <div className="progress-bar-container">
                    <span
                    className="progress-indicator"
                    style={{
                        width: `${((value) / (length-1)) * 100}%`,
                    }}
                    ></span>
                </div>
            </div>
		</div>
		</>
	);
};