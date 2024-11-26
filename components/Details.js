import {
	Keyboard,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";

const Details = ({ text, value }) => {
	const [passwordVisible, setPasswordVisible] = useState(false);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{text}</Text>
			<View style={styles.inputCont} focusable>
				<Text>{value}</Text>
			</View>
		</View>
	);
};

export default Details;

const styles = StyleSheet.create({
	container: {
		marginBottom: 16,
	},
	inputCont: {
		width: "100%",
		height: 48,
		borderRadius: 8,
		marginTop: 8,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderColor: "#042637",
		borderWidth: 1,
        paddingHorizontal: 16,
	},
	text: {
		fontSize: 18,
	},
});
