import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const QuizeView = ({
    params,
}) => (
    <View styles={styles.container}>
        <Text>QuizeView</Text>
    </View>
);

export default QuizeView;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});