import React,{useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const QuizeView = ({
    route,
    navigation
}) => {

    const {title,questions} = route.params;
    const totalQuestions = questions.length;

    const [correct, setCorrect] = useState(0);
    const [failed, setFailed] = useState(0);
    const [viewAnswer, setViewAnswer] = useState(false);

    const answered = correct + failed;

    useEffect(()=>{

    },[])
    
    return (
        <View style={styles.container}>
            <Text>Quize On {title} </Text>

            <Text>{answered} / {totalQuestions}</Text>

            <Text style={styles.question}>
                {
                    !(answered >= questions.length)
                    ? (
                        !viewAnswer
                        ? <Text> {questions[answered].question}</Text>
                        : <Text> {questions[answered].answer}</Text>
                    )
                    : (
                        <View>
                            <Text> Total Score {answered} </Text>
                            <Text> Got {correct} correctly </Text>
                            <Text> Failed {failed} </Text>

                            <View style={styles.finished}>
                                <TouchableOpacity
                                    onPress={()=>{
                                        setCorrect(0)
                                        setFailed(0)
                                    }}
                                >
                                    <Text style={{...styles.viewAnswerBtn, backgroundColor:"green"}}> 
                                        Restart Quize 
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={()=>navigation.goBack()}
                                >
                                    <Text style={{...styles.viewAnswerBtn, backgroundColor:"red"}}> 
                                        Back to Deck
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }
                
            </Text>

            {
                !(answered >= questions.length) && (
                    <TouchableOpacity
                        onPress={()=>setViewAnswer(!viewAnswer)}
                    >
                        <Text style={styles.viewAnswerBtn}>
                         {!viewAnswer ? "Show Answer" : "Question"}
                        </Text>
                    </TouchableOpacity>
                )
            }

            {
                !(answered >= questions.length) && (
                    <View>
                        <TouchableOpacity
                            onPress={()=>setCorrect(correct + 1)}
                        >
                            <Text style={{...styles.viewAnswerBtn, backgroundColor:"green"}}> 
                                Correct 
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={()=>setFailed(failed + 1)}
                        >
                            <Text style={{...styles.viewAnswerBtn, backgroundColor:"red"}}> 
                                Incorrect
                            </Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    )
};

export default QuizeView;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    count:{
        color:"#666"
    },
    question:{
        fontSize:20,
        marginVertical:30,
        color: "#999",
    },
    viewAnswerBtn:{
        backgroundColor:"lightblue",
        color:"white",
        padding: 16,
        width: 200,
        marginBottom:20,
        display:"flex",
        textAlign:"center",
        justifyContent:"center",
        borderRadius:20
    },
    finished:{
        paddingVertical:20
    }
});