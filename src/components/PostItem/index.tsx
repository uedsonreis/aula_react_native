import React from 'react';
import { Text, View } from 'react-native';

interface Props {
    description: string;
};

export default function PostItem(props: Props) {

    return (
        <View style={{
            marginVertical: 5, paddingHorizontal: 10,
            borderBottomWidth: 1, borderColor: 'gray',
            paddingBottom: 10,
        }}>
            <Text style={{ fontSize: 18 }}>{ props.description }</Text>
        </View>
    );

}