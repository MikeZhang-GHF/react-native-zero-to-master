import { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	FlatList,
} from 'react-native';

export default function App() {
	// State
	const [enteredGoalText, setEnteredGoalText] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);

	// Event handlers
	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		setCourseGoals((currentGoals) => [
			...currentGoals, // spread operator
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
				/>
				<Button title="Add Goal" onPress={addGoalHandler} />
			</View>
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						return (
							<View style={styles.goalItem}>
								<Text style={styles.goalText}>
									{itemData.item.text}
								</Text>
							</View>
						);
					}}
					alwaysBounceVertical={false}
          keyExtractor={(item, index) => item.id}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1, // takes up all available space
		padding: 50,
		paddingHorizontal: 16,
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
		padding: 8,
	},
	goalsContainer: {
		flex: 5,
	},
	goalItem: {
		margin: 8,
		padding: 8,
		boarderRadius: 8,
		backgroundColor: '#5e0acc',
	},
	goalText: {
		color: 'white',
	},
});
