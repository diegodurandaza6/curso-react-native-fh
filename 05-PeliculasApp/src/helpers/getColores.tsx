import ImageColors from "react-native-image-colors"

export const getImageColors = async (uri: string) => {
	const colors = await ImageColors.getColors(uri, {})
	// console.log({colors})

	let primary;
	let secondary;

	if (colors.platform === 'android') {
		// Access android properties
		primary = colors.dominant;
		secondary = colors.average;
	 } else {
		// Access iOS properties
		primary = colors.primary;
		secondary = colors.secondary;
	 }

	 return [primary, secondary]
}