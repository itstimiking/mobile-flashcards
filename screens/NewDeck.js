import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const NewDeck = ({
    navigation
}) => (
    <View styles={styles.container}>
        <Text>NewDeck</Text>
    </View>
);

export default NewDeck;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});