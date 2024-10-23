import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Discover = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Discover</Text>
		</SafeAreaView>
	);
};

export default Discover;

const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
});
