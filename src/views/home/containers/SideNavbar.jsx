import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './sideNavbar.css';

const SideNavbar = ({ show }) => (
	<div className={show ? 'sidenav active' : 'sidenav'}>
		<ul>
			<li>
				<Link to='course'>Cursos</Link>
			</li>
			<li>
				<Link to='settings'>Configuración</Link>
			</li>
		</ul>
		<Outlet />
	</div>
);

export default SideNavbar;
