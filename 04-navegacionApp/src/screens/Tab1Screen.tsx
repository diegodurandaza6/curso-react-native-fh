import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

	const { top } = useSafeAreaInsets();

	useEffect(() => {
		console.log('Tab1Screen effect')
	}, [])

	return (
		<View 
			style={{
				...styles.globalMargin,
				marginTop: top + 10
			}}>
			<Text style={ styles.title }>Iconos</Text>
			<Text>
				<TouchableIcon iconName="airplane-outline" />
				<TouchableIcon iconName="attach-outline" />
				<TouchableIcon iconName="key-outline" />
				<TouchableIcon iconName="paw-outline" />
				<TouchableIcon iconName="pulse-outline" />
				<TouchableIcon iconName="school-outline" />
				<TouchableIcon iconName="wallet-outline" />
			</Text>
		</View>
	)
}
