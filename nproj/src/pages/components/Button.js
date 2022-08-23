import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Button({onPress}){
    return(
        <TouchableOpacity style={styles.button}
                           onPress={onPress}>
            <Text style={styles.buttonText}> Salvar </Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    button: {
        backgroundColor: 'red',
        alignItems: 'center',
        marginTop:10,
        marginLeft:30,
        paddingHorizontal: 100,
        paddingVetical:50,
    },

    buttonText: {
        color: 'yellow',
        fontSize: 17,
        fontWeight: 'bold'
    }


})