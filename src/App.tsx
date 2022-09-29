import React from "react";
import { Greet } from "./components/01_TypingProps";

const App: React.FC = () => {
	return (
		<div>
			<Greet name='John'/>
		</div>
	)
}

export { App }
