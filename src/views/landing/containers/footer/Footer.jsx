import React from 'react';
import './footer.css';
import gpt3Logo from '../../../../assets/logo.png';

const Footer = () => (
	<div className='footer section__padding'>
		<div className='footer-heading'>
			<h1 className='gradient__text'>
				Do you want to step in to the future before others
			</h1>
		</div>

		<div className='footer-btn'>
			<p>Request Early Accesss</p>
		</div>

		<div className='footer-links'>
			<div className='footer-links_logo'>
				<img src={gpt3Logo} alt='logo' />
				<p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
			</div>

			<div className='footer-links_div'>
				<h4>Links</h4>
				<p>Overons</p>
				<p>Social Media</p>
				<p>Counters</p>
				<p>Contact</p>
			</div>

			<div className='footer-links_div'>
				<h4>Company</h4>
				<p>Terms & Conditions</p>
				<p>Privacy Policy</p>
				<p>Contact</p>
			</div>

			<div className='footer-links_div'>
				<h4>Get in touch</h4>
				<p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
				<p>+32 744982300492</p>
				<p>hola@gmail.com</p>
			</div>

			<div className='footer-copyright'>
				<p>© 2021 GPT-3. All rights reserved.</p>
			</div>
		</div>
	</div>
);

export default Footer;
