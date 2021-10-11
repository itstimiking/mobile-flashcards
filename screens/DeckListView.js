import React,{useEffect, useRef} from 'react';
import { Text, View, StyleSheet, FlatList, Animated, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useDeckContext} from '../context/deckContext';    


const DeckListView = ({navigation}) => {

    const {decks} = useDeckContext();
    const decksArray = Object.entries(decks);

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            duration: 500,
            useNativeDriver:true
          }
        ).start();
    }, [fadeAnim])

    const goToDeck = (deck) =>{
        navigation.navigate("deck",{screen:"Deck",params:{id:deck[0]}})
    }

    const Item = ({deck}) => {
        return (
            <TouchableOpacity
                style={styles.touch}
                onPress={()=>goToDeck(deck)}
                key={deck[0]}
            > 
                <Animated.Text
                    style={[styles.deck, {opacity: fadeAnim}]}
                >
                    {deck[1].title} 
                </Animated.Text>
    
            </TouchableOpacity>
        )
    }

    const renderItem = ({item}) => {
        return <Item deck={item} />
    }

    return (
        <View style={styles.container}>
        
            <FlatList 
                data={decksArray}
                renderItem={renderItem}
                keyExtractor={item=>item[0]}
            />

        </View>
    );
}



export default DeckListView;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal:20,
        paddingTop:30
    },
    deck:{
        height: 50,
        width: "100%",
        paddingHorizontal:20,
        paddingVertical:10,
    },
    touch:{
        borderBottomWidth: 1,
        marginBottom:20,
    }
});