import React from 'react';
import { View ,StyleSheet } from 'react-native';
import colors from '../config/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDeleteAction({ onPress }) {
    return (
        
            <View style={styles.background}>
                <TouchableWithoutFeedback onPress={onPress}>
                    <MaterialIcons name="delete" size={24} color={colors.white} />
                </TouchableWithoutFeedback>
            </View>
        
    );
}
const styles = StyleSheet.create({
    background:{
        backgroundColor:colors.danger,
        width:90,
        justifyContent:"center",
        alignItems:'center',
    },
})

export default ListItemDeleteAction;