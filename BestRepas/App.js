import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import Plats from './screens/platsDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
              <Stack.Navigator
              initialRoute='Home'
              screenOption={{
                headerShown: false
              }}
              >
                  <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen name="Plats" component={Plats} />
              </Stack.Navigator>

        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});