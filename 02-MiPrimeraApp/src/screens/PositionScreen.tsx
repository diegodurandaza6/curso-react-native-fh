import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.cajaVerde} />
			<View style={styles.cajaMorada} />
			<View style={styles.cajaNaranja} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		 flex: 1,
		width: '100%',
		height: '50%',
		backgroundColor: '#28C4D9',
		// justifyContent: 'center',
		// alignItems: 'center'
	},
	cajaMorada: {
		width: 100,
		height: 100,
		backgroundColor: '#5856D6',
		borderWidth: 10,
		borderColor: 'white',
		position: 'absolute',
		right: 0
	},
	cajaNaranja: {
		width: 100,
		height: 100,
		backgroundColor: '#F0A23B',
		borderWidth: 10,
		borderColor: 'white',
		right: 0,
		bottom: 0,
		position: 'absolute'
	},
	cajaVerde: {
		// width: 100,
		// height: 100,
		backgroundColor: 'green',
		borderWidth: 10,
		borderColor: 'white',
		// left: 0,
		// bottom: 0,
		// top: 0,
		// right: 0,
		// position: 'absolute'
		...StyleSheet.absoluteFillObject
	}
});
