import React, { createContext, useReducer } from "react"
import { authReducer } from './authReducer';

// Definir cómo luce, qué información tendré aquí
export interface AuthState {
	isLoggedIn: boolean;
	username?: string;
	favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
	isLoggedIn: false,
	username: undefined,
	favoriteIcon: undefined
}

// Lo usaremos para decirle a React cómo luce y qué expone el context
export interface AuthContextProps {
	authState: AuthState;
	singIn: () => void;
	changeFavotireIcon: (iconName: string) => void;
	logOut: () => void;
	changeUserName: (userName: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps)

// Exponer proveedor del estado
export const AuthProvider = ({ children }: any) => {

	const [authState, dispatch] = useReducer(authReducer, authInitialState)

	const singIn = () => {
		dispatch({ type: 'singIn' });
	}

	const changeFavotireIcon = ( iconName: string ) => {
		dispatch({ type: 'changeFavicon', payload: iconName })
	}

	const logOut = () => {
		dispatch({ type: 'logout' })
	}

	const changeUserName = (userName: string) => {
		dispatch({ type: 'changeUserName', payload: userName })
	}

	return (
		<AuthContext.Provider value={{
			authState,
			singIn,
			changeFavotireIcon,
			logOut,
			changeUserName
		}}>
			{ children }
		</AuthContext.Provider>
	);
}