import { TextInput, Text, View } from "react-native";

import { PropsType } from './types';
import styles from './styles';

export default function Input(props: PropsType) {
    return (
        <View>
            <Text style={styles.label}>{props.label}:</Text>
            <TextInput
                style={styles.input}
                onChangeText={props.onChange}
                { ...props.inputProps }
            />
        </View>
    );
}