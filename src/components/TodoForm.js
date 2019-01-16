import React, { useState } from "react";
import './components.css';
import { Button } from "react-bootstrap";

const useInputValue = initialValue => {
	const[value, setValue] = useState(initialValue);
	const[index, setIndex] = useState(1);
	return{
		value,
		index,
		onChange: e => setValue(e.target.value),
		resetValue: ()=>{setValue("");},
		addIndex: ()=>setIndex(index+1),
	};
};


export default function TodoForm({onSubmit}) {
	const { addIndex,resetValue, ...msg } = useInputValue("");

	return(
		<form onSubmit={e=>{
			e.preventDefault();
			if(msg.value != ""){
				addIndex();
				onSubmit(msg.index+'.'+msg.value);
				resetValue();
			}
		}}>
			<div className="form-group">
			    <label>Todo List</label>
				<input type="text" className="form-control" id="exampleInputTodo" aria-describedby="emailHelp" placeholder="Enter Task" {...msg} />
			</div>
			<Button type="submit" bsStyle="success">Add</Button>
		</form>
	)
};
