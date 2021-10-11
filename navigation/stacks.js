import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNav from './tabs';
import DeckView from '../screens/DeckView';
import CardsStack from '../navigation/cardsStack'

const Stack = createStackNavigator();

function TopStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="home" 
            component={TabNav} 
            options={{
                title:"Home",
                headerShown:false
            }}
        />
        <Stack.Screen 
            name="deck" 
            component={CardsStack} 
            options={{
                title: "Deck Details",
                headerShown:false
            }}
        />
    </Stack.Navigator>
  );
}

export default TopStack;