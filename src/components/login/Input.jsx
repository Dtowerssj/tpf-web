import React from 'react';
// import styled from 'styled-components';
import './input.css';

const Input = ({ type, placeholder, innerRef, id, onChange, value }) => (
	<div className='login-input-container'>
		<input
			className='login-input'
			placeholder={placeholder && placeholder}
			type={type || 'text'}
			id={id}
			ref={innerRef}
			onChange={onChange}
			value={value}
			required
			autoComplete='off'
		/>
	</div>
);

/*

const StyledInput = styled.input`
	width: 80%;
	font-family: var(--font-family);
	max-width: 350px;
	min-width: 250px;
	height: 40px;
	border: none;
	margin: 0.5rem 0;
	background-color: #f5f5f5;
	box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	padding: 0 1rem;
	transition: all 0.2s ease-in;

	&:hover {
		transform: translateY(-3px);
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Status = styled.div`
	height: 10px;
	width: 10px;
	background: #9d9d9d;
	border-radius: 10px;
	margin-left: 1rem;

	${StyledInput}:focus + & {
		background: #ffa689;
	}
	${StyledInput}:invalid + & {
		background: #fe1717;
	}
	${StyledInput}:valid + & {
		background: #32ad10;
	}
`;

*/

export default Input;
