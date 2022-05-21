module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'airbnb',
		'eslint-config-prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'jsx-a11y/label-has-associated-control': [
			2,
			{
				controlComponents: ['Input'],
				depth: 3,
			},
		],
		'react/prop-types': [
			0,
			{ ignore: 0, customValidators: 0, skipUndeclared: 1 },
		],
	},
};
