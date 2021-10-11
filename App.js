import React,{useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import TopStack from './navigation/stacks';

import {setLocalNotification} from './utils/helpers'

import {DeckContextProvider} from './context/deckContext'


export default function App() {

  useEffect(()=>{
    setLocalNotification()
  },[])
  return (
        <DeckContextProvider>
            <NavigationContainer>
                <TopStack />
            </NavigationContainer>
            <StatusBar style="light" />
        </DeckContextProvider>
  );
}

