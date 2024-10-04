import Pause from "../../../../public/Icons/icons8-pause-100.png"

import Image from "next/image";
import * as React from "react";


export default function IconPause() {

    return (
        <>
            <div>
                <Image width={40}
                src={Pause}
                alt="Pause Button"/>                    
            </div>
        </>
    )
}