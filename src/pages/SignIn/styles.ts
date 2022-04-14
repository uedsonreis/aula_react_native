import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },

    button: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#3e79b5',
        backgroundColor: '#3e79b5',
        width: Dimensions.get('screen').width - 40,
    },

    buttonText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },

});