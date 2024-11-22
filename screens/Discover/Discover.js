import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import BottomDiscover from "../../components/BottomDiscover";
import styles from "./styles";
import axios from "axios";
import API from "../../constants/API";
import ZustandStore from "../../hooks/ZustandStore";

const Discover = () => {
	const [loading, setLoading] = useState(false);
	const [refreshing, setRefreshing] = useState(false);
	const [search, setSearch] = useState("");
	const [filteredCourses, setFilteredCourses] = useState([]);
	const { courses, setCourses } = ZustandStore.useCourseStore();
	const token = ZustandStore.useAuthStore((state) => state.token);

	useEffect(() => {
		getAllCourses();
	}, []);

	useEffect(() => {
		if (search.trim() === "") {
			setFilteredCourses(courses); // Show all courses if no search
		} else {
			const filtered = courses.filter((course) =>
				course.courseName.toLowerCase().includes(search.toLowerCase())
			);
			setFilteredCourses(filtered);
		}
	}, [search, courses]);

	const getAllCourses = async () => {
		setLoading(true);
		try {
			const response = await axios.get(API.getCourses, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log(response.data);
			setCourses(response.data);
			setLoading(false);
		} catch (e) {
			console.log(e);
			setLoading(false);
		}
	};

	const onRefresh = () => {
		setRefreshing(true);
		getAllCourses();
		setRefreshing(false);
	};
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.SearchBar}>
				<Feather name="search" size={24} color="#ffffff" />
				<TextInput
					placeholder="Search"
					placeholderTextColor="#ffffff"
					cursorColor={"#ffffff"}
					style={styles.Search}
					onChangeText={(text) => setSearch(text)}
					value={search}
				/>
			</View>
			<BottomDiscover
				loading={loading}
				courses={filteredCourses}
				onRefresh={onRefresh}
				refreshing={refreshing}
			/>
		</SafeAreaView>
	);
};

export default Discover;
