import React,{useState} from 'react';
import { Text, KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import {useDeckContext} from '../context/deckContext';    


const NewCard = ({route,navigation}) => {

    const {addCardToDeckContext} = useDeckContext();


    const {id} = route.params;

    const [question,setQuestion] = useState("");
    const [answer,setAnswer] = useState("");

    const handleQuestions = (e)=>{
        setQuestion(e)
    }

    const handleAnswer = (e)=>{
        setAnswer(e)
    }

    const addToQuestions = ()=>{
        addCardToDeckContext(id,{
            question,
            answer
        })
        Alert.alert("Success", `Question has been added to the ${id} Deck`);
        setQuestion("");
        setAnswer("");
    }

    return (

            <KeyboardAvoidingView style={styles.container}>
                
                <TextInput
                    style={styles.input}
                    onChangeText={handleQuestions}
                    value={question}
                    placeholder="Enter question here"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={handleAnswer}
                    value={answer}
                    placeholder="Answer here"
                />
                <TouchableOpacity
                    onPress={addToQuestions}
                >
                    <Text style={styles.btn}>Add Card</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
    )
}

export default NewCard;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn:{
        backgroundColor:"green",
        color:"white",
        padding: 16,
        width: 200,
        marginBottom:20,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        textAlign:"center"
    },
    input:{
        width:"80%",
        height:40,
        borderWidth:1,
        borderRadius:10,
        paddingLeft:15,
        paddingRight:15,
        textTransform: "capitalize",
        marginBottom:30
    }
});