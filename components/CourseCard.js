import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
const {width,height} = Dimensions.get("screen")

const CourseCard = () => {
	return (
		<View style={styles.box}>
		<View style={styles.topBox}>
			<View style={styles.circle}/>
			<Text style={styles.courseName}>Geography</Text>
		</View>
			<View style={styles.bottomBox}></View>
		</View>
	);
};

export default CourseCard;

const styles = StyleSheet.create({
	box: {
        backgroundColor: "#Ffffff",
		width:"100%",
		height: 180,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
		overflow:"hidden"
    },
	topBox: {
        width:"100%",
        height:60,
		padding:10,
        alignItems:"center",
		flexDirection:"row"
	},
	circle: {
		width: 36,
        height: 36,
        borderRadius: 20,
        backgroundColor: "#042637",
		marginRight: 16,
	},
	bottomBox: {
		backgroundColor:"#EDF0F7",
		width:"100%",
		height:50,
		marginTop:"auto"
	},
	courseName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000"
    }
});
