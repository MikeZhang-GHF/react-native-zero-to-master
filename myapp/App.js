import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	// State
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [courseGoals, setCourseGoals] = useState([]);

	// Event handlers
	const startAddGoalHandler = () => {
		setModalIsVisible(true);
	};

	const endAddGoalHandler = () => {
		setModalIsVisible(false);
	};

	const addGoalHandler = (enteredGoalText) => {
		setCourseGoals((currentGoals) => [
			...currentGoals, // spread operator
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
		endAddGoalHandler();
	};

	// Delete item based on goldId
	const deleteGoalHandler = (goalId) => {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id !== goalId);
		});
	};

	return (
		<View style={styles.appContainer}>
			<Button
				title="Add New Goal"
				color="#5e0acc"
				onPress={startAddGoalHandler}
			/>
			<GoalInput
				visible={modalIsVisible}
				onAddGoal={addGoalHandler}
				onCancel={endAddGoalHandler}
			/>
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						// 重构GoalItem作为组件, 父组件留好处理函数接口，交给子组件，子组件调用(相当于留了个电话，有事找我)
						return (
							<GoalItem
								text={itemData.item.text}
								id={itemData.item.id}
								onDeleteItem={deleteGoalHandler}
							/>
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
	goalsContainer: {
		flex: 5,
	},
});
