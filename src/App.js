import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frases from "./components/Frases";


const Contenedor = styled.div`
	text-align: center;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Button = styled.button`
	background-color: #fff;
	color:black;
	font-size:20px;
	border: 1px solid #000;
	padding: 10px 30px;
	&:hover{
		cursor: pointer;
	}
`;

const ContainerFrase = styled.div`
	background-color: #fff;
	color: black;
	font-size:20px;
	border-radius:10px;
	padding: 20px;	
	margin-bottom: 20px;
`;

function App() {

	const [frase, guardarFrases] = useState({})

	const consultarAPI = async () =>{

		const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
		const frase = await api.json()
		guardarFrases(frase[0])
	} 


	//- CARGAR FRASE
	useEffect( () =>{
		consultarAPI()
	}, [])


	return (
		<Contenedor>
			<ContainerFrase>
				<Frases 
					frase={frase}
				/>
			</ContainerFrase>

			<Button
				onClick={consultarAPI}
				>
				Obtener Frase
			</Button>
		</Contenedor>
	);
}

export default App;
