import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInput1 from "../components/TextInput1";
import ActiveButton from "../components/buttons/ActiveButton";
import BackButton from "../components/buttons/BackButton";
const { width, height } = Dimensions.get("screen");

const Login = ({navigation}) => {
	const ToHome = () => {
		navigation.navigate("HomeTab");
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
							text={"Email Address"}
							placeholder={"johndoe22@gmail.com"}
						/>
						<TextInput1
							text={"Password"}
							placeholder={"*************"}
							password
						/>
						<Text style={styles.forgot}>Forgot password?</Text>
						<ActiveButton title={"Login"} onPress={ToHome}/>
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