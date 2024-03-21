// import {useEffect, ReactNode} from "react";
// import {signIn, useSession} from "next-auth/react"

// export default function GuestSessionProvider({
//     children
// }: {
//     children: ReactNode
// }) {
//     const {data: session, status} = useSession();
//     useEffect(() => {
//         if (status === "unauthenticated") {
//             // login as guest
//             signIn("credentials")
//                 .then((data) => {
//                     // async sign-in returned
//                 });
//         }
//     }, [status]);

//     return (
//         <>
//             {children}
//         </>
//     );
// }