import React from "react";
import { Container } from "./components/05_StyleProps";


const App: React.FC = () => {
	return (
		<div>
			<Container styles={{ border: `1px solid black`, padding: `1rem` }}/>
		</div>
	)
}

export { App }
