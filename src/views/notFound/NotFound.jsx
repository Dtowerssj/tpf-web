import React from 'react';

const NotFound = () => (
	<div
		style={{
			width: '100%',
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			alignContent: 'center',
		}}
	>
		<h1
			style={{
				color: '#fff',
				fontFamily: 'var(--font-family)',
				fontSize: '48px',
				fontWeight: 800,
			}}
		>
			Error: 404 - Not Found :(
		</h1>
	</div>
);

export default NotFound;
