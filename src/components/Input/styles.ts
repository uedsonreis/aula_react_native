import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({

    label: {
        fontSize: 22,
        width: Dimensions.get('screen').width - 40,
    },

    input: {
        padding: 5,
        fontSize: 28,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        width: Dimensions.get('screen').width - 40,
    },
});