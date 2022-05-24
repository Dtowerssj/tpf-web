/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing, NotFound, Auth, Home } from '../views';
import Settings from '../views/home/containers/settings/Settings';
import Course from '../views/home/containers/course/Course';
import './App.css';

const App = () => (
	<div className='App'>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='signUp' element={<Auth type='signUp' />} />
				<Route path='signIn' element={<Auth type='signIn' />} />
				<Route path='home/' element={<Home />} />
				<Route path='home/settings' element={<Settings />} />
				<Route path='home/course' element={<Course />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</div>
);

export default App;
