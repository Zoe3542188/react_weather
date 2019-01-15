//try hooks
import React, { useState } from 'react';

export default function Greeting(props) {

	const [name, setName] = useState('Mary');

	function handleNameChange(e) {
		setName(e.target.value);
	}

	return(
		<section>
			<p>name</p>
			<input 
				value={name} 
				onChange={handleNameChange}
			/>
			<p>{name}</p>
		</section>
	);
}