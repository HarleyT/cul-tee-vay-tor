"use client"

import Link from "next/link";
import TimeBar from "./TimeBar";
import MobileDrawer from "./Mobile/MobileHeader";



export default function Header() {
	
	return (
		<>
			<div className="navbar">
				{/* <a href="https://github.com/HarleyT/cultivator-incremental">
					<img src="/assets/golden.png" alt="Cultivator Incremental" />
				</a> */}
				<Link href="/home">Home</Link>
				<Link href="/combat">Combat</Link>
				<Link href="/character">Character</Link>
				<Link href="/storage">Storage</Link>
				<Link href="/dao">Dao</Link>
				<Link href="/exploration">Exploration</Link>
				<Link href="/trainingSkills">TrainingSkills</Link>
				<Link href="/trainingPhysical">TrainingPhysical</Link>
				<Link href="/trainingEnergy">TrainingEnergy</Link>
				<Link href="/settings">Settings</Link>
			</div>
			{/* <div className="navbarMob">
				<MobileDrawer />
			</div> */}
			<TimeBar />
		</>
	);
};