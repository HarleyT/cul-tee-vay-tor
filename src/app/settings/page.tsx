"use client"

import { ThemeSwitch } from "../components/ThemeSwitch";

export default function settings() {

    return (
        <>
            <div className="container tab" id="settings">
                <div className="box1">
                    <ThemeSwitch />
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
                        <br/>
                        <p>You have played for <span id="playedRealTimeDisplay"></span> real time.</p>
                        <br/>
                        <p>Your existence has spanned <span id="playedGameTimeDisplay"></span> days game time.</p>
                    </div>
                    <br/>
                    <button className="reset"> Hard Reset Game</button>
                </div>
                <div className="box3">
                    <div className="log">Change Log</div>
                    <div>
                    </div>
                </div>                        
            </div>
        </>
    );
};