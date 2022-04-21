import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './pages/SignIn';
import HomePage from './pages/Home';

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login" component={SignIn}
                />
                <Stack.Screen
                    name="Home" component={HomePage}
                    options={{ headerLeft: () => <></> }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}