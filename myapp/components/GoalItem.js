import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
	return (
		// 通过props传递父组件的处理函数
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: '#210644' }}
				onPress={props.onDeleteItem.bind(this, props.id)}
				style={({pressed}) => pressed && styles.pressedItem}
			>
				<Text style={styles.goalText}>{props.text}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		boarderRadius: 8,
		backgroundColor: '#5e0acc',
	},
	pressedItem: {
		backgroundColor: '#210644',
	},
	goalText: {
		color: 'white',
		padding: 8,
	},
});

export default GoalItem;
