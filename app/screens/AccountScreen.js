import React from 'react';
import { View,FlatList,StyleSheet } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import Seperator from '../components/Seperator';
import colors from '../config/colors';

function AccountScreen(props) {
    const menuItems=[
        {
            title:"My Listings",
            icon:{
                name:"format-list-bulleted",
                backgroundColor:colors.primary,
            }
        },
        {
            title:"My Messages",
            icon:{
                name:"email",
                backgroundColor:colors.secondary,
            }
        } 
    ]

    return (
        <Screen style={{backgroundColor:colors.light}}>
            <View style={styles.container}>
                <ListItem 
                    name="Anurag Kushwaha"
                    subTitle="anuragkushwaha656@gmail.com"
                    image={require("../assets/anurag.jpg")}    
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem=>menuItem.title}
                    renderItem={({item})=>
                        <ListItem
                            name={item.title}
                            imageComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                            }
                        /> 
                    }
                    ItemSeparatorComponent={Seperator}
                />                
            </View>
            <View style={styles.container}>
                <ListItem 
                    name="Log Out"
                    imageComponent={
                        <Icon name="logout" backgroundColor="#ffe66d"/>
                    }  
                />
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        marginTop:40
    }
})

export default AccountScreen;