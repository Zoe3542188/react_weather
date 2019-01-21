import React, {useState, useEffect} from 'react';
import './components.css';

export default function Customer() {
	const [username, setUsername ] = useState("");

	useEffect(async () =>{
		const response = await fetch('/api/customers');
		const data = await response.json();
		setUsername(data);
	});

	return(
		<div>
        	Hello, {username}
		</div>
	);
}