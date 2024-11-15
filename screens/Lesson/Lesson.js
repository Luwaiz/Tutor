import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const Lesson = ({ route }) => {
	const { courseTitle, image } = route.params;
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Ionicons name="chevron-back-sharp" size={30} color="#8190A2" />
				<View style={styles.circle} />
				<Text style={styles.title}>{courseTitle}</Text>
			</View>
			<View style={styles.imageContainer}>
				{/* <Image style={styles.image} source={image} /> */}
			</View>
			<View style={styles.content}>
				<Text style={styles.lessonTitle}>Lesson Title</Text>
				<Text style={styles.lessonDescription}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
					facilisi. Nam nec urna ac ipsum tincidunt tempor. Sed tincidunt, nunc
					et gravida eleifend, mauris arcu viverra neque, id iaculis nisi metus
					at nisi. Proin viverra, justo vel pharetra ullamcorper, eros velit
					pellentesque nisi, vel varius nunc turpis nec metus. Donec
					consectetur, urna sed efficitur tristique, risus diam tempus diam, vel
					facilisis metus eros ut velit. Sed vel diam at nisl bibendum
					facilisis. Donec euismod, velit ut condimentum facilisis, justo velit
					sagittis orci, in luctus velit velit et felis.
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default Lesson;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		paddingBottom: 20,
	},
	header: {
		padding: 12,
		alignItems: "center",
		flexDirection: "row",
	},
	circle: {
		width: 32,
		height: 32,
		borderRadius: 20,
		backgroundColor: "#042637",
		marginRight: 16,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#000000",
		flexWrap: "wrap",
		maxWidth: 200,
	},
	content: {
		padding: 20,
		backgroundColor: "#F7F7F7",
		borderRadius: 8,
		marginTop: 20,
	},
	lessonTitle: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 16,
	},
	lessonDescription: {
		fontSize: 16,
		marginBottom: 20,
	},
});
