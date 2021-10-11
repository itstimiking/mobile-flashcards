import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DeckView from '../screens/DeckView';
import QuizeView from '../screens/QuizeView';
import NewCard from '../screens/NewCardView';

const Stack = createStackNavigator();

function CardsStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="Deck" 
            component={DeckView} 
            options={({ route }) =>{
                const {id} = route.params
                return { title: id }
            }}
        />
        <Stack.Screen 
            name="newcard" 
            component={NewCard} 
            options={({ route }) =>{
                const {id} = route.params
                return { title: id }
            }}
        />
        <Stack.Screen 
            name="quize" 
            component={QuizeView} 
            options={{
                title: "Quize"
            }}
        />
    </Stack.Navigator>
  );
}

export default CardsStack;