import 'react-native-gesture-handler';

import * as React from 'react';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';

const App = () => {
  return (
    <NavigationContainer>
		 {/* <StackNavigator /> */}
		 <MenuLateralBasico />
	 </NavigationContainer>
  );
}

export default App;