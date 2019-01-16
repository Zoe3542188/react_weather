import React, { useState } from "react";
import './components.css';
import TodoForm from "./TodoForm";
import { Button } from "react-bootstrap";


export default function Todo() {
	const [todos, setTodos] = useState([]);
	const [order, setOrder] = useState(0);
	const completeTodo = (i) => setTodos(todos.map((todo,k)=>
		k===i?
			{...todo,complete:!todo.complete}:todo));

	return(
		<div>
			<TodoForm onSubmit={msg => {
					setOrder(order+1);
					setTodos([{msg, complete:false}, ...todos])}
				}/>
			<Button className='reset-btn' bsStyle='danger' onClick={()=>setTodos([])}>Clear</Button>
			<div>
				{todos.map(({ msg, complete },i) => (
					<div 
						key={msg} 
						onClick={()=>completeTodo(i)} 
						style={{textDecoration: complete? "line-through":""}}
					>
						{msg}
					</div>
				))}
			</div>
		</div>
	)
};