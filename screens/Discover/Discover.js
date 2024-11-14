import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';
import BottomDiscover from "../../components/BottomDiscover";
const {width, height} = Dimensions.get("window")

const Discover = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.SearchBar}>
			<Feather name="search" size={24} color="#ffffff" />
				<TextInput
				placeholder="Search"
				placeholderTextColor="#ffffff"
				cursorColor={"#ffffff"}
				 style={styles.Search}></TextInput>
			</View>
			<BottomDiscover/>
		</SafeAreaView>
	);
};

export default Discover;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#042637",
		alignItems: "center"
	},
	SearchBar: {
		backgroundColor: "#8190A2",
        borderRadius: 30,
		width: width-50.2,
		height:50,
		flexDirection: "row",
		alignItems: "center",
        paddingHorizontal: 10,
	},
	Search: {
        fontSize: 16,
        paddingHorizontal: 20,
		flex:1,
		height:"100%",
		alignItems: "center",
		justifyContent: "center",
		color: "#ffffff"
    }

});
