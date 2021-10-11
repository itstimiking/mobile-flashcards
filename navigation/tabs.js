import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome, Feather} from '@expo/vector-icons';
import DeckListView from '../screens/DeckListView';
import NewDeck from '../screens/NewDeck';

const Tab = createBottomTabNavigator();

const TabNav = () =>{
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Decks List') {
                    iconName = focused
                    ? 'files-o'
                    : 'files-o';
                    
                    return <FontAwesome name={iconName} size={size} color={color} />;
                } else if (route.name === 'Add New Deck') {
                    iconName = focused ? 'file-plus' : 'file-plus';

                    return <Feather name={iconName} size={size} color={color} />;
                }
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Decks List" component={DeckListView} />
            <Tab.Screen name="Add New Deck" component={NewDeck} />
        </Tab.Navigator>
    )
}

export default TabNav;