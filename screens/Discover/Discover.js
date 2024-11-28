import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import BottomDiscover from "../../components/BottomDiscover";
import College from "../../assets/svg/College.svg";
import styles from "./styles";
import axios from "axios";
import API from "../../constants/API";
import ZustandStore from "../../hooks/ZustandStore";
import SearchBar from "../../components/SearchBar";

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

	const getAllCourses = async () => {
		setLoading(true);
		try {
			const response = await axios.get(API.getCourses, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
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
			<SearchBar courses={courses} search={search} setSearch={setSearch} setFilteredCourses={setFilteredCourses}/>

			<College style={styles.College} />
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
