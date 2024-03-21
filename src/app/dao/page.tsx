import { auth } from "../../../auth";
// import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function dao() {
    const session = await auth();
    if (!session || !session.user) {
        redirect("/api/auth/signin")
    }

    return (
        <>
            <div className="container tab" id="dao">
                <div className="box1">
                </div>
                <div className="box2">
                </div>
                <div className="box3">
                </div>                        
            </div>
        </>
    );
};