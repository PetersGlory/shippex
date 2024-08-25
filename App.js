import React, {useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './app/config/redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './app/screens/SplashScreen';
import LoginScreen from './app/screens/auth/LoginScreen';
import ShippexOnboardScreen from './app/screens/OnboardScreen';
import ShipmentScreen from './app/screens/HomeScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
      <Stack.Navigator
        initialRouteName='SplashScreen'
        screenOptions={{
          headerShown:false,
        }}>

          <Stack.Screen name='SplashScreen' component={SplashScreen} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='OnboardSreen' component={ShippexOnboardScreen} />
          <Stack.Screen name='HomeScreen' component={ShipmentScreen} />
          
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
