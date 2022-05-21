/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useRef, useEffect, useContext } from 'react';
import AuthContext from '../../../../context/AuthProvider';
import logo from '../../../../assets/logoSolo.png';
import Input from '../../../../components/login/Input';
import axios from '../../../../api/axios';
import './sidebar.css';

const SIGNIN_URL = '/auth/signIn';

const SignInSidebar = () => {
	const { setAuth } = useContext(AuthContext);
	const userRef = useRef();
	const errRef = useRef();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg('');
	}, [email, password]);

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const response = await axios.post(
				SIGNIN_URL,
				JSON.stringify({ email, password }),
				{
					headers: { 'Content-Type': 'application/json' },
					'Access-Control-Allow-Credentials': true,
				}
			);
			console.log(JSON.stringify(response?.data));
			console.log(JSON.stringify(response));
			const accessToken = response?.data?.token;
			// const roles = response?.data?.roles;
			setAuth({ email, password, accessToken });
			setEmail('');
			setPassword('');
			setSuccess(true);
		} catch (err) {
			if (!err?.response) {
				setErrMsg('No Server Response');
			} else if (err.response?.status === 400) {
				setErrMsg('Missing Username or Password');
			} else if (err.response?.status === 401) {
				setErrMsg('Unauthorized');
			} else {
				setErrMsg('Login Failed');
			}
			errRef.current.focus();
		}
	};

	return (
		<>
			{success ? (
				<section>
					<h1>You are logged in!</h1>
					<br />
					<p>
						<p>Go to Home</p>
					</p>
				</section>
			) : (
				<div className='sidebar-container'>
					<p
						ref={errRef}
						className={errMsg ? 'errMsg' : 'offscreen'}
						aria-live='assertive'
					>
						{errMsg}
					</p>
					<div className='sidebar-logoWrapper'>
						<img src={logo} alt='logo' />
						<h3>
							TRADING PIPS
							<br />
							FACTORY
						</h3>
						<span>ACADEMY</span>
					</div>

					<form className='sidebar-form' onSubmit={handleSubmit}>
						<h3>Inicia sesión</h3>
						<label htmlFor='email'>
							<Input
								type='email'
								id='email'
								innerRef={userRef}
								onChange={e => setEmail(e.target.value)}
								value={email}
								placeholder='Email'
							/>
						</label>
						<label htmlFor='password'>
							<Input
								type='password'
								id='password'
								innerRef={userRef}
								onChange={e => setPassword(e.target.value)}
								value={password}
								placeholder='Contraseña'
							/>
						</label>
						<button type='submit'>Iniciar sesión</button>
					</form>

					<h4>
						¿Aún no tienes una cuenta? <span>Regístrate</span>
					</h4>
				</div>
			)}
		</>
	);
};

export default SignInSidebar;
