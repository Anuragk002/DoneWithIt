import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView,TouchableHighlight, Button, Dimensions } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';

import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories =[
  { lable:'Furniture' , value:1 },
  { lable:'Clothing' , value:2 },
  { lable:'Cameras' , value:3 },
];

export default function App() {
  const [category,setCategory]=useState();

  console.log("app executed");

  return( <Screen>
    <AppPicker
      selectedItem={category}
      onSelectItem={item=>setCategory(item)}
      icon="apps" placeholder="Category" items={categories}/>
    <AppTextInput icon="email" placeholder="Email"/>
  </Screen>)
  
};
