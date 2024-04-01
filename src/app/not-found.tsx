
import Image from "next/image";
import * as React from "react";
import NPH from "../../public/NPH.jpg"

export default async function NotFound() {

    return (
        <>
            <div className="container" id="not-found">
                <Image height={800} width={1200}
                src={NPH}
                alt="Not Found"/>                    
            </div>
        </>
    )
}