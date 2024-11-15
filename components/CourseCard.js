import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("screen");

const CourseCard = ({ courseTitle,image }) => {
	const navigation = useNavigation()
	const onCoursePress = () => {
        navigation.navigate("Lesson", { courseTitle,image })
    }
	return (
		<Pressable style={styles.box} onPress={onCoursePress}>
			<View style={styles.topBox}>
				<View style={styles.circle} />
				<Text style={styles.courseName}>{courseTitle}</Text>
				<View>
					<Text style={styles.time}>03{"\n"}HRS</Text>
				</View>
			</View>
			<Text style={styles.description}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus
				vel arcu viverra bibendum.
			</Text>
			<View style={styles.bottomBox}></View>
		</Pressable>
	);
};

export default CourseCard;

const styles = StyleSheet.create({
	box: {
		backgroundColor: "#Ffffff",
		width: "90%",
		height: 180,
		borderRadius: 10,
		marginVertical: 10,
		shadowColor: '#919193',  
		elevation: 15,  
		overflow: "hidden",
		alignSelf:"center"

	},
	topBox: {
		width: "100%",
		padding: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	circle: {
		width: 36,
		height: 36,
		borderRadius: 20,
		backgroundColor: "#042637",
		marginRight: 16,
	},
	bottomBox: {
		backgroundColor: "#EDF0F7",
		width: "100%",
		height: 50,
		marginTop: "auto",
	},
	courseName: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#000000",
		maxWidth:250,
		marginRight: "auto",
	},
	description: {
		marginHorizontal: 16,
		fontSize: 12,
		color: "#666666",
	},
	time: {
		fontSize: 14,
		color: "#000000",
		textAlign: "center",
		fontWeight: "500",
	},
});
