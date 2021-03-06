import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack' ;

import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Produtos from './src/pages/Produtos';

const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer >
      <Stack.Navigator headerMode="none" initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} option={{title: 'Home'}}/>
        <Stack.Screen name="Produtos" component={Produtos} option={{title: 'Produtos'}}/>
        <Stack.Screen name="Login" component={Login} option={{title: 'Login'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;

