import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef, isMountedRef} from './index';
import React from 'react';
// Screens Objects
import Login from '../views/Login';
import LoginPath from '../views/LoginPath';

const Stack = createStackNavigator();

export default function RootNavigation(props) {
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none" initialRouteName={'LOGIN'}>
        <Stack.Screen name={'LOGIN'} component={Login} />
        <Stack.Screen name={'LOGINPATH'} component={LoginPath} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
