import React from 'react';
import { TouchableOpacity,StyleSheet } from 'react-native';
import TextApp from './TextApp';

function PickerItem({lable,onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.picker}>
            <TextApp>{lable}</TextApp>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    picker:{
        padding:15,
    }
})

export default PickerItem;