import React,{useState} from 'react';
import { Text,TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import {saveDeckTitle} from '../utils/helpers';

const NewDeck = () => {

    const [deck, setDeck] = useState("");

    const handleChange = (e) =>{
        setDeck(e)
    }

    const addDeck = () => {
        saveDeckTitle(deck)
        setDeck("")
    }

    return (
        <View styles={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={handleChange}
                value={deck}
            />
            <TouchableOpacity
                onPress={addDeck}
            >
                <Text>Add Deck</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NewDeck;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
        width:"80%",
        height:"20dp"
    }
});