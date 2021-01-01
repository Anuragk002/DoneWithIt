import React from 'react';
import { Text , StyleSheet} from 'react-native';

function TextApp({children, style}) {
    return (
        <Text style={ [styles.xx , style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    xx:{
        fontFamily: "Roboto",
        fontSize:30,
        fontWeight:"600",
    }
})

export default TextApp;