import React from 'react';
import axios from 'axios';
import { Alert, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import styles from './styles';
import { userStorage } from '../../storage';

const URL = 'https://social-network-for-class.herokuapp.com/auth/login';

export default function SignIn() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    async function signIn() {
        const user = { email, password };
        try {
            const response = await axios.post(URL, user);
            const token = response.data;

            await userStorage.save({ email, token });
            navigation.navigate('Home'); // ('Home', { token });

        } catch (error) {
            Alert.alert('E-mail ou senha está inválido(a)!');
        }
    }

    return (
        <View style={styles.container}>
            
            <Input
                label={'E-mail'}
                onChange={setEmail}
                inputProps={{ keyboardType: 'email-address' }}
            />

            <Input
                label={'Senha'}
                onChange={setPassword}
                inputProps={{ secureTextEntry: true }}
            />

            <RectButton style={styles.button} onPress={signIn}>
                <Text style={styles.buttonText} >Entrar</Text>
            </RectButton>
        </View>
    );
}
