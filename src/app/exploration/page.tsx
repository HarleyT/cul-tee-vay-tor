"use client"

import usePlanetStore from "../store/task-store";

export default function exploration() {

    function earth(){
        return console.log("Earth")
    }

    function mars(){
        return console.log("Mars")
    }
    return (
        <>
            {/* <Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                <Title title="Settings"/>
                </Box>
            </Box> */}
            <div className="container tab" id="exploration">
                <div className="box1">
                    <div>
                        <button onClick={earth}>Earth</button>
                        <button onClick={mars}>Mars</button>
                    </div>
                </div>
                <div className="box2">
                </div>
                <div className="box3">
                </div>                        
            </div>
        </>
    );
};