import React,{useEffect, useState} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import {getDecks} from '../utils/helpers';


const DeckListView = () => {

    const [decks, setDecks] = useState({})

    useEffect(()=>{       
        getDecks()
        .then(data=>setDecks(data))  
    },[])


    return (
        <View style={styles.container}>
          {
            decks && Object.keys(decks).map(deck=> <Text key={deck}> {decks[deck].title} </Text>)
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
    }
});