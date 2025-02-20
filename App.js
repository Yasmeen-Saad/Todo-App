import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList, TextInput } from 'react-native';

export default function App() {
	const todos = [{
		id: 1,
		title: "Todo 1",
		description: "Description 1",
		status: "inProgress"
	},
	{
		id: 2,
		title: "Todo 2",
		description: "Description 2",
		status: "inProgress"
	},
	{
		id: 3,
		title: "Todo 3",
		description: "Description 3",
		status: "done"
	},
	{
		id: 4,
		title: "Todo 4",
		description: "Description 4",
		status: "done"
	},
	{
		id: 5,
		title: "Todo 5",
		description: "Description 5",
		status: "inProgress"
	},
	{
		id: 6,
		title: "Todo 6",
		description: "Description 6",
		status: "inProgress"
	},
	{
		id: 7,
		title: "Todo 7",
		description: "Description 7",
		status: "done"
	},
	{
		id: 8,
		title: "Todo 8",
		description: "Description 8",
		status: "done"
	},
	{
		id: 9,
		title: "Todo 9",
		description: "Description 9",
		status: "inProgress"
	},
	{
		id: 10,
		title: "Todo 10",
		description: "Description 10",
		status: "inProgress"
	}
	];
  return (
	<View style={styles.container}>
		<Text style={styles.appHeader}>Todo App</Text>
		<TextInput style={styles.input} placeholder="Enter the title"/>
		<TextInput style={styles.input} placeholder="Enter the description"/>
		<TouchableOpacity style={styles.submitBtn} activeOpacity={0.8}>
			<Text style={{color: "#fff"}}>Submit</Text>
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
						<Text>{item.title}</Text>
					</View>
				}/>
		</View> 
	</View>
  );
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
    padding: 20,
    borderRadius: 10,
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
    marginTop: 10,
	width: "100%",
	borderRadius: 15,
	borderWidth: 2,
	borderColor: "black",
	padding: 10,
  }
});
