import {
	ActivityIndicator,
	Button,
	Dimensions,
	Image,
	Modal,
	Pressable,
	StyleSheet,
	Text,
	ToastAndroid,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import ZustandStore from "../hooks/ZustandStore";
import API from "../constants/API";
import axios from "axios";
const { width, height } = Dimensions.get("window");

const ArticleBox = ({ item, index,svgs}) => {
	const token = ZustandStore.useAuthStore((state) => state.token);
	const [modal, setModal] = useState(false);
	const [loading, setLoading] = useState(false);
	const courseId = encodeURIComponent(item._id);
	const trimText = (sentence) => {
		if (sentence.length > 40) {
			return sentence.substring(0, 40) + "...";
		} else {
			return sentence;
		}
	};

	const SvgImage = svgs[index % svgs.length];

	const Enroll = async () => {
		setLoading(true);
		if (!token) {
			console.log("No token");
			setLoading(false);
		} else {
			try {
				const response = await axios.post(
					`${API.enroll}/${courseId}`,
					{},
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				console.log("enrolled successfully", response.data);
				setLoading(false);
				setModal(false);
				successToast();
			} catch (error) {
				console.log(error.response.data);
				setLoading(false);
				setModal(false);
				if (error.response.data.message === "You are already enrolled in this course"){
					enrolledToast();
				}else{
					failedToast();
				}
			}
		}
	};

	const successToast = () => {
		ToastAndroid.show('Enrolled successfully !', ToastAndroid.SHORT);
	  };
	
	  const enrolledToast = () => {
		ToastAndroid.show('You are already enrolled in this course', ToastAndroid.SHORT);
	  }

	  const failedToast = () => {
		ToastAndroid.show('Failed to enroll', ToastAndroid.SHORT);
	  }

	return (
		<>
			<Pressable
				onPress={() => setModal(true)}
				style={[
					styles.container,
					{ backgroundColor: index % 2 ? "#3D0155" : "#042637" },
				]}
			>
				<Text style={styles.title}>{item.courseName}</Text>
				<SvgImage style={styles.Image}/>
			</Pressable>
			<Modal statusBarTranslucent visible={modal} transparent>
				<View style={styles.modal}>
					<View style={styles.modalContainer}>
						<Text style={styles.modalTitle}>{item.courseName}</Text>
						{loading && <ActivityIndicator color={"#042637"} size={30} />}
						<View style={styles.buttons}>
							<TouchableOpacity
								onPress={Enroll}
								style={[
									styles.button,
									{ backgroundColor: "#042637", borderColor: "white" },
								]}
							>
								<Text style={[styles.buttonText, { color: "white" }]}>
									Enroll
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => setModal(false)}
								style={[
									styles.button,
									{ borderColor: "#042637", backgroundColor: "white" },
								]}
							>
								<Text style={[styles.buttonText, { color: "#042637" }]}>
									Cancel
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</>
	);
};

export default ArticleBox;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 150,
		justifyContent: "space-between",
		padding: 16,
		backgroundColor: "green",
		marginVertical: 10,
		borderRadius: 10,
		shadowColor: "#919190",
		elevation: 15,
		overflow: "hidden",
	},
	Image:{
		position: "absolute",
		right:-110,
		bottom:-10
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		flexWrap: "wrap",
		maxWidth: 0.7 * width,
		color: "#ffffff",
	},
	subTitle: {
		fontSize: 16,
		marginTop: 10,
		color: "#ffffff",
	},
	modal: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		flex: 1,
	},
	modalContainer: {
		width: "80%",
		backgroundColor: "white",
		borderRadius: 20,
		padding: 30,
		alignItems: "center",
	},
	buttons: {
		marginTop: 50,
		flexDirection: "row",
		gap: 50,
	},
	button: {
		backgroundColor: "green",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 5,
		borderWidth: 1,
	},
	modalTitle: {
		fontSize: 20,
		fontWeight: "bold",
	},
	buttonText: {
		fontSize: 16,
		fontWeight: "bold",
	},
});
