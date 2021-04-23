import React from 'react';
import {StyleSheet,TouchableOpacity, Text, View} from 'react-native';

export default function FlatButton({text, onPress}){

    return(

        <TouchableOpacity onPress={onPress}>

            <View style={ styles.button}>

                <Text style={ styles.buttonText}> {text} </Text>

            </View>

         </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    button:{
        borderRadius:15,
        paddingVertical:15,
        paddingHorizontal:10,
        backgroundColor:"#CC8F37",
        width:'30%',
        left: '35%',
        top: 120,
        height: 40,
    },
    buttonText:{
        color:"black",
        textAlign:'center',
        marginBottom: 10,
    }
})