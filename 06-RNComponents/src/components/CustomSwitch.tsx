import React, { useContext, useState } from 'react'
import { Platform, Switch } from 'react-native'
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
	isOn: boolean;
	onChangeFunction: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChangeFunction }: Props) => {

	const [isEnabled, setIsEnabled] = useState(isOn);
	const toggleSwitch = () => {
		setIsEnabled(!isEnabled)
		onChangeFunction(!isEnabled);
	};
	const { theme: { colors, secondary } } = useContext(ThemeContext);

	return (
		<Switch
			trackColor={{ false: secondary, true: colors.primary }}
			thumbColor={(Platform.OS === 'android') ? colors.primary : ""}
			ios_backgroundColor="#3e3e3e"
			onValueChange={toggleSwitch}
			value={isEnabled}
		/>
	)
}
