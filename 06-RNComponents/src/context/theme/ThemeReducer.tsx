import { Theme } from "@react-navigation/native"

type ThemeAction =
	| { type: 'set_light_theme' }
	| { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
	currentTheme: 'light' | 'dark';
	dividerColor: string;
	secondary: string;
	tertiary: string;
}

export const lightTheme: ThemeState = {
	currentTheme: 'light',
	dark: false,
	dividerColor: 'rgba(0,0,0,0.7)',
	colors: {
		primary: '#084F6A',
		background: 'white',
		card: 'white',
		text: 'black',
		border: 'black',
		notification: 'teal',
	},
	secondary:'#D9D9DB',
	tertiary:'pink'
}

export const darkTheme: ThemeState = {
	currentTheme: 'dark',
	dark: true,
	dividerColor: 'rgba(0,0,0,0.7)',
	colors: {
		primary: '#75CEDB',
		background: 'black',
		card: 'black',
		text: 'white',
		border: 'black',
		notification: 'teal',
	},
	secondary:'#D9D9DB',
	tertiary:'yellow'
}

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
	switch (action.type) {
		case 'set_light_theme':
			return {
				...lightTheme
			}
		case 'set_dark_theme':
			return {
				...darkTheme
			}
		default:
			return state
	}
}