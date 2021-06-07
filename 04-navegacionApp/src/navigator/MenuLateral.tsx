import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

// Configuracion rapida de componente de navegacion como un stack screen navigator
// const Stack = createStackNavigator();
// const SettingsStackScreen = () => {
// 	return (
// 		<Stack.Navigator>
// 			<Stack.Screen
// 				name='SettingsScreen'
// 				component={SettingsScreen}
// 			/>
// 		</Stack.Navigator>
// 	)
// }

export const MenuLateral = () => {

	const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
	 	drawerType={ width >= 768 ? 'permanent' : 'front' }
		drawerContent={ (props) => <MenuInterno { ...props }/> }
		drawerPosition='left'
	 >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {
	return (
		<DrawerContentScrollView>
			{/* Partes del avatar */}
			<View style={ styles.avatarContainer }>
				<Image 
					source={{
						uri: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif'
					}}
					style={ styles.avatar }
				/>
			</View>

			{/* Opciones de menú */}
			<View style={styles.menuContainer}>
					<TouchableOpacity 
						style={ styles.menuBoton }
						onPress={ () => navigation.navigate('Tabs') }
					>
						<Icon name="navigate-circle-outline" size={20}/>
						<Text style={ styles.menuTexto }> Navegación</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						style={ styles.menuBoton }
						onPress={ () => navigation.navigate('SettingScreen') }
					>
						<Icon name="settings-outline" size={20}/>
						<Text style={ styles.menuTexto }> Ajustes</Text>
					</TouchableOpacity>
			</View>
		</DrawerContentScrollView>
	)
}