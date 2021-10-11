import React,{useState, useEffect} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDeckContext } from '../context/deckContext';

const DeckView = ({route,navigation}) => {

    const {id} = route.params;
    const {decks} = useDeckContext();

    const [deck, setDeck] = useState();

    useEffect(()=>{
        setDeck(decks[id])
    },[])

    return (
        <View style={styles.container}>
            {deck?.title && (
                <View>
                    <Text style={styles.deckName}>Deck Name: { deck.title } </Text>
                    <Text style={styles.deckDetails}> 
                        This deck has { deck.questions.length } cards.
                    </Text>

                    <View style={styles.btnView}>
                        <TouchableOpacity 
                            onPress={()=>navigation.navigate("newcard",{id:deck.title})}
                        >
                            <Text style={styles.btnCard}>Add Card To Deck</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate("quize", deck)}
                        >
                            <Text style={styles.btnQuize}>Start Quize</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    )
}

export default DeckView;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:"center"
    },
    deckName:{
        fontSize: 20,
        fontWeight: "800",
    },
    deckDetails:{
        color:"#999"
    },
    btnView:{
        marginVertical:40,
        padding: 10,
        width: "100%",
        justifyContent:"space-between",
        alignItems:"center"
    },
    btnQuize:{
        backgroundColor:"green",
        color:"white",
        padding: 16,
        width: 200,
        marginBottom:20,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    btnCard:{
        backgroundColor: "gray",
        color:"white",
        padding: 16,
        width: 200,
        marginBottom:20
    }
});