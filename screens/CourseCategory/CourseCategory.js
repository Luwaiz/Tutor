import {
	ActivityIndicator,
	Dimensions,
	RefreshControl,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, { useEffect, useState } from "react";
import TeamWork from "../../assets/svg/TeamWork.svg";
import Study from "../../assets/svg/Study.svg";
import BigBulb from "../../assets/svg/BigBulb.svg";
import ManBook from "../../assets/svg/ManBook.svg";
import WomanBook from "../../assets/svg/WomanBook.svg";
import GirlBook from "../../assets/svg/GirlBook.svg";
import ArticleBox from "../../components/ArticleBox";
import styles from "./styles";
import ZustandStore from "../../hooks/ZustandStore";
import API from "../../constants/API";
import axios from "axios";
import BackButton from "../../components/buttons/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar";

const CourseCategory = ({ route }) => {
	const [loading, setLoading] = useState(false);
	const [courses, setCourses] = useState([]);
	const [refreshing, setRefreshing] = useState(false);
	const [search, setSearch] = useState("");
	const [filteredCourses, setFilteredCourses] = useState([]);
	const svgs = [GirlBook, ManBook, TeamWork, Study, WomanBook, BigBulb];
	const token = ZustandStore.useAuthStore((state) => state.token);
	const { category } = route.params;

	const getAllCourses = async () => {
		setLoading(true);
		try {
			const response = await axios.get(`${API.categoryCourses}/${category}`, {
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

	useEffect(() => {
		getAllCourses();
	}, []);
	const onRefresh = () => {
		setRefreshing(true);
		getAllCourses();
		setRefreshing(false);
	};

	return (
		<SafeAreaView style={styles.bottom}>
			<BackButton text={<Text style={styles.headText}>{category}</Text>} />
			<SearchBar
				courses={courses}
				search={search}
				setFilteredCourses={setFilteredCourses}
				setSearch={setSearch}
			/>
			{loading ? (
				<ActivityIndicator color={"#042637"} size={50} />
			) : filteredCourses.length > 0 ? (
				<ScrollView
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ paddingBottom: 100 }}
					refreshControl={
						<RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
					}
				>
					{filteredCourses.map((item, index) => {
						return (
							<ArticleBox key={index} item={item} index={index} svgs={svgs} />
						);
					})}
				</ScrollView>
			) : (
				<Text style={{ textAlign: "center", marginTop: 20 }}>
					No courses available
				</Text>
			)}
		</SafeAreaView>
	);
};

export default CourseCategory;
