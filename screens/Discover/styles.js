import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#042637",
		alignItems: "center"
	},
	SearchBar: {
		backgroundColor: "#8190A2",
        borderRadius: 30,
		width: width-50.2,
		height:50,
		flexDirection: "row",
		alignItems: "center",
        paddingHorizontal: 10,
	},
	Search: {
        fontSize: 16,
        paddingHorizontal: 20,
		flex:1,
		height:"100%",
		alignItems: "center",
		justifyContent: "center",
		color: "#ffffff",
		zIndex:1
    },
	College:{
		position: "absolute",
        left: -20, // Shift it to the right (negative value moves outside the box)
        top: -150,
	}

});
export default styles