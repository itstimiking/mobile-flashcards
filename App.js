import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import DeckListView from './screens/DeckListView';
import NewDeck from './screens/NewDeck';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {FontAwesome, Feather} from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
        <NavigationContainer>
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
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
