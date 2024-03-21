import { auth } from "../../../auth";
// import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function settings() {
    const session = await auth();
    if (!session || !session.user) {
        redirect("/api/auth/signin")
    }

    return (
        <>
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