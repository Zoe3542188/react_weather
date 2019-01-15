import React, { useState } from "react";
import './components.css';

const useInputValue = initialValue => {
	const[value, setValue] = useState(initialValue);
	return{
		value,
		onChange: e => setValue(e.target.value),
		resetValue: ()=>setValue("")
	};
};
export default function TodoForm({onSubmit}) {
	const { resetValue, ...msg } = useInputValue("");

	return(
		<form onSubmit={e=>{
			e.preventDefault();
			onSubmit(msg.value);
			resetValue();
		}}>
			<div className="form-group">
			    <label>Todo List</label>
				<input type="text" className="form-control" id="exampleInputTodo" aria-describedby="emailHelp" placeholder="Enter Task" {...msg} />
			</div>
		</form>
	)
};