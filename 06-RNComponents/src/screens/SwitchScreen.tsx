import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreen = () => {
	
	const [state, setState] = useState({
		isActive: true,
		isHungry: false,
		isHappy: true
	})

	const onChange = (value: boolean, field: string) => {
		setState({
			...state,
			[field]: value
		})
	}

	const { isActive, isHungry, isHappy } = state;

	return (
		<View style={{
			marginHorizontal: 20
		}}>

			<HeaderTitle title="Switches" />

			<View style={styles.switchRow}>
				<Text style={styles.switchText}>IsActive</Text>
				<CustomSwitch isOn={isActive} onChangeFunction={(value) => onChange(value, 'isActive')}/>
			</View>

			<View style={styles.switchRow}>
				<Text style={styles.switchText}>IsHungry</Text>
				<CustomSwitch isOn={isHungry} onChangeFunction={(value) => onChange(value, 'isHungry')}/>
			</View>

			<View style={styles.switchRow}>
				<Text style={styles.switchText}>IsHappy</Text>
				<CustomSwitch isOn={isHappy} onChangeFunction={(value) => onChange(value, 'isHappy')}/>
			</View>
			
			<Text style={styles.switchText}>
				{JSON.stringify(state, null, 5)}
			</Text>

		</View>
	)
}

const styles = StyleSheet.create({
	switchText: {
		fontSize: 25
	},
	switchRow:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 10
	}
});
