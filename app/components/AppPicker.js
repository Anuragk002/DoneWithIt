import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Screen from './Screen';
import colors from '../config/colors';
import TextApp from './TextApp';
import AppTextInput from './AppTextInput';
import PickerItem from './PickerItem';


function AppPicker({icon,items,placeholder,selectedItem,onSelectItem}) {
    const [modalVisible,setModalVisible]=useState(false);

    return (
        <>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
            <View style={styles.container}>
                {icon && <MaterialIcons name={icon} size={25} color={colors.medium} style={styles.icon}  />}
                <TextApp style={styles.text}>{selectedItem?selectedItem.lable:placeholder}</TextApp>
                <MaterialIcons name="chevron-left" size={25} color={colors.medium} />
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Button title="Close" onPress={()=> setModalVisible(false)}/>
                <FlatList
                    data={items}
                    keyExtractor={item=> item.value.toString()}
                    renderItem={({item})=>
                    <PickerItem
                        lable={item.lable}
                        onPress={()=>{
                            setModalVisible(false);
                            onSelectItem(item);
                        }}
                    />}
                />
        </Modal>
        </>
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
        width:'96%',
    },
    icon:{
        marginLeft:10,
    },
    text:{
        color:colors.dark,
        margin:10,
        flex:1,
        fontSize:20
    }
})

export default AppPicker;

