import React,{useEffect} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import {getDecks} from '../utils/helpers';


const DeckListView = () => {

    useEffect(()=>{
        getDecks()
    },[])

    return (
        <View>
            <Text>DeckListView</Text>
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
});