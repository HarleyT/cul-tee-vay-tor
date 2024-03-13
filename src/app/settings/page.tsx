// import { Box, IconButton, useTheme } from "@mui/material";
// import { ColourModeContext, tokens } from "../theme";
// import { useContext } from "react";
// import gameData from '../global/gamedata';
// import Title from "../components/Title"


const Settings = () => {
    // const theme = useTheme();
    // const colours = tokens(theme.palette.mode);
    // const colourmode = useContext(ColourModeContext);

    return (
        <>
            {/* <Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                <Title title="Settings"/>
                </Box>
            </Box> */}
            <div className="container tab" id="settings">
                <div className="box1">
                    {/* <button className="save"
                    onClick={() => {
                        gameData.importGameData();
                    }}> Import Save</button>
                    <button className="save"
                    onClick={() => {
                        gameData.exportGameData();
                    }}> Import Save</button> */}
                </div>
                <div className="box2">
                    <div className="stats">
                        <p>You started playing the game on <span id="startDateDisplay"></span>.</p>
                        <p>You have played for <span id="playedRealTimeDisplay"></span> real time.</p>
                        <p>Your existence has spanned <span id="playedGameTimeDisplay"></span> days game time.</p>
                    </div>
                    <button className="reset"> Hard Reset Game</button>
                </div>
                <div className="box3">
                    <div className="log">Change Log</div>
                </div>                        
            </div>
        </>
    );
};

export default Settings;
