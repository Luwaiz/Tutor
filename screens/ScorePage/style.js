import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		paddingHorizontal: 16,
		alignItems: "center",
	},
	scoreContainers: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: width - 100,
        marginBottom: 150
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
        textAlign:"center",
        marginBottom: 10,
		marginTop:30
	},
	topContainer: {
        width: width - 100,
        marginBottom: 195,
        alignItems: "center",
	},
	scoreCont: {
        width:"45%",
        height:100,
        borderRadius:10,
        padding:16,
        shadowColor: "#919193",
		elevation: 16,
        justifyContent:"space-between"
    },
    text:{
        fontSize: 18,
        fontWeight: "500",
		color:"#ffffff"
    },
	Celebrate:{
		position: "absolute",
		top: 230,
		zIndex:11
	},
	Gift:{
		position: "absolute",
        bottom: 80,
        left: -50,
	}
});
export default styles;
