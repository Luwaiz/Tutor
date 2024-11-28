import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	header: {
		padding: 12,
		flexDirection: "row",
	},
	circle: {
		width: 32,
		height: 32,
		borderRadius: 20,
		backgroundColor: "#042637",
		marginRight: 16,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#000000",
		flexWrap: "wrap",
		maxWidth: 200,
	},
	imageContainer: {
		width: "100%",
		height: 250,
		alignSelf: "center",
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
	content: {
		padding: 20,
		backgroundColor: "#E0E0E0",
		borderRadius: 8,
	},
	lessons: {
		marginBottom: 30,
	},
	lessonDescription: {
		fontSize: 16,
		marginBottom: 20,
        
	},
	descriptionContainer: {
		width: "85%",
		alignSelf: "center",
		borderRadius: 10,
		position: "absolute",
		top: 200,
		backgroundColor: "#042637",
	},
	chapterContainer: {
		alignItems: "center",
		textAlign: "center",
		backgroundColor: "white",
		justifyContent: "center",
		width: "48%",
		height: 70,
		borderRadius: 10,
	},
	strongText:{
		fontWeight: "bold",
		fontSize: 16,
	},
	topContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 16,
	},
	bottomContainer: {
		backgroundColor: "white",
		padding: 20,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
    descriptionText: {
        fontSize: 14,
        marginTop: 10,
        lineHeight: 20,
        maxWidth: "100%",
    }
})
export default styles