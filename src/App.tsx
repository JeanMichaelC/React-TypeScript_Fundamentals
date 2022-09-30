import React from "react";
import { Container } from "./components/05_StyleProps";
import { Greet } from "./components/06_PropsTypesAndTips";

const App: React.FC = () => {
	return (
		<div>
			<Container styles={{ border: `1px solid black`, padding: `1rem` }}/>
			<Greet messageCount={20} isLoggedIn/>
		</div>
	)
}

export { App }
