import React from 'react';
import { View , StyleSheet, Image} from 'react-native';
import colors from '../config/colors';
import TextApp from './TextApp';

function Card({title,subTitle,image}) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image}/>
            <View style={styles.detailsContainer}>
                <TextApp style={styles.title}>{title}</TextApp>
                <TextApp style={styles.subTitle}>{subTitle}</TextApp>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius:15,   
        backgroundColor:colors.white,
        width:'100%',
        overflow:'hidden',
        marginTop:25,   

    },
    detailsContainer:{
        padding:10,
        paddingLeft:15
    },
    image:{
        width:'100%',
        height:200,
        },
    title:{
        marginBottom:5,
        fontSize:25,
    },
    subTitle:{
        fontSize:20,
        color:colors.secondary,
        fontWeight:"bold",
    },
})

export default Card;