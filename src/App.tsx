import React from "react";
import { Status, Heading, Oscar } from "./components/03_AdvancedProps";

const App: React.FC = () => {
	return (
		<div>
			<Status status="loading"/>
			<Oscar>
				<Heading>Oscar goes to Leonardo!</Heading>
			</Oscar>

		</div>
	)
}

export { App }
