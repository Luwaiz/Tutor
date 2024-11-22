import {
	ActivityIndicator,
	Dimensions,
	RefreshControl,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import BottomSheet, {
	BottomSheetScrollView,
	BottomSheetView,
} from "@gorhom/bottom-sheet";
import ArticleBox from "./ArticleBox";
const { width, height } = Dimensions.get("window");

const BottomDiscover = ({ loading, courses, onRefresh, refreshing }) => {
	return (
		<View style={styles.bottom}>
			<Text style={styles.header}>Recent Articles</Text>
			{loading ? (
				<ActivityIndicator color={"#042637"} size={50} />
			) : courses.length > 0 ? (
				<ScrollView
					contentContainerStyle={{ paddingBottom: 100 }}
					refreshControl={
						<RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
					}
				>
					{courses.map((item, index) => (
						<ArticleBox key={index} item={item} />
					))}
				</ScrollView>
			) : (
				<Text style={{ textAlign: "center", marginTop: 20 }}>
					No courses available
				</Text>
			)}
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
		width,
	},
	header: {
		fontSize: 22,
		fontWeight: "500",
	},
});
