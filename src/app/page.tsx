
import * as React from "react";
// import Account from "./components/Account";
// import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { auth } from "../../auth";

export default async function landing() {
    // const session = await auth();
    // if (!session || !session.user) {
    //     null
    // } else {
    //     redirect("/home")
    // }

    return (
        <>
            <div className="container tab" id="landing">
                <div className="box1">
                    <div>
                        Landing Page - Box1
                    </div>
                </div>
                <div className="box2">
                    <pre>
                    {/* {JSON.stringify(session, null, 2)} */}
                    </pre>
                </div>
                <div className="box3">
                    <div>
                        Landing Page - Box3
                    </div>
                </div>                        
            </div>
        </>
    )
}