import { Dimensions, Keyboard, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInput1 from "../../components/TextInput1";
import ActiveButton from "../../components/buttons/ActiveButton";
import BackButton from "../../components/buttons/BackButton";
import axios from "axios";
import API from "../../constants/API";
import ZustandStore from "../../hooks/ZustandStore";
import styles from "./style";

const Login = ({ navigation }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const setToken = ZustandStore.useAuthStore((state) => state.setToken);
		const [loading, setLoading] = useState(false);

	const ToHome = () => {
		navigation.navigate("HomeTab");
	};

	const SignIn = async () => {
		Keyboard.dismiss();
		if (username.length === 0 || password.length === 0) {
			alert("Please fill in all fields");
			return;
		}
		setLoading(true);
		const req = {
			username: username,
			password: password,
		};
		try {
			const response = await axios.post(API.login, req);
			await setToken(response.data.token);
			ToHome();
			setUsername("");
			setPassword("");
		} catch (e) {
			const message = e.response?.data?.data || e.response?.data?.message || "Unable to log in. Please try again.";
			console.log(message);
			alert(message);
		} finally {
			setLoading(false);
		}
	};
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topCont}>
				<BackButton text={<Text style={styles.headText}>Login</Text>} />
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
							text={"Password"}
							placeholder={"*************"}
							password
							value={password}
							onChangeText={(text) => setPassword(text)}
						/>
						<Text style={styles.forgot}>Forgot password?</Text>
						<ActiveButton title={"Login"} onPress={SignIn} loading={loading} />
					</View>
				</BottomSheetView>
			</BottomSheet>
		</SafeAreaView>
	);
};

export default Login;
