import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const DeckView = ({
    params,
}) => (
    <View styles={styles.container}>
        <Text>DeckView</Text>
    </View>
);

export default DeckView;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});