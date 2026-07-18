import {
	View,
	Text,
	Dimensions,
	ScrollView,
	ActivityIndicator,
	RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { BarChart } from "react-native-chart-kit";
import axios from "axios";
import API from "../../constants/API";
import ZustandStore from "../../hooks/ZustandStore";
import styles from "./style";
import BigHead from "../../assets/svg/BigHead.svg";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const Progress = () => {
	const [progressData, setProgressData] = useState(null);
	const [username, setaUsername] = useState("");
	const [refreshing, setRefreshing] = useState(false);
	const [loading, setLoading] = useState(false);
	const token = ZustandStore.useAuthStore((state) => state.token);

	useEffect(() => {
		Progress();
	}, []);

	const onRefresh = () => {
		setRefreshing(true);
		Progress();
		setRefreshing(false);
	};
	const Progress = async () => {
		setLoading(true);
		try {
			const response = await axios.get(API.userProgress, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setaUsername(response.data.username);
			setProgressData(response.data);
			setLoading(false);
		} catch (e) {
			console.log("errors", e.response.data);
			setLoading(false);
		}
	};

	const labels = progressData
		? Object.keys(progressData.categoriesProgress)
		: [];
	const data = progressData
		? Object.values(progressData.categoriesProgress).map(
				(category) => category.averageScore
		  )
		: [];
	const chartData = {
		labels: labels,
		datasets: [
			{
				data: data,
			},
		],
	};

	const chartConfig = {
		backgroundGradientFrom: "#ffffff",
		backgroundGradientTo: "#ffffff",
		color: (opacity = 1) => `rgba(61, 1, 85, ${opacity})`,
		labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
		barPercentage: 1,

	};

	return (
		<SafeAreaView style={styles.container}>
			{loading ? (
				<ActivityIndicator color={"#042637"} size={40} />
			) : (
				<ScrollView
					showsVerticalScrollIndicator={false}
					style={{ width, paddingHorizontal: 20 }}
					contentContainerStyle={{ paddingBottom: 100 }}
					refreshControl={
						<RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
					}
				>
					<View style={styles.topContainer}>
						<Text style={styles.title}>
							Great Job, {username}! Here's Your Progress So Far
						</Text>
						<BigHead width={200} height={200} />
					</View>
					{progressData ? (
						<View style={styles.barCard}>
							<Text style={styles.whatText}>Current Average Scores</Text>
							<BarChart
								data={chartData}
								width={width - 50}
								height={220}
								chartConfig={chartConfig}
								style={styles.barChart}
								withInnerLines={false}
								fromZero
							/>
						</View>
					) : (
						<ActivityIndicator size={30} color={"#042637"} />
					)}
					<Text style={styles.LearnText}>Learning Progress Summary</Text>
					{progressData &&
						Object.entries(progressData.categoriesProgress).map(
							([category, details]) => (
								<View
									key={category}
									style={[
										styles.subContainer,
										{
											backgroundColor:
												category === "Literature" || category === "Others"
													? "#042637"
													: "#3D0155",
										},
									]}
								>
									{/* Display category name */}
									<Text style={styles.label}>{category}</Text>

									{/* Display details */}
									<View style={styles.detailContainer}>
										<Text style={styles.info}>Average Score:</Text>
										<Text style={styles.info}>
											{details?.averageScore?.toFixed(2)}
										</Text>
									</View>
									<View style={styles.detailContainer}>
										<Text style={styles.info}>Total Quizzes Taken:</Text>
										<Text style={styles.info}>{details.totalQuizzesTaken}</Text>
									</View>
									<View style={styles.detailContainer}>
										<Text style={styles.info}>Completed Courses:</Text>
										<Text style={styles.info}>{details.completedCourses}</Text>
									</View>
									<View style={styles.detailContainer}>
										<Text style={styles.info}>Last Updated:</Text>
										<Text style={styles.info}>
											{details.lastUpdated
												? new Date(details.lastUpdated).toLocaleDateString()
												: "Not updated"}
										</Text>
									</View>
								</View>
							)
						)}
				</ScrollView>
			)}
		</SafeAreaView>
	);
};

export default Progress;
