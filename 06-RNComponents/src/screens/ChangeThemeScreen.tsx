import React, { useContext } from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ChangeThemeScreen = () => {

	const { setDarkTheme, setLightTheme, theme } = useContext(ThemeContext)

	return (
		<View style={styles.globalMargin}>
			<HeaderTitle title="Theme" />
			<TouchableOpacity 
				style={{
					backgroundColor: theme.colors.primary,
					justifyContent: 'center',
					width: 150,
					height: 50,
					borderRadius: 20
				}}
				activeOpacity={0.8}
				onPress={() => {(theme.currentTheme === 'dark') ? setLightTheme() : setDarkTheme()}}
			>
				<Text
					style={{
						color:'white',
						textAlign: 'center',
						fontSize:22
					}}
				>{(theme.currentTheme === 'dark') ? 'Light' : 'Dark'}</Text>
			</TouchableOpacity>
		</View>
	)
}
