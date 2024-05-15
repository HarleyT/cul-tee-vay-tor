import Animation from "../components/Animation";
import TaskManager from "../components/TaskManager";
import useTimer from "../hooks/useTimer";

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

export default function home() {
    useTimer;

    return (
        <>
            <div className="container tab" id="main">
                <div className="box1">
                    <div className="title location">
                        <span>Location: </span>
                    </div>
                    <div className="label location">
                        <span id="locationDisplay">{locationLabel}</span>
                    </div>
                </div>
                <div className="box2">
                    <div className="planet-selection">
                    </div>
                    <div className="animation-box">
                        <Animation />
                    </div>
                    <div className="task-manager">
                        <TaskManager />
                    </div>
                </div>
                <div className="box3">
                    <div className="title age">
                        <span>Realm: </span>
                        <br />
                        <span>Lifespan: </span>
                        <br />
                        <span>Age: </span>
                    </div>
                    <div className="label age">
                        <span>{realmLabel}</span>
                        <br />
                        <span>70</span> years
                        {/* Real Time: <span id="realtimeDisplay">{updatedTime} seconds</span> */}
                        <br />
                        <span>{ageLabel}</span>
                    </div>
                    <div className="sprite">
                        Sprite
                        {/* <Image
                        src="./img/CharacterSpritePH.png"
                        alt="Character Sprite"
                        className="anim-char"
                        /> */}
                    </div>
                    <div></div>
                    <div></div>
                    <div className="title physical">
                        <span>Physical</span>
                    </div>
                    <div className="label physical">
                        <span>Exhausted</span>
                    </div>
                    <div className="title mental">
                        <span>Mental</span>
                    </div>
                    <div className="label mental">
                        <span>Meditating</span>
                    </div>
                    <div className="title spiritual">
                        <span>Spiritual</span>
                    </div>
                    <div className="label spiritual">
                        <span>Enlightened</span>
                    </div>
                </div>                        
            </div>
        </>
    )
}