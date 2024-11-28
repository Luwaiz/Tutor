import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#042637",
		alignItems: "center"
	},
	College:{
		position: "absolute",
        left: -20, // Shift it to the right (negative value moves outside the box)
        top: -150,
	}

});
export default styles