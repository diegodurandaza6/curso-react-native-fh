import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/ThemeContext';

export const TextInputScreen = () => {

	const { theme:{colors} } = useContext(ThemeContext);

	const {form, onChange, isSuscribe} = useForm({
		name: '',
		email: '',
		phone: '',
		isSuscribe: false
	})

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<ScrollView>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>

					<View style={styles.globalMargin}>
						<HeaderTitle title="TextInput" />

						<TextInput
							style={{...stylesScreen.inputStyle, borderColor: colors.text, color: colors.text}}
							placeholderTextColor={colors. text}
							placeholder="Ingrese su nombre"
							autoCorrect={false}
							autoCapitalize="words"
							onChangeText={(value) => onChange(value, 'name')}
						/>
						<TextInput
							style={{...stylesScreen.inputStyle, borderColor: colors.text, color: colors.text}}
							placeholderTextColor={colors. text}
							placeholder="Ingrese su email"
							autoCorrect={false}
							autoCapitalize="none"
							onChangeText={(value) => onChange(value, 'email')}
							keyboardType="email-address"
							keyboardAppearance="dark"
						/>

						<View style={stylesScreen.switchRow}>
							<Text style={stylesScreen.switchText}>Suscribirme</Text>
							<CustomSwitch isOn={isSuscribe} onChangeFunction={(value) => onChange(value, 'isSuscribe')} />
						</View>

						<HeaderTitle title={JSON.stringify(form, null, 3)} />
						<HeaderTitle title={JSON.stringify(form, null, 3)} />
						<TextInput
							style={{...stylesScreen.inputStyle, borderColor: colors.text, color: colors.text}}
							placeholderTextColor={colors. text}
							placeholder="Ingrese su teléfono"
							onChangeText={(value) => onChange(value, 'phone')}
							keyboardType="number-pad"
						/>
						<View style={{ height: 100 }}></View>
					</View>
				</TouchableWithoutFeedback>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

const stylesScreen = StyleSheet.create({
	inputStyle: {
		borderWidth: 2,
		borderColor: 'rgba(0,0,0,0.3)',
		// opacity: 0.2,
		height: 50,
		paddingHorizontal: 10,
		borderRadius: 10,
		marginVertical: 10,
		color: 'black'
	},
	switchText: {
		fontSize: 25
	},
	switchRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 10
	}
});