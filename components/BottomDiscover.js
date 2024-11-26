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
import TeamWork from "../assets/svg/TeamWork.svg";
import Study from "../assets/svg/Study.svg";
import BigBulb from "../assets/svg/BigBulb.svg";
import ManBook from "../assets/svg/ManBook.svg";
import WomanBook from "../assets/svg/WomanBook.svg";
import GirlBook from "../assets/svg/GirlBook.svg";
import ArticleBox from "./ArticleBox";
const { width, height } = Dimensions.get("window");

const BottomDiscover = ({ loading, courses, onRefresh, refreshing }) => {
	const svgs = [Study,WomanBook, TeamWork, GirlBook, BigBulb,ManBook];
	return (
		<View style={styles.bottom}>
			<Text style={styles.header}>Available Courses</Text>
			{loading ? (
				<ActivityIndicator color={"#042637"} size={50} />
			) : courses.length > 0 ? (
				<ScrollView
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ paddingBottom: 100 }}
					refreshControl={
						<RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
					}
				>
					{courses.map((item, index) => {
						
						return <ArticleBox key={index} item={item} index={index} svgs={svgs} />;
					})}
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
	bottom: {
		height: height / 2 + 100,
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
		paddingBottom: 10,
	},
});
