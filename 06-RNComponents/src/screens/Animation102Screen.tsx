import React, { useContext } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { useDraggableView } from '../hooks/useDraggableView';
import { ThemeContext } from '../context/theme/ThemeContext';

export const Animation102Screen = () => {

	const {panResponder, pan} = useDraggableView();
	const { theme: { colors } } = useContext(ThemeContext);

	return (
		<View style={{...styles.container}}>
			<Animated.View 
				{...panResponder.panHandlers}
				style={[pan.getLayout(), {...styles.purpleBox, backgroundColor: colors.primary}]} 
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	purpleBox: {
		backgroundColor: '#75CEDB',
		width: 150,
		height: 150,
		borderRadius: 4,
	}
});