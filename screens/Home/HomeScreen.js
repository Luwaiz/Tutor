import {
	ActivityIndicator,
	Dimensions,
	Image,
	Pressable,
	ScrollView,
	Text,
	View,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import BoyBook from "../../assets/svg/BoyBook2.svg";
import BigHead from "../../assets/svg/BigHead.svg";
import TechBro from "../../assets/svg/TechBro.svg";
import GirlBook from "../../assets/svg/GirlBook.svg";
import axios from "axios";
import API from "../../constants/API";
import ZustandStore from "../../hooks/ZustandStore";
import { Avatar } from "react-native-paper";
import { BarChart } from "react-native-chart-kit";
const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
	const token = ZustandStore.useAuthStore((state) => state.token);
	const [username, setUsername] = useState("");
	const [progressData, setProgressData] = useState(null);
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		userDetails();
		Progress();
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
				setUsername(response.data.username);
				setEmail(response.data.email);
				setLoading(false);
			} catch (e) {
				console.log(e);
				setLoading(false);
			}
		}
	};

	const Progress = async () => {
		try {
			const response = await axios.get(API.userProgress, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log(response.data);
			setProgressData(response.data);
		} catch (e) {
			console.log("errors", e.response.data);
		}
	};

	const labels = Object.keys(progressData !== null && progressData.categoriesProgress);
	const data = Object.values(progressData !== null && progressData.categoriesProgress).map(
		(category) => category.averageScore
	);
	const chartData = {
		labels: labels,
		datasets: [
			{
				data: data,
			},
		],
	};
	const chartConfig = {
		backgroundGradientFrom: "#fff",
		backgroundGradientTo: "#fff",
		color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
		labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
		barPercentage: 0.5,
	};

	const Profile = () => {
		navigation.navigate("Profile", { username, email });
	};

	const Category = (category) => {
		navigation.navigate("Category", { category });
	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
				<View style={styles.topContainer}>
					<View>
						<Text style={styles.welcome}>Welcome,</Text>
						<Text style={styles.name}>
							{loading ? (
								<ActivityIndicator color={"#042637"} size={30} />
							) : (
								username
							)}
						</Text>
					</View>
					<Pressable onPress={Profile}>
						<Avatar.Text
							size={80}
							label={username
								.split(" ")
								.map((n) => n[0])
								.join("")}
							color="#ffffff"
							style={{
								backgroundColor: "#3D0155",
								borderColor: "#042659",
								borderWidth: 1,
							}}
						/>
					</Pressable>
				</View>
				<BarChart
					data={chartData}
					width={width}
					height={220}
					chartConfig={chartConfig}
		
				/>
				<Text style={styles.whatText}>What do you want to learn?</Text>
				<View style={styles.subContainer}>
					<View style={styles.leftContainer}>
						<Pressable
							style={styles.bigBox}
							onPress={() => Category("Sciences")}
						>
							<BoyBook width={350} height={500} style={styles.boyBook} />
							<Text style={styles.title}>Sciences</Text>
						</Pressable>
						<Pressable
							style={styles.smallBox}
							onPress={() => Category("Literature")}
						>
							<Text style={styles.Title}>Literature</Text>
							<GirlBook width={180} height={200} style={styles.ladyBook} />
						</Pressable>
					</View>
					<View style={styles.rightContainer}>
						<Pressable style={styles.smallBox} onPress={() => Category("Tech")}>
							<Text style={styles.Title}>Tech</Text>
							<TechBro width={250} height={250} style={styles.TechBro} />
						</Pressable>
						<Pressable style={styles.bigBox} onPress={() => Category("Others")}>
							<Text style={styles.title}>Others</Text>
							<BigHead width={250} height={250} style={styles.bigHead} />
						</Pressable>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
