import React from 'react';
import { View,StyleSheet,Image ,SafeAreaView } from 'react-native';
import colors from '../config/colors';
import { MaterialIcons } from '@expo/vector-icons';

function ViewImageScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={ styles.closeicon }/>
            <View />
            <MaterialIcons name="delete" size={30} color="#fff" style={ styles.deleteicon }/>
            <MaterialIcons name="close" size={30} color="#fff" style={ styles.closeicon }/>
            <Image source={require("../assets/1.jpg")} resizeMode="contain" style={styles.image}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.black,
    },
    image:{
        width:"100%",
        height:"100%",
        top:40,
    },
    closeicon:{
        position:"absolute",
        left:30,
        top:70
    },
    deleteicon:{
        position:"absolute",
        right:30,
        top:70
    }  
})

export default ViewImageScreen;