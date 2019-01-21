import React,{ useState } from "react";
import { Button } from 'react-bootstrap';

const useInputValue = (initialValue) =>{
	const[value, setValue] = useState(initialValue);
	return{
		value,
		onChange: e=> setValue(e.target.value)
	};
};

export default function Form({onSubmit}) {
	const cityinfo = useInputValue("");
		return (
			<form onSubmit={e=>{e.preventDefault();onSubmit(cityinfo.value);}}>
			  <div className="form-group">
			    <label>City</label>
			    <input type="text" className="form-control" id="exampleInputCity" aria-describedby="emailHelp" placeholder="Enter City" {...cityinfo}/>
			  </div>
			  <Button type="submit" bsStyle='success'>Find Weather</Button>
			</form>
		);
};