const base = require("./lib/base")
const next = require("./lib/next")
const react = require("./lib/react")

module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: ["plugin:prettier/recommended", "airbnb", "airbnb/hooks"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["simple-import-sort", "import", "react", "@typescript-eslint"],
	rules: {
		...base,
		...next,
		...react,
	},
	settings: {
		react: {
			// Tells eslint-plugin-react to automatically detect the version of React to use
			version: "detect",
		},
	},
}
