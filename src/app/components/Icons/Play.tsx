import Play from "../../../../public/Icons/icons8-play-100.png"

import Image from "next/image";
import * as React from "react";


export default function IconPlay() {

    return (
        <>
            <div>
                <Image width={40}
                src={Play}
                alt="Play Button"/>                    
            </div>
        </>
    )
}