import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
        paddingHorizontal: 16
	},

	headText: {
		color: "black",
		fontSize: 24,
	},
	infoCont: {
        alignItems: "center",
	},
	avatarCont: {
		alignSelf: "center",
		marginVertical: 20,
	},
    username:{
        fontSize: 35,
        color: "black",
        fontWeight: "500",
        marginBottom: 10,
        alignSelf: "center",
    },
    email:{
        fontSize: 16,
        color: "gray",
        marginBottom: 50,
        alignSelf: "center",
    },
    NerdBook:{
        position: "absolute",
        bottom: -200,
    },
    subContainer:{
        zIndex:1
    }
});
export default styles