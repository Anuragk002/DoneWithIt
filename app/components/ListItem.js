import React from 'react';
import { View,StyleSheet,Image, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import TextApp from './TextApp';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({name,subTitle,image,imageComponent,onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
                <View style={styles.ListItemContainer}>
                    {imageComponent}
                        {image && <Image source={image} style={styles.image}/>}
                        <View style={styles.textContainer}>
                            <TextApp style={styles.name}>{name}</TextApp>
                            {subTitle && <TextApp style={styles.subTitle}>{subTitle}</TextApp>}   
                        </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    ListItemContainer:{
        flexDirection:"row",
        padding:10,
        alignItems:'center',
        backgroundColor:"#fff",
    },
    textContainer:{
        marginLeft:10,
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10,
    },
    name:{
        fontSize:20,
    },
    subTitle:{
        color:colors.medium,
        fontWeight:"300",
        fontSize:15,
    }
})

export default ListItem;