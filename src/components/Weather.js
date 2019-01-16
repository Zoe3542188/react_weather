import React from "react";
import { Carousel } from "react-bootstrap"

class Weather extends React.Component {
	render() {
		return (
			<div>
					<Carousel>
					  <Carousel.Item>
					    <img
					      className="d-block w-100"
					      src="holder.js/800x400?text=First slide&bg=373940"
					      alt="Location"
					    />
					    <Carousel.Caption>
					      <h3>Location</h3>
					      <p>You are currently looking at weather in{this.props.city}{this.props.country}</p>
					    </Carousel.Caption>
					  </Carousel.Item>
					  <Carousel.Item>
					    <img
					      className="d-block w-100"
					      src="holder.js/800x400?text=Second slide&bg=282c34"
					      alt="Temperature"
					    />

					    <Carousel.Caption>
					      <h3>Temperature</h3>
					      <p>{this.props.temperature}C°</p>
					    </Carousel.Caption>
					  </Carousel.Item>
					  <Carousel.Item>
					    <img
					      className="d-block w-100"
					      src="holder.js/800x400?text=Third slide&bg=20232a"
					      alt="Humidity"
					    />

					    <Carousel.Caption>
					      <h3>Humidity</h3>
					      <p>{this.props.humidity}</p>
					    </Carousel.Caption>
					  </Carousel.Item>
					  <Carousel.Item>
					    <img
					      className="d-block w-100"
					      src="holder.js/800x400?text=Third slide&bg=20232a"
					      alt="Description"
					    />

					    <Carousel.Caption>
					      <h3>Description</h3>
					      <p>{this.props.description}</p>
					    </Carousel.Caption>
					  </Carousel.Item>
					</Carousel>;
			</div>
		);
	}
};

export default Weather;