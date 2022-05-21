import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
/*
import { Route } from 'react-router-dom';
import Settings from './containers/settings/Settings';
import Course from './containers/course/Course';
*/
import SideNavbar from './containers/SideNavbar';
import logo from '../../assets/logo1.png';
import './home.css';

const Home = () => {
	const [showSideNav, setShowSideNav] = useState(false);
	return (
		<div className='home-container'>
			<header className='home-header'>
				<div className='left-header-container'>
					<GiHamburgerMenu onClick={() => setShowSideNav(!showSideNav)} />
					<img src={logo} alt='logo' />
				</div>
				<div className='right-header-container'>
					<button type='submit'>Cerrar sesión</button>
				</div>
			</header>
			<SideNavbar show={showSideNav} />
		</div>
	);
};

export default Home;
