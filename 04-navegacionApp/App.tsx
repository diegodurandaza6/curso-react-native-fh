import 'react-native-gesture-handler';

import * as React from 'react';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';
// import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
		 <AppState>
			{/* <StackNavigator /> */}
			{/* <MenuLateralBasico /> */}
			<MenuLateral />
			{/* <Tabs /> */}
		 </AppState>
	 </NavigationContainer>
  );
}

const AppState = ({ children }: any) => {
	return(
		<AuthProvider>
			{ children }
		</AuthProvider>
	);
}

export default App;