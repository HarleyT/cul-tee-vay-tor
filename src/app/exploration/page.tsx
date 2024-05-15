import { PlanetSelector } from "../components/PlanetSelector";
import EarthBar from "../components/TestStore";


export default function exploration() {
    
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
                        <PlanetSelector />
                    </div>
                </div>
                <div className="box2">
                    <div>
                        <EarthBar />
                    </div>
                </div>
                <div className="box3">
                </div>                        
            </div>
        </>
    );
};