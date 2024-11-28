import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";

const QuizCard = ({ question, onAnswerSelected }) => {
	const [option, setOption] = useState(null);
	const handleSelect = (value) => {
		setOption(value);
		onAnswerSelected(question._id, value); // Report selected answer
	};
	return (
		<View style={styles.box}>
			<Text style={styles.question}>{question.question}</Text>
			<View style={styles.answerBox}>
				<RadioButton.Group onValueChange={handleSelect} value={option}>
					{question.options.map((answer, index) => (
						<RadioButton.Item
							key={index}
							label={`${answer}`}
							value={index}
							color="#ffffff"
							labelStyle={option === index && styles.checkedLabel}
							style={[
								styles.answerItem,
								option === index && styles.checkedAnswerItem, // Apply dynamic style
							]}
							status={option === index ? "checked" : "unchecked"} // Use status prop
						/>
					))}
				</RadioButton.Group>
			</View>
		</View>
	);
};

export default QuizCard;

const styles = StyleSheet.create({
	box: {
		backgroundColor: "#EDF0F7",
		width: "100%",
		borderRadius: 10,
		marginVertical: 10,
		shadowColor: "#919190",
		elevation: 15,
		justifyContent: "center",
		padding: 16,
	},
	question: {
		fontSize: 16,
		fontWeight: "600",
		marginBottom: 16,
	},
	answerBox: {
		justifyContent: "space-between",
		marginBottom: 10,
	},
	checkedBox: {
		backgroundColor: "#042637",
		borderRadius: 10,
		color: "#ffffff",
	},
	answer: {
		color: "#ffffff",
	},
	checkedAnswerItem: {
		backgroundColor: "#042637",
		borderRadius: 10,
	},
	checkedLabel: {
		color: "#ffffff",
	},
});
