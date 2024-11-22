import {
	ActivityIndicator,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import Testimonials from "../../components/Testimonials";
import BlogBox from "../../components/BlogsBox";
import axios from "axios";
import API from "../../constants/API";
import ZustandStore from "../../hooks/ZustandStore";

const HomeScreen = () => {
	const token = ZustandStore.useAuthStore((state) => state.token);
	const [username, setUsername] = useState("");
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		userDetails();
	}, []);

	const userDetails = async () => {
		setLoading(true);
		if (!token) {
			console.log("No token");
			setLoading(false);
		} else {
			try {
				const response = await axios.get(API.userDetails, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				console.log("my data", response.data);
				setUsername(response.data.username);
				setLoading(false);
			} catch (e) {
				console.log(e);
				setLoading(false);
			}
		}
	};
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
				<View style={styles.subContainer}>
					<Text style={styles.welcome}>Welcome,</Text>
					{loading ? (
						<ActivityIndicator color={"#042637"} size={30} />
					) : (
						<>
							<Text style={styles.name}>{username}</Text>
						</>
					)}
				</View>
				<View style={styles.bottomText}>
					<Text style={styles.textLeft}>Becoming A wizard at English</Text>
					<Text style={styles.viewAll}>View all</Text>
				</View>
				<View style={styles.carousel}></View>
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
