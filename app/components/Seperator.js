import React from 'react';
import { View , StyleSheet} from 'react-native';
import colors from '../config/colors';

function Seperator(props) {
    return (
        <View style={styles.line}/>
    );
}

const styles = StyleSheet.create({
    line:{
        width:'100%',
        backgroundColor: colors.light,
        height:3,
    }
})

export default Seperator;