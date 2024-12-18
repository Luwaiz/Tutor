import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = ({ title }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: "#ffffff",
		justifyContent: "center",
		height: StatusBar.currentHeight *2,
		alignSelf:"flex-start"
	},
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333333",
    },
});
