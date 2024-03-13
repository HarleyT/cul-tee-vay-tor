// import { useState } from "react";
// import { Box, useTheme, Stack, LinearProgress } from "@mui/material";
// import { tokens } from "../theme";
// import { useGameLoop } from "../components/Timer";
// import { useSelector } from 'react-redux';
// import { useQuery } from "@tanstack/react-query";

import TaskManager from "./components/TaskManager";
// import DayNightCycle from "../components/DayNightCycle";
// import Title from "../components/Title"
// import Task from "../components/TaskManager/Task";

// const timers = [
//     '10sec', '20sec', '30sec', '40sec'
// ];
// const planetTime = timers[0];

const realms = [
    'Mortal', 'Qi Sensing', 'Qi Movement', 'Qi Rotation'
];
const realmLabel = realms[0];

const ages = [
    '10', '20', '30', '40'
];
const ageLabel = ages[0];

const locations = [
    'Orphanage', 'Academy', 'Arena', 'Dungeon'
];
const locationLabel = locations[0];

const Hero = () => {
    // const [time, setTime] = useState(0);
    // const [deltaTime, setDeltaTime] = useState(0);
    // const [colour, setColour] = useState();
  
    // useGameLoop((time, deltaTime) => {
    //   setTime(time);
    //   setDeltaTime(deltaTime);
    // });

    // const updatedTime = Math.round(Math.round(time)/1000);

    // const theme = useTheme();
    // const colours = tokens(theme.palette.mode);
    return (
        <>
            {/* <Box>
                <Stack sx={{width: '100%'}}>
                    <LinearProgress variant="indeterminate"/>
                </Stack>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                <Title title="Main"/>
                </Box>
            </Box> */}
            <div className="container tab" id="main">
                <div className="box1">
                    {/* <div className="user">Username:{user.name}</div> */}
                    <div style={{ color: "red" }}>
                        Lifespan: <span id="lifespanDisplay">70</span> years
                        <br />
                        {/* Real Time: <span id="realtimeDisplay">{updatedTime} seconds</span> */}
                    </div>
                    {/* <DayNightCycle /> */}
                    <div className="location">
                        <span>Location: </span>
                        <span>{locationLabel}</span>
                    </div>
                </div>
                <div className="box2">
                    <div className="planet-selection">
                        <p></p>
                    </div>
                    <div className="animation-box">
                    </div>
                    <div className="task-manager">
                        <TaskManager />
                    </div>
                </div>
                <div className="box3">
                    <div className="realm">
                        <span>Realm: </span>
                        <span>{realmLabel}</span>
                        <span>Age: </span>
                        <span>{ageLabel}</span>
                    </div>
                    <br />
                    {/* <Image
                        src="./img/CharacterSpritePH.png"
                        alt="Character Sprite"
                        className="anim-char"
                    /> */}
                    <br />
                    <div className="state">
                        <span>Physical State</span>
                        <span>Mental State</span>
                        <span>Spiritual State</span>
                    </div>
                </div>                        
            </div>
        </>
    )
}

export default Hero;
