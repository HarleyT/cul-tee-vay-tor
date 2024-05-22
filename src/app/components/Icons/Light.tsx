import Light from "../../../../public/Icons/icons8-sun-star-100.png"

import Image from "next/image";
import * as React from "react";


export default function IconLight() {

    return (
        <>
            <div>
                <Image height={40} width={40}
                src={Light}
                alt="Light Mode"/>                    
            </div>
        </>
    )
}