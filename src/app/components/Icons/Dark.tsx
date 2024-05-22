import Dark from "../../../../public/Icons/icons8-moon-100.png"

import Image from "next/image";
import * as React from "react";


export default function IconDark() {

    return (
        <>
            <div>
                <Image height={40} width={40}
                src={Dark}
                alt="Dark Mode"/>                    
            </div>
        </>
    )
}