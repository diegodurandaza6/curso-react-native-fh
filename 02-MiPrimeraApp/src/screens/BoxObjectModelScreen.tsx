import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				Box Object Model
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor:'brown'
	},
	title:{
		paddingHorizontal:30,
		paddingVertical:50,
		fontSize:20,
		marginHorizontal:20,
		//width:150,
		borderWidth:10,
		//backgroundColor:'green'
	}
});