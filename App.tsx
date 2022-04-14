import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import SignIn from './src/pages/SignIn';

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <SignIn />
        </View>
    );
}