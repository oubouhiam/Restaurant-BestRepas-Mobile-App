import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/home';
import Cart from './screens/Cart';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const RootTab = () => {

  return(
   
    
<Tab.Navigator>
        <Tab.Screen name="Home" 
        component={Home}
        options={{
          tabBarIcon: () => (
            <AntDesign name="home" size={24} color="black" />
          ),
        }} />
      </Tab.Navigator>
 
  )

}


export default function App() {

  return (
  
    <NavigationContainer>
     
        
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={RootTab} options={{ title: 'Home' }} />
        <Stack.Screen name="Cart" component={Cart} />
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