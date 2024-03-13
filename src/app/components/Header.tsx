import Link from "next/link";

// import { useDispatch } from 'react-redux';
// import { login, logout } from '../state/user';

// import { useContext } from "react";
// import { Menu, MenuItem } from "react-pro-sidebar";
// import { Typography, Box, useTheme, IconButton } from "@mui/material";
// import { ColourModeContext, tokens } from "../theme";


const Header = () => {
	// const theme = useTheme();
	// const colours = tokens(theme.palette.mode);
	// const colourmode = useContext(ColourModeContext);

	// const dispatch = useDispatch();

	return (
		<div>
			<div>
				<div className="logo">
					{/* <a href="https://github.com/HarleyT/cultivator-incremental">
						<img src="/assets/golden.png" alt="Cultivator Incremental" />
					</a> */}
				</div>
			</div>
			<div>
				<Link href="/">Home</Link>
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
			<div>
                <button> Dark/Light </button>
                <button> Login </button>
                <button> Logout </button>
				{/* <IconButton onClick={colourmode.toggleColourMode}>
					{theme.palette.mode === 'dark' ? (
						<span>Dark</span>
					) : (
						<span>Light</span>
					)}
				</IconButton>
				<button onClick={() => {
					dispatch(login({name: "Ryathimus"}));
					}}> Login
				</button>
				<button onClick={() => {
					dispatch(logout());
					}}> Logout
				</button> */}
			</div>
		</div>
	);
};

export default Header;