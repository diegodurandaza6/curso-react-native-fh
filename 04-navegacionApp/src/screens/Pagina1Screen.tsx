import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer';
// import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ({ navigation }: Props) => {

	const { width } = useWindowDimensions();

	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				width >= 768 ? 
				'' : 
				(<Button 
					title='Menú'
					onPress={() => navigation.toggleDrawer() }
				/>)
			)
		})
	}, )

	return (
		<View style={ styles.globalMargin }>
			<Text style={ styles.title}>Pagina 1 Screen</Text>
			<Button 
				title="Ir página 2"
				onPress={ () => navigation.navigate('Pagina2Screen') }
			/>
			{/* <Button 
				title="Ir persona"
				onPress={ () => navigation.navigate('PersonaScreen') }
			/> */}
			<Text>Navegar con argumentos</Text>

			<View style={{flexDirection: 'row'}}>
				<TouchableOpacity 
					onPress={ () => navigation.navigate('PersonaScreen', {
						id: 1,
						nombre: 'Pedro'
					}) }
					style={{
						...styles.botonGrande,
						backgroundColor: '#5856D6'
					}}
				>
					<Text style={ styles.botonGRandeTexto }>Pedro</Text>
				</TouchableOpacity>

				<TouchableOpacity 
					onPress={ () => navigation.navigate('PersonaScreen', {
						id: 2,
						nombre: 'Paula Elena'
					}) }
					style={{
						...styles.botonGrande,
						backgroundColor: '#FF9427'
					}}
				>
					<Text style={ styles.botonGRandeTexto }>Paula Elena</Text>
				</TouchableOpacity>
			</View>
			
		</View>
	)
}
