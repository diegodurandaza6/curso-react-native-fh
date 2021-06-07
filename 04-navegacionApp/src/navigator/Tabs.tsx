import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { color } from 'react-native-reanimated';

export const Tabs = () => {
	return Platform.OS === 'ios'
	? <TabsIOS/>
	: <TabsAndroid/>
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
	 	sceneAnimationEnabled={ true }
		 barStyle={{
			 backgroundColor: colores.primary
		 }}
		 screenOptions={
			({ route }) => ({
				tabBarIcon: ({ color }) => {
					let iconName: string;
					switch (route.name) {
						case 'Tab1Screen':
							iconName = 'T1'
							break;
						case 'Tab2Screen':
							iconName = 'T2'
							break;
						case 'StackNavigator':
							iconName = 'TSN'
							break;
						default:
							iconName = 'NO-CONFIG'
							break;
					}
					return <Text style={{ color }}>{iconName}</Text>
				}
			})
		}
	 >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
		<BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={Tab2Screen} />
		<BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
	return (
		<BottomTabIOS.Navigator
			sceneContainerStyle={{
				backgroundColor: 'white'
			}}
			tabBarOptions={{
				activeTintColor: colores.primary,
				style: {
					borderTopColor: colores.primary,
					borderTopWidth: 0,
					elevation: 0,
				},
				labelStyle: {
					fontSize: 15
				}
			}}
			screenOptions={
				({ route }) => ({
					tabBarIcon: ({ color, focused, size }) => {
						let iconName: string;
						switch (route.name) {
							case 'Tab1Screen':
								iconName = 'T1'
								break;
							case 'Tab2Screen':
								iconName = 'T2'
								break;
							case 'StackNavigator':
								iconName = 'TSN'
								break;
							default:
								iconName = 'NO-CONFIG'
								break;
						}
						return <Text style={{ color }}>{iconName}</Text>
					}
				})
			}
		>
			{/* <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={Tab1Screen} /> */}
			<BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
			<BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={Tab2Screen} />
			<BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
		</BottomTabIOS.Navigator>
	);
}