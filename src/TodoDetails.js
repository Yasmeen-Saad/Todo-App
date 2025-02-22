import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TodoDetails = (item) => {
    const {goBack} = useNavigation();
    const {title, description, status} = item.route.params;

  return (
    <View>
        <Text style={styles.todoTitle}>{title}</Text>
        <Text style={styles.todoStatus}>Status : {status}</Text>
        <Text style={styles.todoDescription}>{description}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    todoTitle: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingHorizontal: 25,
        paddingTop: 25
    },
    todoDescription: {
        fontSize: 20,
        paddingHorizontal: 20,
        paddingBottom: 25
    },
    todoStatus: {
        fontSize: 15,
        paddingHorizontal: 25,
        paddingBottom: 25
    },
});

export default TodoDetails