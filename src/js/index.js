//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

const TrafficLight = () => {
	let [color, setColor] = useState(null);

	return (
		<>
			<div className="top bg-dark"></div>
			<div className="trafficlight">
				<div
					className={"light red " + (color == "red" ? "glow" : null)}
					onClick={() => setColor("red")}></div>
				<div
					className={
						"light yellow " + (color == "yellow" ? "glow" : null)
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						"light green " + (color == "green" ? "glow" : null)
					}
					onClick={() => setColor("green")}></div>
			</div>
		</>
	);
};

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
