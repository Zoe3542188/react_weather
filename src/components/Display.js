import React, { useState } from "react";
import './components.css';
import ControlledTabs from "./ControlledTabs";

export default function Display(){
	const [value, setValue] = useState(0);
	return(
		<div>
			<ControlledTabs onSelect={fetchWeather} />
		</div>
	)
}