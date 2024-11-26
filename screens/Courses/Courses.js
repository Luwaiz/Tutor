import {
	ActivityIndicator,
	Image,
	RefreshControl,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CourseCard from "../../components/CourseCard";
import TeamWork from "../../assets/svg/TeamWork.svg";
import Study from "../../assets/svg/Study.svg";
import BigBulb from "../../assets/svg/BigBulb.svg";
import ManBook from "../../assets/svg/ManBook.svg";
import WomanBook from "../../assets/svg/WomanBook.svg";
import GirlBook from "../../assets/svg/GirlBook.svg";
import Header from "../../components/Header";
import styles from "./styles";
import ZustandStore from "../../hooks/ZustandStore";
import axios from "axios";
import API from "../../constants/API";

const Courses = ({ route }) => {
	const token = ZustandStore.useAuthStore((state) => state.token);
	const [loading, setLoading] = useState(false);
	const [courses, setCourses] = useState([]);
	const svgs = [ManBook, TeamWork, Study,GirlBook, BigBulb];
	const [refreshing, setRefreshing] = useState(false);

	const enrolledCourses = async () => {
		setLoading(true);
		if (!token) {
			console.log("No token");
			setLoading(false);
		} else {
			try {
				const response = await axios.get(API.enrolledCourse, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				console.log(response.data.enrolledCourses)
				setCourses(response.data.enrolledCourses);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		}
	};

	const onRefresh = () => {
		setRefreshing(true);
		enrolledCourses();
		setRefreshing(false);
	};
	useEffect(() => {
		enrolledCourses();
	}, []);

	return (
		<>
			<Header title={"Enrolled Courses"} />
			<SafeAreaView style={styles.container}>
				{loading ? (
					<ActivityIndicator color={"#042637"} size={50} />
				) : (
					<ScrollView
						refreshControl={
							<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
						}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{paddingBottom: 90}}
					>
						{courses.map((course, index) => (
							<CourseCard index={index} key={index} course={course} svg={svgs}
							/>
						))}
					</ScrollView>
				)}
			</SafeAreaView>
		</>
	);
};

export default Courses;
