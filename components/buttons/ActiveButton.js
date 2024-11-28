import {
	ActivityIndicator,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";

//active button component
const ActiveButton = ({ title, onPress, disabled, loading }) => {
	return (
		<TouchableOpacity disabled={disabled} onPress={onPress} activeOpacity={0.5}>
			<View style={styles.button}>
				{loading ? (
					<ActivityIndicator size={20} color={"#ffffff"} />
				) : (
					<Text style={styles.buttonText}>{title}</Text>
				)}
			</View>
		</TouchableOpacity>
	);
};

export default ActiveButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#042637",
		minWidth: 167,
		height: 48,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "#ffffff",
		fontSize: 16,
		fontWeight: "500",
	},
});
