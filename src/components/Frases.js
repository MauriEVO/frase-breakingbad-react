import React from 'react';

const Frases = ({frase}) => {
	return (
		<div>
			<h1>{frase.quote}</h1>
			<p>{frase.author}</p>
		</div>
	);
}
 
export default Frases;