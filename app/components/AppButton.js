import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function AppButton({title,onPress, color='primary'}) {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <View style={[styles.button, {backgroundColor:colors[color] }]} >
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    buttonContainer:{
        width:'100%',
        padding:20,
        paddingTop:0
    },
    button:{
        backgroundColor: colors.primary,
        borderRadius: 25,
        width:'100%',
        height:50,
        justifyContent:"center",
        alignItems:'center'
    },
    text:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:15,
        color:"#fff",
        textTransform:"uppercase"
    }
})


export default AppButton;