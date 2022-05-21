/* eslint-disable react/jsx-no-useless-fragment */
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../../api/axios';
import logo from '../../../../assets/logoSolo.png';
import Input from '../../../../components/login/Input';

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const SIGNUP_URL = '/auth/signUp';

const SignUpSidebar = () => {
	const userRef = useRef();
	const errRef = useRef();

	const [name, setName] = useState('');

	const [email, setEmail] = useState('');
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [password, setPassword] = useState('');
	const [validPassword, setValidPassword] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);

	const [matchPassword, setMatchPassword] = useState('');
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setValidEmail(EMAIL_REGEX.test(email));
	}, [email]);

	useEffect(() => {
		const result = PWD_REGEX.test(password);
		console.log(result);
		console.log(password);
		setValidPassword(result);
		const match = password === matchPassword;
		console.log(matchPassword);
		console.log(match);
		setValidMatch(match);
	}, [password, matchPassword]);

	useEffect(() => {
		setErrMsg('');
	}, [email, password, matchPassword]);

	const handleSubmit = async e => {
		e.preventDefault();
		// Si alguien habilita el botón
		const v1 = EMAIL_REGEX.test(email);
		const v2 = PWD_REGEX.test(password);

		if (!v1 || !v2) {
			setErrMsg('Entrada inválida');
			return;
		}

		try {
			const response = await axios.post(
				SIGNUP_URL,
				JSON.stringify({ name, email, password }),
				{
					headers: { 'Content-Type': 'application/json' },
					'Access-Control-Allow-Credentials': true,
				}
			);
			console.log(response.data);
			console.log(response.token);
			console.log(JSON.stringify(response));
			setSuccess(true);
		} catch (err) {
			if (!err?.response) {
				setErrMsg('No server response');
			} else if (err.respnse?.status === 409) {
				setErrMsg('Registration Failed');
			}
			errRef.current.focus();
		}
	};

	return (
		<>
			{success ? (
				<section>
					<h1>Success!</h1>
					<p>
						<Link to='/signIn'>Sign In</Link>
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
						<h3>Regístrate</h3>
						<div className='input-container'>
							<label htmlFor='name'>
								<Input
									type='text'
									placeholder='Nombre Completo'
									innerRef={userRef}
									id='name'
									value={name}
									onChange={e => {
										setName(e.target.value);
									}}
								/>
							</label>
							<div
								className={name !== '' ? 'valid-status' : 'invalid-status'}
							/>
						</div>

						<div className='input-container'>
							<label htmlFor='email'>
								<Input
									type='email'
									placeholder='Email'
									id='email'
									value={email}
									autoComplete='off'
									onChange={e => {
										setEmail(e.target.value);
									}}
									required
									aria-invalid={validEmail ? 'false' : 'true'}
									aria-describedby='uidnote'
									onFocus={() => setEmailFocus(true)}
									onBlur={() => setEmailFocus(false)}
								/>
							</label>
							<div className={validEmail ? 'valid-status' : 'invalid-status'} />
						</div>
						<p
							id='uidnote'
							className={
								emailFocus && email && !validEmail
									? 'instructions'
									: 'offscreen'
							}
						>
							4 to 24 characters.
							<br />
							Must begin with a letter.
							<br />
							Letters, numbers, underscores, hyphens allowed.
						</p>

						<div className='input-container'>
							<label htmlFor='password'>
								<Input
									type='password'
									placeholder='Contraseña'
									id='password'
									value={password}
									onChange={e => {
										setPassword(e.target.value);
									}}
									itsvalid={validPassword}
									required
									aria-invalid={validPassword ? 'false' : 'true'}
									aria-describedby='pwdnote'
									onFocus={() => setPasswordFocus(true)}
									onBlur={() => setPasswordFocus(false)}
								/>
							</label>
							<div
								className={validPassword ? 'valid-status' : 'invalid-status'}
							/>
						</div>
						<p
							id='pwdnote'
							className={
								passwordFocus && !validPassword ? 'instructions' : 'offscreen'
							}
						>
							8 to 24 characters.
							<br />
							Must include uppercase and lowercase letters, a number and a
							special character.
							<br />
							Allowed special characters:{' '}
							<span aria-label='exclamation mark'>!</span>{' '}
							<span aria-label='at symbol'>@</span>{' '}
							<span aria-label='hashtag'>#</span>{' '}
							<span aria-label='dollar sign'>$</span>{' '}
							<span aria-label='percent'>%</span>
						</p>

						<div className='input-container'>
							<label htmlFor='confirmPassword'>
								<Input
									type='password'
									placeholder='Confirmar Contraseña'
									id='confirmPassword'
									onChange={e => setMatchPassword(e.target.value)}
									value={matchPassword}
									required
									aria-invalid={validMatch ? 'false' : 'true'}
									aria-describedby='confirmnote'
									onFocus={() => setMatchFocus(true)}
									onBlur={() => setMatchFocus(false)}
								/>
							</label>
							<div
								className={
									validMatch && matchPassword !== ''
										? 'valid-status'
										: 'invalid-status'
								}
							/>
						</div>
						<p
							id='confirmnote'
							className={
								matchFocus && !validMatch ? 'instructions' : 'offscreen'
							}
						>
							Must match the first password input field.
						</p>
						<button type='submit'>Regístrate</button>
					</form>
					<div>
						<p className='sidebar-terms'>
							By signing up, I agree to the Privacy Policy <br /> and Terms of
							Service
						</p>
						<h4>
							¿Ya tienes una cuenta?
							<span>
								<Link to='signIn'> Inicia sesión</Link>
							</span>
						</h4>
					</div>
				</div>
			)}
		</>
	);
};

export default SignUpSidebar;
