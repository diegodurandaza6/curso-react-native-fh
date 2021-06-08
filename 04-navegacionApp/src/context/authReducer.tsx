import { AuthState, authInitialState } from './AuthContext';

type AuthAction = 
	| { type: 'singIn'}
	| { type: 'changeFavicon', payload: string }
	| { type: 'logout' }
	| { type: 'changeUserName', payload: string }

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
	
	switch (action.type) {
		case 'singIn':
			return {
				...state,
				isLoggedIn: true,
				username: 'no-username-yet'
			}
		case 'changeFavicon':
			return {
				...state,
				favoriteIcon: action.payload
			}
		case 'logout':
			return {
				// ...state,
				// isLoggedIn: false,
				// username: undefined,
				// favoriteIcon: undefined,
				...authInitialState
			}
		case 'changeUserName':
			return {
				...state,
				username: action.payload
			}
		default:
			return state;
	}

}