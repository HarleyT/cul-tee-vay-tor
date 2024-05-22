import Logo from "../../../../public/Icons/icons8-zen-symbol-100.png"

import Image from "next/image";
import * as React from "react";


export default function IconLogo() {

    return (
        <>
            <div>
                <Image height={40} width={40}
                src={Logo}
                alt="Light Mode"/>                    
            </div>
        </>
    )
}