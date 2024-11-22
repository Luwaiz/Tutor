import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
const ArticleBox = ({ item }) => {
	const trimText = (sentence) => {
		if (sentence.length > 40) {
			return sentence.substring(0, 40) + "...";
		} else {
			return sentence;
		}
	};
	return (
		<View style={styles.container}>
			<Image source={item.image} style={styles.image} />
			<View style={styles.content}>
				<Text style={styles.title}>{item.courseName}</Text>

				<Text style={styles.subTitle}>{trimText(item.courseDescription)}</Text>
			</View>
		</View>
	);
};

export default ArticleBox;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 130,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	content: {
		width: "70%",
		height: "100%",
		padding: 20,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		flexWrap: "wrap",
		maxWidth: 0.7 * width,
	},
	subTitle: {
		fontSize: 16,
		marginTop: 10,
	},
});
