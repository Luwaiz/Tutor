import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import Testimonials from "../../components/Testimonials";
import BlogBox from "../../components/BlogsBox";
import Carousel from "../../components/Carousel";

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={{paddingBottom:80}}>
				<View style={styles.subContainer}>
					<Text style={styles.welcome}>Welcome,</Text>
					<Text style={styles.name}>Saloom.Jr</Text>
					<View style={styles.bottomText}>
						<Text style={styles.textLeft}>Becoming A wizard at English</Text>
						<Text style={styles.viewAll}>View all</Text>
					</View>
				</View>
				<View style={styles.carousel}>
				</View>
				<View style={styles.subContainer}>
					<Text style={styles.textLeft}>Students Testimonials</Text>
					<Testimonials />
					<View style={styles.blogCont}>
						<Text style={styles.blogTitle}>Blogs</Text>
						<Text style={styles.viewAll}>View all</Text>
					</View>
					<BlogBox />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
