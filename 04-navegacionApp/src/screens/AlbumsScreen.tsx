import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {

	const { authState: { isLoggedIn }, logOut } = useContext(AuthContext)

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>AlbumsScreen</Text>

			{
				isLoggedIn && 
				(<Button 
					title='Logout'
					onPress={logOut}
				/>)
			}
		</View>
	)
}
