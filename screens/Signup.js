import { Dimensions, Keyboard, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInput1 from "../components/TextInput1";
import ActiveButton from "../components/buttons/ActiveButton";
import BackButton from "../components/buttons/BackButton";
import axios from "axios";
import API from "../constants/API";
const { width, height } = Dimensions.get("screen");

const Signup = ({ navigation }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");
	const ToLogin = () => {
		navigation.navigate("Login");
	};
	const register = async () => {
		if (password !== confirmPassword) {
			alert("Passwords do not match");
		} else {
			const req = {
				username: username,
				email: email,
				password: password,
			};
			Keyboard.dismiss();
			setLoading(true);
			try {
				const response = await axios.post(API.signup, req);
				console.log(response.data);
				setLoading(false);
				setUsername("")
				setConfirmPassword("")
				setPassword("")
				setEmail("")
				ToLogin();
			} catch (e) {
				console.log(e);
				setLoading(false);
			}
		}
	};
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topCont}>
				<BackButton text={<Text style={styles.headText}>Sign Up</Text>} />
			</View>
			<BottomSheet
				snapPoints={["85%"]}
				handleComponent={null}
				backgroundStyle={{ borderRadius: 30 }}
			>
				<BottomSheetView style={styles.sheetCont}>
					<View style={styles.textInputCont}>
						<TextInput1
							text={"Username"}
							placeholder={"john doe"}
							value={username}
							onChangeText={(text) => setUsername(text)}
						/>
						<TextInput1
							text={"School Email Address"}
							placeholder={"john2022@student.babcock.edu.ng"}
							value={email}
							onChangeText={(text) => setEmail(text)}
						/>
						<TextInput1
							text={"Password"}
							placeholder={"*************"}
							password
							value={password}
							onChangeText={(text) => setPassword(text)}
						/>
						<TextInput1
							text={"Confirm Password"}
							placeholder={"*************"}
							password
							value={confirmPassword}
							onChangeText={(text) => setConfirmPassword(text)}
						/>
						<ActiveButton
							title={"Sign up"}
							onPress={register}
							loading={loading}
						/>
					</View>
				</BottomSheetView>
			</BottomSheet>
		</SafeAreaView>
	);
};

export default Signup;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#042637",
	},
	topCont: {
		flex: 1,
		backgroundColor: "#042637",
		paddingTop: 26,
	},
	headText: {
		color: "#ffffff",
		fontSize: 24,
		fontFamily: "Albert-SemiBold",
	},
	sheetCont: {
		flex: 1,
		paddingHorizontal: 16,
		paddingTop: 50,
		alignItems: "center",
	},
	textInputCont: {
		width: "100%",
		flex: 1,
	},
	OrContainer: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		height: 40,
		justifyContent: "space-between",
	},
	dash: {
		width: "47%",
		height: 1,
		backgroundColor: "black",
	},
	OrText: {
		color: "black",
		fontSize: 16,
		fontWeight: "700",
	},
});
