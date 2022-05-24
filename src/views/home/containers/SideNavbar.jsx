import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoMdSettings } from 'react-icons/io';
import { ImBook } from 'react-icons/im';
import './sideNavbar.css';

const SideNavbar = ({ show }) => (
	<nav className={show ? 'sidenav active' : 'sidenav'}>
		<ul>
			<li>
				<Link to='course' className='link-container'>
					<ImBook />
					Cursos
				</Link>
			</li>
			<li>
				<Link to='settings' className='link-container'>
					<IoMdSettings />
					Configuración
				</Link>
			</li>
		</ul>
		<Outlet />
	</nav>
);

export default SideNavbar;
