import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native';

export const TareaScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.cajaMorada}></View>
			<View style={styles.cajaNaranja}></View>
			<View style={styles.cajaAzul}></View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#28425B',
		flex:1,
		flexDirection: 'column',
		justifyContent:'center'
	},
	cajaMorada: {
		width: 100,
		height: 100,
		// flex: 1,
		borderWidth: 10,
		borderColor: 'white',
		backgroundColor: '#5856D6',
		alignSelf:'flex-end'
	},
	cajaNaranja: {
		width: 100,
		height: 100,
		// flex: 1,
		borderWidth: 10,
		borderColor: 'white',
		backgroundColor: '#F0A23B',
		// left:100
		alignSelf:'flex-start',
	},
	cajaAzul: {
		width: 100,
		height: 100,
		// flex: 1,
		borderWidth: 10,
		borderColor: 'white',
		backgroundColor: '#28C4D9',
		alignSelf:'center'
	},
});