import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/components/home';
import DrawerContent from './src/components/drawer-content';
import Appointments from './src/components/appointments';
import Header from './src/components/header';

const App = () => {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Header />
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Appointments' component={Appointments} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App
