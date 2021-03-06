import React, { createContext, useState, useMemo } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({});

	const authProviderValue = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);
	return (
		<AuthContext.Provider value={authProviderValue}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
