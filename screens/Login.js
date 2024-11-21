import { Dimensions, Keyboard, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInput1 from "../components/TextInput1";
import ActiveButton from "../components/buttons/ActiveButton";
import BackButton from "../components/buttons/BackButton";
import axios from "axios";
import API from "../constants/API";
import useAuthStore from "../hooks/ZustandStore";
const { width, height } = Dimensions.get("screen");

const Login = ({ navigation }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const setToken = useAuthStore((state) => state.setToken);
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
			console.log(response.data.token);
			await setToken(response.data.token);
			console.log("response successful");
			ToHome();
			setLoading(false);
			setUsername("");
			setPassword("");
		} catch (e) {
			console.log(e);
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
	forgot: {
		alignSelf: "flex-end",
		marginTop: -10,
		marginBottom: 16,
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
