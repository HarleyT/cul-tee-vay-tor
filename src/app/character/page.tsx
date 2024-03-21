import { auth } from "../../../auth";
// import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function character() {
    const session = await auth();
    if (!session || !session.user) {
        redirect("/api/auth/signin")
    }

    return (
        <>
            {/* <Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                <Title title="Settings"/>
                </Box>
            </Box> */}
            <div className="container tab" id="character">
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