import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
const {width, height} =Dimensions.get("window")

const SearchBar = ({ search, setSearch, courses,setFilteredCourses }) => {

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

	const Clear = () => {
		setSearch("");
	};
	return (
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
			<AntDesign
				name="closecircleo"
				size={24}
				color="#ffffff"
				onPress={Clear}
			/>
		</View>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
    SearchBar: {
		backgroundColor: "#8190A2",
        borderRadius: 30,
		width: width-40,
		height:50,
		flexDirection: "row",
		alignItems: "center",
        paddingHorizontal: 10,
		zIndex:1,
	},
	Search: {
        fontSize: 16,
        paddingHorizontal: 20,
		flex:1,
		height:"100%",
		alignItems: "center",
		justifyContent: "center",
		color: "#ffffff",
    },
});
