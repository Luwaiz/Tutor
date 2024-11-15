import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomSheet, {
	BottomSheetScrollView,
	BottomSheetView,
} from "@gorhom/bottom-sheet";
import ArticleBox from "./ArticleBox";
const { width, height } = Dimensions.get("window");

const BottomDiscover = () => {
	const data = [
		{
			id: 1,
			name: "Educational themes",
			image: require("../assets/images/image1.jpg"),
		},
		{
			id: 2,
			name: "Mind blowing thesis and research",
			image: require("../assets/images/image2.jpg"),
		},
		{
			id: 3,
			name: "Field study and accreditation",
			image: require("../assets/images/image3.jpg"),
		},
		{
			id: 4,
			name: "Educational themes",
			image: require("../assets/images/image2.jpg"),
		},
		{
			id: 5,
			name: "Mind blowing thesis and research",
			image: require("../assets/images/image1.jpg"),
		},
		{
			id: 6,
			name: "Field study and accreditation",
			image: require("../assets/images/image3.jpg"),
		},
		{
			id: 7,
			name: "Educational themes",
			image: require("../assets/images/image3.jpg"),
		},
		{
			id: 8,
			name: "Mind blowing thesis and research",
			image: require("../assets/images/image2.jpg"),
		},
		{
			id: 9,
			name: "Field study and accreditation",
			image: require("../assets/images/image1.jpg"),
		},
		{
			id: 10,
			name: "Educational themes",
			image: require("../assets/images/image2.jpg"),
		},
		{
			id: 11,
			name: "Mind blowing thesis and research",
			image: require("../assets/images/image1.jpg"),
		},
		{
			id: 12,
			name: "Field study and accreditation",
			image: require("../assets/images/image3.jpg"),
		},
		{
			id: 13,
			name: "Educational themes",
			image: require("../assets/images/image1.jpg"),
		},
		{
			id: 14,
			name: "Mind blowing thesis and research",
			image: require("../assets/images/image2.jpg"),
		},
		{
			id: 15,
			name: "Field study and accreditation",
			image: require("../assets/images/image3.jpg"),
		},
		{
			id: 16,
			name: "Educational themes",
			image: require("../assets/images/image1.jpg"),
		},
	];
	return (
		<View style={styles.bottom}>
			<Text style={styles.header}>Recent Articles</Text>
			<ScrollView contentContainerStyle={{paddingBottom:100}}>
				{data.map((item) => (
					<ArticleBox key={item.id} item={item} />
				))}
			</ScrollView>
		</View>
	);
};

export default BottomDiscover;

const styles = StyleSheet.create({
	bottomContainer: {
		position: "absolute",
		bottom: 0,
		width: "100%",
		backgroundColor: "white",
	},
	bottom: {
		height: height / 2,
		backgroundColor: "#F4F4F4",
		padding: 20,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		position: "absolute",
		bottom: 0,
	},
	header: {
		fontSize: 22,
		fontWeight: "500",
	},
});
