import React, { createContext, useEffect, useReducer } from "react";
import { Appearance } from "react-native";
import { AppState } from "react-native";
import { useColorScheme } from "react-native";
import { lightTheme, themeReducer, ThemeState, darkTheme } from './ThemeReducer';

interface ThemeContextProps {
	theme: ThemeState;
	setDarkTheme: () => void;
	setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {

	// const colorScheme = useColorScheme();

	const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme() === 'dark') ? darkTheme : lightTheme) // TODO:

	// SOLO EN IOS POR AHORA
	// useEffect(() => {
	// 	(colorScheme === 'light')
	// 	? setLightTheme()
	// 	: setDarkTheme()
	// }, [colorScheme])

	useEffect(() => {
		AppState.addEventListener('change', (status) => {
			console.log({status})
			if(status === 'active'){
				(Appearance.getColorScheme() === 'light')
					? setLightTheme()
					: setDarkTheme()
			}
		})
	}, [])

	const setDarkTheme = () => {
		dispatch({type: 'set_dark_theme'});
		console.log('setDarkTheme');
	}

	const setLightTheme = () => {
		dispatch({type: 'set_light_theme'});
		console.log('setLightTheme');
	}

	return(
		<ThemeContext.Provider value={{
			theme,
			setDarkTheme,
			setLightTheme,
		}}>
			{children}
		</ThemeContext.Provider>
	)
}