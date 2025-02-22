import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, TouchableOpacity, View, FlatList, TextInput, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
    const {navigate} = useNavigation();
    const todos = [
        {
            id: 1,
            title: "Complete React project",
            description: "Finish implementing the authentication system and test the API integration.",
            status: "inProgress"
        },
        {
            id: 2,
            title: "Study Problem Solving",
            description: "Solve at least 5 problems on LeetCode focusing on arrays and recursion.",
            status: "inProgress"
        },
        {
            id: 3,
            title: "Practice Violin",
            description: "Spend 30 minutes practicing scales and one song from the playlist.",
            status: "done"
        },
        {
            id: 4,
            title: "Read a physics article",
            description: "Read about quantum mechanics and take notes for reference.",
            status: "done"
        },
        {
            id: 5,
            title: "Workout session",
            description: "Do a 45-minute full-body workout focusing on strength training.",
            status: "inProgress"
        },
        {
            id: 6,
            title: "Write a blog post",
            description: "Draft an article about sustainable web development practices.",
            status: "inProgress"
        },
        {
            id: 7,
            title: "Review Laravel project",
            description: "Check and optimize database queries in the e-commerce backend.",
            status: "done"
        },
        {
            id: 8,
            title: "Watch a space documentary",
            description: "Watch 'The Universe' episode about black holes and write down key points.",
            status: "done"
        },
        {
            id: 9,
            title: "Plan an eco-friendly campaign",
            description: "Brainstorm ideas for a new advertising campaign focusing on sustainability.",
            status: "inProgress"
        },
        {
            id: 10,
            title: "Revise JavaScript concepts",
            description: "Review ES6 features and closures before the next coding session.",
            status: "inProgress"
        }
    ];    
    const checkIcon = Platform.OS === 'ios' ? 'checkmark-circle' : 'checkmark-circle-outline';
    const deleteIcon = Platform.OS === 'ios' ? 'close-circle' : 'close';

    return (
        <View style={styles.container}>
        	<Text style={styles.appHeader}>Todo App</Text>
        	<TextInput style={styles.input} placeholder="Enter the title"/>
        	<TextInput style={styles.input} placeholder="Enter the description"/>
        	<TouchableOpacity style={styles.submitBtn} activeOpacity={0.8}>
        		<Text style={{color: "#fff", fontSize: 16}}>Submit</Text>
        	</TouchableOpacity>
        	<View style={styles.dividerLine}/>
        	<View style={styles.filterContainer}>
        		<TouchableOpacity style={{...styles.filterBtn, ...styles.activeFilterBtn}} activeOpacity={0.8}>
        			<Text style={{...styles.filterText, ...styles.activeFilterText}}>All</Text>
        		</TouchableOpacity>
        		<TouchableOpacity style={styles.filterBtn} activeOpacity={0.8}>
        			<Text style={styles.filterText}>In progress</Text>
        		</TouchableOpacity>
        		<TouchableOpacity style={styles.filterBtn} activeOpacity={0.8}>
        			<Text style={styles.filterText}>Done</Text>
        		</TouchableOpacity>
        	</View>
        	<View style={styles.todosContainer}>
        		<FlatList data={todos} keyExtractor={(item) => item.id} renderItem={({item}) => 
        			<View style={styles.todoContainer}>
                        <Ionicons name={checkIcon} size={25} color="black"/>
                        <View style={{flex: 1, marginTop: 3}}>
                            <Text onPress={() => navigate("TodoDetails", item)} style={styles.todoText}>{item.title}</Text>
                        </View>
                        <TouchableOpacity style={styles.deleteBtn}>
                            <Ionicons name={deleteIcon} size={25} color="#E34234"/>
                        </TouchableOpacity> 
        			</View>
        		}/>
        	</View> 
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    appHeader: {
      fontSize: 25,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      paddingTop: 60
    },
    input:{
      borderWidth: 1,
      borderColor: "#aeaeae",
      width: "90%",
      marginVertical: 10,
      height: 50,
      padding: 10,
      borderRadius: 5
    },
    filterBtn: {
      width: "50%",
      backgroundColor: "#000",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      borderRadius: 10,
    },
    filterBtn: {
      width: "30%",
      backgroundColor: "#ffffff",
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
      borderWidth: 2,
      borderColor: "black",
    },
    filterContainer: {
      flexDirection: "row",
      width: "90%",
      justifyContent: "space-between",
    },
    todosContainer: {
      flex: 1,
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      alignContent: "center",
      padding: 20,
      paddingBottom: 60
    },
    filterText: {
      color: "black",
      fontSize: 15,
    },
    dividerLine: {
      height: 1,
      width: "90%",
      backgroundColor: "#aeaeae",
      marginVertical: 20
    },
    submitBtn: {
      width: "50%",
      backgroundColor: "#000",
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      borderRadius: 10,
      margin: 15
    },
    activeFilterBtn: {
      width: "30%",
      backgroundColor: "black",
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
      borderWidth: 1,
      borderColor: "black",
    },
    activeFilterText: {
      color: "white",
      fontSize: 15,
    },
    todoContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20,
      width: "100%",
      borderRadius: 15,
      borderWidth: 2,
      borderColor: "black",
      padding: 10,
    },
    todoText: {
      flex: 1,
      marginLeft: 10,
      fontSize: 15,
    },
    deleteBtn: {
        alignSelf: "flex-end"
    },
});

export default Home;