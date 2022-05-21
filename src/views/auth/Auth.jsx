import React from 'react';
import SignInSidebar from './containers/sidebar/SignInSidebar';
import SignUpSidebar from './containers/sidebar/SignUpSidebar';
import HeroImg from './containers/heroImg/HeroImg';
import './auth.css';

const Auth = ({ type = '' }) => (
	<div className='login-container'>
		<div className='login-wrapper'>
			{type === 'signUp' ? <SignUpSidebar /> : <SignInSidebar />}
			<HeroImg type={type} />
		</div>
	</div>
);

export default Auth;
