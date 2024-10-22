import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");

const BlogBox = () => {
	const data = [
		{ id: 1, name: "garri" },
		{ id: 2, name: "fufu" },
		{ id: 3, name: "marine" },
		{ id: 4, name: "garri" },
		{ id: 5, name: "fufu" },
		{ id: 6, name: "marine" },
		{ id: 7, name: "garri" },
		{ id: 8, name: "fufu" },
		{ id: 9, name: "marine" },
		{ id: 10, name: "garri" },
		{ id: 11, name: "fufu" },
		{ id: 12, name: "marine" },
		{ id: 13, name: "garri" },
		{ id: 14, name: "fufu" },
		{ id: 15, name: "marine" },
		{ id: 16, name: "garri" },
	];
	return (
		<View>
			<View>
				{data.map((stuff) => (
					<Testimony key={stuff.id} item={stuff.name} />
				))}
			</View>
		</View>
	);
};

const Testimony = ({ item }) => {
	return (
		<View style={styles.box}>
			<Text>{item}</Text>
		</View>
	);
};

export default BlogBox;

const styles = StyleSheet.create({
	box: {
		backgroundColor: "#D1F01F",
		padding: 10,
		marginBottom: 20,
		borderWidth: 1,
		width: width - 50,
		alignSelf: "center",
		height: 130,
		borderRadius: 5,
		borderColor: "#D1F0FF",
	},
	container: {
		marginTop: 10,
	},
});
