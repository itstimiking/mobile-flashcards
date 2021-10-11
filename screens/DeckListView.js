import React,{useEffect, useState} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useDeckContext} from '../context/deckContext';    


const DeckListView = ({navigation}) => {

    const {decks} = useDeckContext();

    return (
        <View style={styles.container}>
          {
            decks && Object.keys(decks).map(deck=> {

                return (
                    <TouchableOpacity
                        style={styles.deck}
                        onPress={()=>navigation.navigate("deck",{screen:"Deck",params:{id:deck}})}
                        key={deck}
                    > 
                        <Text>{decks[deck].title} </Text>

                    </TouchableOpacity>
                )

            })
          }
        </View>
    );
}



export default DeckListView;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    deck:{
        height: 50,
        width: "100%",
        paddingHorizontal:20,
        paddingVertical:10,
        marginBottom:20,
        borderBottomWidth: 1,
    }
});