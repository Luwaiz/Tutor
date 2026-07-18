import { Dimensions, Keyboard, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInput1 from "../../components/TextInput1";
import ActiveButton from "../../components/buttons/ActiveButton";
import BackButton from "../../components/buttons/BackButton";
import axios from "axios";
import API from "../../constants/API";
import styles from "./style";

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
				setUsername("")
				setConfirmPassword("")
				setPassword("")
				setEmail("")
				ToLogin();
			} catch (e) {
				const message = e.response?.data?.data || e.response?.data?.message || "Unable to sign up. Please try again.";
				console.log(message);
				alert(message);
			} finally {
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

