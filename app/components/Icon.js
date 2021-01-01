import React from 'react';
import { View ,StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


function Icon({name,size=40,iconColor="white",backgroundColor="black"}) {
    return (
        <View style={{
            width:size,
            height:size,
            borderRadius: size/2,
            backgroundColor:backgroundColor,
            alignItems:"center",
            justifyContent:'center',
        }
        }>
            <MaterialIcons name={name} size={size*0.5} color={iconColor} />
        </View>
    );
}

export default Icon;