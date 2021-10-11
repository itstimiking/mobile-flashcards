import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import TopStack from './navigation/stacks';


import {DeckContextProvider} from './context/deckContext'


export default function App() {
  return (
        <DeckContextProvider>
            <NavigationContainer>
                <TopStack />
            </NavigationContainer>
            <StatusBar style="light" />
        </DeckContextProvider>
  );
}

