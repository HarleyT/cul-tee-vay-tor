
import Image from "next/image";
import * as React from "react";
import MAP from "../../public/Argyllshire.png"

export default async function Loading() {

    return (
        <>
            <div className="container" id="loading">
                <Image height={800} width={1200}
                src={MAP}
                alt="Not Found"/>                    
            </div>
        </>
    )
}