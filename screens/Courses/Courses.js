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
import Header from "../../components/Header";
import styles from "./styles";
import ZustandStore from "../../hooks/ZustandStore";
import axios from "axios";
import API from "../../constants/API";

const Courses = ({ route }) => {
	const token = ZustandStore.useAuthStore((state) => state.token);
	const [loading, setLoading] = useState(false);
	const [courses, setCourses] = useState([]);
	const [refreshing,setRefreshing] = useState(false)

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
				console.log("enrolled courses", response.data);
				setCourses(response.data.enrolledCourses);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		}
	};

	const onRefresh=()=>{
		setRefreshing(true);
		enrolledCourses();
		setRefreshing(false);
	}
	useEffect(() => {
		enrolledCourses();
	}, []);

	return (
		<>
			<Header title={route.name} />
			<SafeAreaView style={styles.container}>
				{loading ? (
					<ActivityIndicator color={"#042637"} size={50} />
				) : (
					<ScrollView 
					refreshControl={<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>}
					showsVerticalScrollIndicator={false}>
						{courses.map((course, index) => (
						 <CourseCard key={index} course={course} />
						))}
					</ScrollView>
				)}
			</SafeAreaView>
		</>
	);
};

export default Courses;
