import {
	Dimensions,
	FlatList,
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("screen");

const Testimonials = () => {
	const data = [
		{
			id: 1,
			name: "Educational themes",
			image: require("../assets/images/image1.jpg"),
		},
		{
			id: 2,
			name: "Mind blowing thesis and research",
			image: require("../assets/images/image2.jpg"),
		},
		{
			id: 3,
			name: "Field study and accreditation",
			image: require("../assets/images/image3.jpg"),
		},
		{
			id: 4,
			name: "Educational themes",
			image: require("../assets/images/image2.jpg"),
		},
		{
			id: 5,
			name: "Mind blowing thesis and research",
			image: require("../assets/images/image1.jpg"),
		},
		{
			id: 6,
			name: "Field study and accreditation",
			image: require("../assets/images/image3.jpg"),
		},
		{
			id: 7,
			name: "Educational themes",
			image: require("../assets/images/image3.jpg"),
		},
		{
			id: 8,
			name: "Mind blowing thesis and research",
			image: require("../assets/images/image2.jpg"),
		},
	];
	return (
		<View>
			<ScrollView
				contentContainerStyle={styles.container}
				horizontal
				showsHorizontalScrollIndicator={false}
				bounces={false}
				alwaysBounceHorizontal={false}
			>
				{data.map((items) => (
					<Testimony key={items.id} item={items} />
				))}
			</ScrollView>
		</View>
	);
};

const Testimony = ({ item }) => {
	return (
		<View style={styles.box}>
			<ImageBackground style={styles.BackgroundImage} source={item.image}>
				<View style={styles.overlay}/>
				<Text style={styles.courseName}>{item.name}</Text>
			</ImageBackground>
		</View>
	);
};
export default Testimonials;

const styles = StyleSheet.create({
	box: {
		marginBottom: 10,
		width: width - 100,
		alignSelf: "center",
		height: 130,
		borderRadius: 5,
		overflow: "hidden",
	},
	container: {
		gap: 20,
		marginTop: 10,
	},
	BackgroundImage: {
		width: "100%",
		height: "100%",
		borderRadius: 5,
		justifyContent:"flex-end"
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0,0,0,0.4)",
	},
	courseName:{
		color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        padding: 10,
		textAlign:"right",
	}
});
