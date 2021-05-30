import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

	const [contador, setContador] = useState(0)

	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				Contador: {contador}
			</Text>
			{/* <Button 
				title = "Click"
				onPress = { () => {
					setContador(contador + 1)
				}}
			/> */}
			<Fab 
				title='-1'
				position='bl'
				onPress={() => setContador(contador - 1)}
			/>
			<Fab 
				title='+1'
				position='br'
				onPress={() => setContador(contador + 1)}
			/>
			{/* <TouchableOpacity
				onPress={() => setContador(contador + 1) }
				style={ styles.fabLocationBR }
			>
				<View style={ styles.fab }>
					<Text style={ styles.fabText }>+1</Text>
				</View>
			</TouchableOpacity> */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	title: {
		textAlign: 'center',
		fontSize: 40,
		top: -15,
	},
});
