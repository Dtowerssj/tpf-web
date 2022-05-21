/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';
import './index.css';
import { AuthProvider } from './context/AuthProvider';

ReactDOM.render(
	<AuthProvider>
		<App />
	</AuthProvider>,
	document.getElementById('root')
);
