import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CourseCard from "../../components/CourseCard";

const Courses = () => {
	return (
		<SafeAreaView style={styles.container}>
			<CourseCard/>
		</SafeAreaView>
	);
};

export default Courses;

const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: "white",
		paddingHorizontal:16
    },
});
