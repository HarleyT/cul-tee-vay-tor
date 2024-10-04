"use client"

import Link from "next/link";
import TimeBar from "./TimeBar";
import IconLogo from "./Icons/Logo";


export default function Header() {
	
	return (
		<>
			<div className="navbar sm:flex">
				<IconLogo />
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
			<TimeBar />
		</>
	);
};