import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		alignItems: "center",
		paddingTop: 20,
	},
	subContainer: {
		backgroundColor: "green",
		padding: 16,
		gap:10,
		marginVertical: 16,
		shadowColor: "#919190",
		elevation: 10,
		borderRadius: 10,
	},
	whatText:{
		fontSize: 18,
        fontWeight: "700",
        color: "#042637",
		marginLeft:16
	},
	LearnText:{
		fontSize: 18,
        fontWeight: "700",
        color: "#042637",
		marginTop: 40
	},
	barChart:{
		marginTop: 40,
		marginBottom: 10,
		alignSelf: "center",
	},
	barCard:{
		backgroundColor: "#ffffff",
        borderRadius: 10,
        marginTop: 30,
        width: width - 40,
        overflow:"hidden",
		shadowColor: "#919190",
		elevation: 10,
		paddingVertical:10
	},
	label:{
		fontSize: 16,
        fontWeight: "900",
        color: "#ffffff",
		paddingBottom:10, 
		// borderBottomColor: "#ffffff",
		// borderBottomWidth: 1,
	},
	info:{
		color: "#ffffff",
		fontWeight: "600",
		fontSize: 14,
	},
	title:{
		fontSize: 30,
		fontWeight: "900",
		color: "#042637",
		maxWidth:200,
		flexWrap:"wrap"
	},
	topContainer:{
		flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
	},
	detailContainer:{
		flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
		marginRight:1
	}
});
export default styles;
