import { StyleSheet } from "react-native";


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
export default styles;