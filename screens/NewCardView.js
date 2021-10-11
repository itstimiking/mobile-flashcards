import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const NewCard = ({route,navigation}) => {
    const {id} = route.params;
    return (
        <View style={styles.container}>

            <Text>New Card for {id}</Text>

            <TouchableOpacity
                onPress={()=>""}
            >
                <Text style={styles.btn}>
                    Add Card
                </Text>
            </TouchableOpacity>
        </View>
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
        backgroundColor:"lightblue",
        color:"white",
        padding: 16,
        width: 200,
        marginBottom:20,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20
    }
});