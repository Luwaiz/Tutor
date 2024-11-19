import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';
import BottomDiscover from "../../components/BottomDiscover";
import styles from "./styles";

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


