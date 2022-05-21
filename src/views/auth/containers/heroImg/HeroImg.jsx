import React from 'react';
import './heroImg.css';

const Title = ({ text1 = '', text2 = '' }) => (
	<div className='heroImg-container'>
		<h1>
			{text1} <br />
			{text2}
		</h1>
	</div>
);

const HeroImg = ({ type = '' }) => {
	if (type === 'signUp') {
		return <Title text1='Join The' text2='Team' />;
	}
	if (type === 'signIn') {
		return <Title text1='Acceder' />;
	}
	return <Title text1='Bienvenido' />;
};

export default HeroImg;
