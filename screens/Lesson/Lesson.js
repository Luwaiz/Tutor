import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import ActiveButton from "../../components/buttons/ActiveButton";

const Lesson = ({ route, navigation }) => {
	const { courseName, image, hours, lessons, content,_id,SvgImage } = route.params;
	const [height, setHeight] = useState();
	console.log(content);
	const GoBack = () => {
		navigation.goBack();
	};
	const TakeQuiz= () => {
		navigation.navigate("Quiz", { courseName, hours, lessons, content,_id });
	}
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
					<SvgImage/>
				</View>

				<View style={[styles.content, { paddingTop: height }]}>
					{content.map((item, index) => (
						<View key={index} style={styles.lessons}>
							<Text style={styles.strongText}>{item.title}</Text>
							<Text style={styles.descriptionText}>{item.description}</Text>
						</View>
					))}
				<ActiveButton title={"Take Quiz"} onPress={TakeQuiz}/>
				</View>
				<View
					style={styles.descriptionContainer}
					onLayout={(event) => {
						const { height } = event.nativeEvent.layout;
						console.log(height);
						setHeight(height);
					}}
				>
					<View style={styles.topContainer}>
						<View style={styles.chapterContainer}>
							<Text style={styles.strongText}>{lessons}</Text>
							<Text style={styles.strongText}>Lessons</Text>
						</View>
						<View style={styles.chapterContainer}>
							{hours.length > 1 ? (
								<Text style={styles.strongText}>{hours}</Text>
							) : (
								<Text style={styles.strongText}>0{hours}</Text>
							)}
							<Text style={styles.strongText}>Hours</Text>
						</View>
					</View>
					<View style={styles.bottomContainer}>
						<Text style={styles.strongText}>What you will learn</Text>
						{content.map((item, index) => (
							<Text key={index} style={styles.descriptionText}>Lesson {index+1}: {item.title}
							</Text>
						))}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Lesson;
