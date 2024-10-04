import { PlanetSelector } from "../components/PlanetSelector";
import TestBar from "../components/TestBar";
import TestStoreInfo from "../components/TestStoreInfo";


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
                        <TestBar />
                    </div>
                </div>
                <div className="box3">
                    <div>
                        <TestStoreInfo />
                    </div>
                </div>                        
            </div>
        </>
    );
};