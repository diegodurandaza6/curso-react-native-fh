import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
				<Icon name="airplane-outline" size={50} color={ colores.primary } />
				<Icon name="attach-outline" size={50} color={ colores.primary } />
				<Icon name="key-outline" size={50} color={ colores.primary } />
				<Icon name="paw-outline" size={50} color={ colores.primary } />
				<Icon name="pulse-outline" size={50} color={ colores.primary } />
				<Icon name="school-outline" size={50} color={ colores.primary } />
				<Icon name="wallet-outline" size={50} color={ colores.primary } />
			</Text>
		</View>
	)
}
