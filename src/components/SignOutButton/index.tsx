import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default function SignOutButton() {

    const navigation = useNavigation<NavigationProp<any>>();

    return (
        <RectButton onPress={() => navigation.navigate('Login')}>
            <Text>Sair</Text>
        </RectButton>
    );

}