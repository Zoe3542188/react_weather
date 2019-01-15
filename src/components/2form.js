import React from "react";
import { Button } from 'react-bootstrap';
class Form extends React.Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.fetchData}>
				  <div className="form-group">
				    <label>City</label>
				    <input type="text" className="form-control" name="city" id="exampleInputCity" aria-describedby="emailHelp" placeholder="Enter City"/>
				  </div>
				  <div className="form-group">
				    <label>Country</label>
				    <input type="text" className="form-control" name="country" id="exampleInputCountry" placeholder="Enter Country"/>
				  </div>
				  <Button type="submit" bsStyle='success'>Find Weather</Button>
				</form>
			</div>
		);
	}
};

export default Form;