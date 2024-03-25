"use client"

import Link from "next/link";
// import { ThemeSwitcher } from "./ThemeSwitch";
import { usePathname } from "next/navigation";

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700";
const INACTIVE_ROUTE = "py-1 px-2 text-gray-300 hover:text-gray-300 hover:bg-gray-700"


// function AuthButton() {
// 	const { data: session } = useSession();

// 	if (session) {
// 		return (
// 			<>
// 				<div>
// 					{session?.user?.name}
// 				</div>
// 				<button onClick={() => signOut()}>Sign Out</button>
// 			</>
// 		)
// 	}
// 	return (
// 		<>
// 			<button onClick={() => signIn()}>Sign In</button>
// 		</>
// 	)
// }

export default function Header() {
	const pathname = usePathname();
	return (
		<div className="flex justify-between navbar">
			<div>
				<div className="logo">
					{/* <a href="https://github.com/HarleyT/cultivator-incremental">
						<img src="/assets/golden.png" alt="Cultivator Incremental" />
					</a> */}
				</div>
			</div>
			<div className="flex">
				<Link href="/home" className={pathname === "/home" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>Home</Link>
                <Link href="/combat" className={pathname === "/combat" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>Combat</Link>
                <Link href="/character" className={pathname === "/character" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>Character</Link>
                <Link href="/storage" className={pathname === "/storage" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>Storage</Link>
                <Link href="/dao" className={pathname === "/dao" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>Dao</Link>
                <Link href="/exploration" className={pathname === "/exploration" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>Exploration</Link>
                <Link href="/trainingSkills" className={pathname === "/trainingSkills" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>TrainingSkills</Link>
                <Link href="/trainingPhysical" className={pathname === "/trainingPhysical" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>TrainingPhysical</Link>
                <Link href="/trainingEnergy" className={pathname === "/trainingEnergy" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>TrainingEnergy</Link>
                <Link href="/settings" className={pathname === "/settings" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>Settings</Link>
			</div>
			<div className="flex">
				{/* <ThemeSwitcher /> */}
			</div>
		</div>
	);
};