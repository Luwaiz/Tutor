import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import ActiveButton from "../components/buttons/ActiveButton";
import LoginButton from "../components/buttons/LoginButton";

const AuthScreen = ({ navigation }) => {
	const ToLogin = () => {
		navigation.navigate("Login");
	};
	const ToSignup = () => {
		navigation.navigate("Signup");
	};
	return (
		<View style={styles.container}>
			<View style={styles.topContainer}>
				{/* <Image source={require("../../assets/images/Logoswhite.png")} /> */}
			</View>
			<BottomSheet
				backgroundStyle={{ borderRadius: 30 }}
				handleComponent={null}
				snapPoints={["40%"]}
			>
				<BottomSheetView style={styles.sheet}>
					<Text style={styles.welcome}>Welcome!</Text>
					<ActiveButton title={"Sign up"} onPress={ToSignup} />
					<LoginButton title={"Log in"} onPress={ToLogin} />
				</BottomSheetView>
			</BottomSheet>
		</View>
	);
};

export default AuthScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#042637",
		alignItems: "center",
	},
	topContainer: {
		flex: 0.6,
		backgroundColor: "#042637",
		alignItems: "center",
		justifyContent: "center",
	},
	sheet: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 30,
	},
	welcome: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#042637",
		marginBottom: 20,
		marginTop: 20,
		textAlign: "center",
		
	},
});
