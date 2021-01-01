import React, {useState} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import UserDetails from '../components/ListItem';
import Screen from '../components/Screen';
import Seperator from '../components/Seperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListingDetailsScreen from './ListingDetailsScreen';
import ListItem from '../components/ListItem';

const initialMessages=[
    {
        id:1,
        title:'T1',
        description:'D1',
        image:require('../assets/anurag.jpg')
    },
    {
        id:2,
        title:'T2',
        description:'D2',
        image:require('../assets/anurag.jpg')
    }
]


function MessagesScreen(props) {
    const [messages,setMessages] = useState(initialMessages);
    const [ refreshing , setRefreshing] = useState(false);

    const handleDelete = message =>{
        setMessages(messages.filter(m=> m.id !== message.id));
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item})=> 
                    <ListItem
                        name={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={()=> console.log('selected',item)}
                        renderRightActions={()=>  <ListItemDeleteAction onPress={ ()=>handleDelete(item) } /> }
                    />
                    }
                ItemSeparatorComponent={Seperator}
                refreshing={refreshing}
                onRefresh={()=> {
                    setMessages([
                        {
                            id:2,
                            title:'T2',
                            description:'D2',
                            image:require('../assets/anurag.jpg')
                        }
                    ])}
                }
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    
})

export default MessagesScreen;