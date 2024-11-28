import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	subContainer: {
		padding: 16,
		width: width,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	topContainer: {
		padding: 16,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	welcome: {
		fontSize: 35,
		fontWeight: "500",
		color: "#042659",
	},
	name: {
		fontSize: 45,
		fontWeight: "900",
		color: "#042637",
		maxWidth:300,
		flexWrap:"wrap"
	},
	whatText:{
		fontSize: 18,
        fontWeight: "700",
        color: "#042637",
		marginLeft:16
	},
	bigBox: {
		backgroundColor: "#042637",
		borderRadius: 10,
		marginBottom: 10,
		height: 300,
		width: width / 2 - 20,
		overflow:"hidden"
	},
	smallBox: {
		backgroundColor: "#3D0155",
		borderRadius: 10,
		padding: 16,
		marginBottom: 10,
		height: 220,
		width: width / 2 - 20,
		overflow:"hidden"
	},
	title:{
		fontSize: 24,
		fontWeight: "500",
		marginTop: 16,
		marginLeft: 16,
		color: "white"
	},
	Title:{
		fontSize: 24,
        fontWeight: "500",
        color: "white"
	},
	 boyBook: {
		position: "absolute",
		top: -70,
		left: -100, 
	},
	ladyBook: {
		position: "absolute",
		left: -15, 
		top: 50,
	},
	bigHead:{
		position: "absolute",
		left: -30, 
		top: 70,
	},
	TechBro:{
		position: "absolute",
        left: -20, 
        top: 30,
	}
});
export default styles;
