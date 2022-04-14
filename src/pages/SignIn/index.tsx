import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Input from '../../components/Input';

import styles from './styles';

export default function SignIn() {

    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    function signIn() {
        const user = { email, password };
        alert(JSON.stringify(user));
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
