import React from "react";

class Weather extends React.Component {
	render() {
		return (
			<div>
				{ this.props.city && this.props.country && 
				<div>
					<p>Location:{ this.props.city } { this.props.country }</p>
					<p>Temperature: { this.props.temperature } </p>
					<p>Humidity: { this.props.humidity }</p>
					<p>Description: { this.props.description }</p>
				</div>}
				{ this.props.error && <p>{ this.props.error }</p> }
			</div>
		);
	}
};

export default Weather;