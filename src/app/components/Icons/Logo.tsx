import Logo from "../../../../public/Icons/icons8-zen-symbol-100.png"

import Image from "next/image";
import * as React from "react";


export default function IconLogo() {

    return (
        <>
            <div className="logo min-w-max">
                <Image width={30}
                src={Logo}
                alt="Logo"/>                    
            </div>
        </>
    )
}