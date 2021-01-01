import React from 'react';
import { View ,StyleSheet, Image } from 'react-native';
import TextApp from '../components/TextApp';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen({image,title,price}) {
    return (
        <View>
            <Image source={image} style={styles.image}/>
            <View style={styles.detailsContainer}>
                <TextApp style={styles.title}>{title}</TextApp>
                <TextApp style={styles.price}>{price}</TextApp>
            </View>
            <ListItem
                name="Anurag Kushwaha"
                subTitle="10 listings"
                image={require('../assets/anurag.jpg')}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:300,
    },
    detailsContainer:{
        padding:10,
        margin:10,
    },
    title:{
        marginBottom:10,
        fontSize:25,
    },
    price:{
        fontSize:20,
        color:colors.secondary,
        fontWeight:"bold",
    },
})

export default ListingDetailsScreen;