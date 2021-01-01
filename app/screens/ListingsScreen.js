import React from 'react';
import { FlatList, Image ,StyleSheet} from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

function ListingsScreen(props) {

    const Listings=[
        {
            id:1,
            title:"Red Jacket for sale ",
            subTitle:"100",
            image:require("../assets/jacket.jpg")
        },
        {
            id:2,
            title:"Couch for sale ",
            subTitle:"500",
            image:require("../assets/couch.jpg")
        },
    ]

    return (
        <Screen style={styles.screen }>
            <FlatList
                data={Listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item})=>
                    <Card
                        title={item.title}
                        subTitle={"$"+item.subTitle}
                        image={item.image}
                    /> }
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:colors.light
    }
})

export default ListingsScreen;