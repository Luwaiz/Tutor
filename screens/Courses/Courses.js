import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CourseCard from "../../components/CourseCard";
import Header from "../../components/Header";

const Courses = ({ route }) => {
	const data = [
		{
			id: 1,
			name: "Educational themes",
			image: require("../../assets/images/image1.jpg"),
		},
		{
			id: 2,
			name: "Mind blowing thesis and research",
			image: require("../../assets/images/image2.jpg"),
		},
		{
			id: 3,
			name: "Field study and accreditation",
			image: require("../../assets/images/image3.jpg"),
		},
		{
			id: 4,
			name: "Educational themes",
			image: require("../../assets/images/image2.jpg"),
		},
		{
			id: 5,
			name: "Mind blowing thesis and research",
			image: require("../../assets/images/image1.jpg"),
		},
		{
			id: 6,
			name: "Field study and accreditation",
			image: require("../../assets/images/image3.jpg"),
		},
		{
			id: 7,
			name: "Educational themes",
			image: require("../../assets/images/image3.jpg"),
		},
		{
			id: 8,
			name: "Mind blowing thesis and research",
			image: require("../../assets/images/image2.jpg"),
		},
		{
			id: 9,
			name: "Field study and accreditation",
			image: require("../../assets/images/image1.jpg"),
		},
		{
			id: 10,
			name: "Educational themes",
			image: require("../../assets/images/image2.jpg"),
		},
		{
			id: 11,
			name: "Mind blowing thesis and research",
			image: require("../../assets/images/image1.jpg"),
		},
		{
			id: 12,
			name: "Field study and accreditation",
			image: require("../../assets/images/image3.jpg"),
		},
		{
			id: 13,
			name: "Educational themes",
			image: require("../../assets/images/image1.jpg"),
		},
		{
			id: 14,
			name: "Mind blowing thesis and research",
			image: require("../../assets/images/image2.jpg"),
		},
		{
			id: 15,
			name: "Field study and accreditation",
			image: require("../../assets/images/image3.jpg"),
		},
		{
			id: 16,
			name: "Educational themes",
			image: require("../../assets/images/image1.jpg"),
		},
	];
	return (
		<>
			<Header title={route.name} />
			<SafeAreaView style={styles.container}>
				<ScrollView showsVerticalScrollIndicator={false}>
					{data.map((course) => (
						<CourseCard key={course.id} courseTitle={course.name} />
					))}
				</ScrollView>
			</SafeAreaView>
		</>
	);
};

export default Courses;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
});
