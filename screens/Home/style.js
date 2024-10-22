import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	subContainer: {
		padding: 16,
	},
	welcome: {
		fontSize: 20,
		fontWeight: "500",
	},
	name: {
		fontSize: 24,
		fontWeight: "900",
	},
	bottomText: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingTop: 50,
		alignItems:"center"
	},
	textLeft: {
		fontSize: 18,
		fontWeight: "500",
	},
    blogCont:{
		flexDirection:"row",
		justifyContent:"space-between",
        paddingTop:20,
        paddingBottom:20,
		alignItems:"center"
	},
	blogTitle:{
		fontSize:18,
        fontWeight:"500",
	},
	viewAll:{
		fontSize:12,
        fontWeight:"400",
        color:"#007bff",
	}
});
export default styles;
