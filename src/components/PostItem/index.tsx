import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

interface Props {
    description: string;
};

export default function PostItem(props: Props) {

    return (
        <View style={styles.item}>
            <Text style={{ fontSize: 18 }}>{ props.description }</Text>
        </View>
    );

}