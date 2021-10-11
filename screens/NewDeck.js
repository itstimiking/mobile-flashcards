import React,{useState} from 'react';
import { 
    Text,TextInput, 
    StyleSheet, 
    TouchableOpacity, 
    Alert, 
    KeyboardAvoidingView
} from 'react-native';
import {useDeckContext} from '../context/deckContext';    

const NewDeck = ({navigation}) => {
    const [deck, setDeck] = useState("");
    const {saveDeckTitleContext} = useDeckContext();

    const handleChange = (e) =>{
        setDeck(e)
    }

    const addDeck = () => {
        if(deck.length > 0){
            saveDeckTitleContext({
                [deck[0].toUpperCase() + deck.substr(1,deck.length - 1)]:{
                    title:deck[0].toUpperCase() + deck.substr(1,deck.length - 1), 
                    questions:[]
                }
            })
            setDeck("")
            Alert.alert("Success", "Deck added successfully")
            navigation.navigate("Decks List")
        }else{
            Alert.alert("Warning","Please insert a deck name first")
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.text}>Enter Name for New Deck</Text>
            
            <TextInput
                style={styles.input}
                onChangeText={handleChange}
                value={deck}
            />
            <TouchableOpacity
                onPress={addDeck}
            >
                <Text style={styles.btn}>Add Deck</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
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
    text:{
        fontSize:20,
        marginBottom:40
    },
    input:{
        width:"80%",
        height:40,
        borderWidth:1,
        borderRadius:10,
        paddingLeft:15,
        paddingRight:15,
        textTransform: "capitalize"
    },
    btn:{
        color:"white",
        padding: 10,
        backgroundColor:"green",
        margin:10
    }
});