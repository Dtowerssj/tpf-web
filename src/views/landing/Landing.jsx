import React from 'react';
import {
	Footer,
	Blog,
	Possibility,
	Features,
	WhatGPT3,
	Header,
} from './containers';
import { CTA, Brand, Navbar } from '../../components';
import './landing.css';

const Landing = () => (
	<div className='landing'>
		<div className='gradient__bg'>
			<Navbar />
			<Header />
		</div>
		<Brand />
		<WhatGPT3 />
		<Features />
		<Possibility />
		<CTA />
		<Blog />
		<Footer />
	</div>
);

export default Landing;
