import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
	bottom: {
		flex:1,
		backgroundColor: "#ffffff",
		padding: 20,
	},
	header: {
		fontSize: 22,
		fontWeight: "500",
		paddingBottom: 10,
	},
	headText: {
		color: "black",
		fontSize: 24,
		fontWeight: "500",
	},
});
export default styles;
