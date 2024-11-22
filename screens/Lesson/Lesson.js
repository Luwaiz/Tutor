import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const Lesson = ({ route, navigation }) => {
	const { courseName, image, hours, lessons } = route.params;
	const GoBack = () => {
		navigation.goBack();
	};
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={GoBack}>
					<Ionicons name="chevron-back-sharp" size={30} color="#8190A2" />
				</TouchableOpacity>
				<View style={styles.circle} />
				<Text style={styles.title}>{courseName}</Text>
			</View>
			<ScrollView>

			<View style={styles.imageContainer}>
				<Image style={styles.image} source={image} />
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
			<View style={styles.descriptionContainer}>
				<View style={styles.topContainer}>
					<View style={styles.chapterContainer}>
						<Text style={styles.strongText}>{lessons}</Text>
						<Text style={styles.strongText}>Lessons</Text>
					</View>
					<View style={styles.chapterContainer}>
						<Text style={styles.strongText}>{hours}</Text>
						<Text style={styles.strongText}>Hours</Text>
					</View>
				</View>
				<View style={styles.bottomContainer}>
					<Text style={styles.strongText}>What you will learn</Text>
					<Text style={styles.descriptionText}>Research work{"\n"}Methodology review</Text>
				</View>
			</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Lesson;
