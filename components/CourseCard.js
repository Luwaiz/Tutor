import {
	Dimensions,
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("screen");

const CourseCard = ({ course, image, index, svg }) => {
	const navigation = useNavigation();
	const { courseName, hours, lessons, courseDescription, content, _id } =
		course;

	const onCoursePress = () => {
		navigation.navigate("Lesson", {
			courseName,
			image,
			hours,
			lessons,
			content,
			_id,
			SvgImage
		});
	};
	const SvgImage = svg[index % svg.length];
	const trimDescription=(description)=>{
		if(description.length>150){
            return description.slice(0,150)+"...";
        }else{
            return description;
        }
	}

	return (
		<Pressable style={styles.box} onPress={onCoursePress}>
			<View>
				<SvgImage style={styles.Image} />
				<View style={styles.topContainer}>
					<View style={styles.topBox}>
						<Text style={styles.courseName}>{courseName}</Text>
						<View>
							{hours.length > 1 ? (
								<Text style={styles.time}>{hours}</Text>
							) : (
								<Text style={styles.time}>0{hours}</Text>
							)}
							<Text style={styles.time}>HRS</Text>
						</View>
					</View>
					<Text style={styles.description}>{trimDescription(courseDescription)}</Text>
				</View>
			</View>
			<View
				style={[
					styles.bottomBox,
					{ backgroundColor: index % 2 ? "#3D0155" : "#042637" },
				]}
			></View>
		</Pressable>
	);
};

export default CourseCard;

const styles = StyleSheet.create({
	box: {
		backgroundColor: "#EDF0F7",
		width: "90%",
		height: 180,
		borderRadius: 10,
		marginVertical: 10,
		shadowColor: "#919193",
		elevation: 15,
		overflow: "hidden",
		alignSelf: "center",
	},
	contentContainer: {
		width: "50%",
	},
	topBox: {
		width: "100%",
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
		backgroundColor: "#042637",
		width: "100%",
		height: 30,
		marginTop: "auto",
	},
	Image: {
		position: "absolute",
		left: -110,
		bottom: -10,
	},
	courseName: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#000000",
		maxWidth: 250,
		marginRight: "auto",
	},
	description: {
		fontSize: 12,
		color: "#666666",
	},
	time: {
		fontSize: 14,
		color: "#000000",
		textAlign: "center",
		fontWeight: "500",
		marginLeft:10
	},
	topContainer: {
		width:"60%",
		marginLeft:"auto",
		marginRight:16,
		padding:10
	}
});
