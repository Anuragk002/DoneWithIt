import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Screen from './Screen';
import colors from '../config/colors';


function AppTextInput({icon,...otherProps}) {
    return (
        <Screen>
            <View style={styles.container}>
                {icon && <MaterialIcons name={icon} size={25} color={colors.medium} style={styles.icon}  />}
                <TextInput placeholder="First Name" style={styles.text} {...otherProps} />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        borderRadius:25,
        flexDirection:"row",
        padding:10,
        margin:10,
        alignItems:"center",
        width:'100%',
    },
    icon:{
        marginLeft:10,
    },
    text:{
        color:colors.dark,
        marginLeft:15,
    }
})

export default AppTextInput;

