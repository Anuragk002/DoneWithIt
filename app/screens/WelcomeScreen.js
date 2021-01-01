import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text, } from 'react-native';
import TextApp from '../components/TextApp';
import AppButton from '../components/AppButton';


function WelcomeScreen(props) {
    return (
        <ImageBackground source={require("../assets/abc.jpg")} style={styles.image}>
            <View style={styles.logoContainer}>
                <Image source={require("../assets/iconx.png")} style={styles.icon}/>
                <Text>DoneWithIt Marketplace</Text>
            </View>
            <AppButton title="login" onPress={() => console.log("login clicked")} ></AppButton>
            <AppButton title="register" onPress={() => console.log("register clicked")} color="secondary"></AppButton>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    icon:{
        width:100,
        height:100,
    },
    image:{
        flex:1,
        justifyContent:"flex-end"
    },
    logoContainer:{
        alignItems:"center",
        position:"absolute",
        top:70,
        width:"100%"
    },
})

export default WelcomeScreen;