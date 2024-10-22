import {
	Dimensions,
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("screen");

const Testimony = ({ item }) => {
	return (
		<View style={styles.box}>
			<Text>{item}</Text>
		</View>
	);
};

const Testimonials = () => {
	const data = [
		{ id: 1, name: "garri" },
		{ id: 2, name: "fufu" },
		{ id: 3, name: "marine" },
	];
	return (
		<View>
			<ScrollView
				contentContainerStyle={styles.container}
				horizontal
				showsHorizontalScrollIndicator={false}
				bounces={false}
				alwaysBounceHorizontal={false}
			>
				{data.map((stuff) => (
					<Testimony key={stuff.id} item={stuff.name} />
				))}
			</ScrollView>
		</View>
	);
};

export default Testimonials;

const styles = StyleSheet.create({
	box: {
		backgroundColor: "#D1F0FF",
		padding: 10,
		marginBottom: 10,
		borderWidth: 1,
		width: width - 100,
		alignSelf: "center",
		height: 130,
		borderRadius: 5,
		borderColor: "#D1F0FF",
	},
	container: { 
		gap: 20, 
		marginTop: 10 
	},
});
