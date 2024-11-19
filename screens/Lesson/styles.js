import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		paddingBottom: 20,
	},
	header: {
		padding: 12,
		alignItems: "center",
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
		backgroundColor: "#F7F7F7",
		borderRadius: 8,
		marginTop: 200,
	},
	lessonTitle: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 16,
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
		backgroundColor: "#EDF0F7",
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
        fontSize: 16,
        marginTop: 10,
        lineHeight: 24,
        textAlign: "justify",
        maxWidth: "85%",
    }
})
export default styles