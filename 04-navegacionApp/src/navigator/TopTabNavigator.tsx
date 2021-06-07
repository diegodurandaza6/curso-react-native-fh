import React from 'react';
import { LogBox, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { colores } from '../theme/appTheme';

// Esto es para ocultar los warnings de un componente en particular
LogBox.ignoreLogs(['Sending'])
// -----------------

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

	const { top: paddingTop } = useSafeAreaInsets()

	return (
		<Tab.Navigator
			style={{ paddingTop }}
			sceneContainerStyle={{
				backgroundColor: 'white'
			}}
			tabBarOptions={{
				pressColor: colores.primary,
				showIcon: true,
				indicatorStyle: {
					backgroundColor: colores.primary
				},
				style: {
					shadowColor: 'transparent',
					elevation: 0,
				},
			}}
			screenOptions={
				({ route }) => ({
					tabBarIcon: ({ color }) => {
						let iconName: string;
						switch (route.name) {
							case 'Chat':
								iconName = 'chatbox-ellipses-outline'
								break;
							case 'Contacts':
								iconName = 'people-outline'
								break;
							case 'Albums':
								iconName = 'albums-outline'
								break;
							default:
								iconName = 'bug-outline'
								break;
						}
						return <Icon name={ iconName } color={color}/>
					}
				})
			}
		>
			<Tab.Screen name="Chat" component={ChatScreen} />
			<Tab.Screen name="Contacts" component={ContactsScreen} />
			<Tab.Screen name="Albums" component={AlbumsScreen} />
		</Tab.Navigator>
	);
}