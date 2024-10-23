import {
	Dimensions,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");

const BlogBox = () => {
	const data = [
		{ id: 1, name: "Educational themes" ,image: require("../assets/images/image1.jpg")},
		{ id: 2, name: "Mind blowing thesis and research",image: require("../assets/images/image2.jpg" )},
		{ id: 3, name: "Field study and accreditation",image: require("../assets/images/image3.jpg" ) },
		{ id: 4, name: "Educational themes",image: require("../assets/images/image2.jpg" ) },
		{ id: 5, name: "Mind blowing thesis and research" ,image: require("../assets/images/image1.jpg" )},
		{ id: 6, name: "Field study and accreditation",image: require("../assets/images/image3.jpg" ) },
		{ id: 7, name: "Educational themes",image: require("../assets/images/image3.jpg" ) },
		{ id: 8, name: "Mind blowing thesis and research",image: require("../assets/images/image2.jpg" ) },
		{ id: 9, name: "Field study and accreditation" ,image: require("../assets/images/image1.jpg" )},
		{ id: 10, name: "Educational themes",image: require("../assets/images/image2.jpg" ) },
		{ id: 11, name: "Mind blowing thesis and research",image: require("../assets/images/image1.jpg" ) },
		{ id: 12, name: "Field study and accreditation" ,image: require("../assets/images/image3.jpg" )},
		{ id: 13, name: "Educational themes" ,image: require("../assets/images/image1.jpg" )},
		{ id: 14, name: "Mind blowing thesis and research",image: require("../assets/images/image2.jpg" ) },
		{ id: 15, name: "Field study and accreditation" ,image: require("../assets/images/image3.jpg" )},
		{ id: 16, name: "Educational themes" ,image: require("../assets/images/image1.jpg" )},
	];
	return (
		<View>
			<View>
				{data.map((stuff) => (
					<Testimony key={stuff.id} item={stuff} />
				))}
			</View>
		</View>
	);
};

const Testimony = ({ item }) => {
	return (
		<View style={styles.box}>
			<Image style={styles.image} source={item.image} />
			<View style={styles.leftContainer}>
				<Text style={styles.title}>{item.name}</Text>
				<Text style={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
			</View>
		</View>
	);
};

export default BlogBox;

const styles = StyleSheet.create({
	box: {	
		marginBottom: 20,
		width: width - 50,
		alignSelf: "center",
		height: 120,
		borderRadius: 5,
		flexDirection: "row",
	},
	container: {
		marginTop: 10,
	},
	image:{
		resizeMode:"cover",
		width: "35%",
        height: "100%",
        borderRadius: 5,
	},
	leftContainer: {
		width: "65%",
        paddingHorizontal: 10,
		justifyContent:"space-between"
	},
	title:{
		fontSize: 16,
        fontWeight: "500",
        marginBottom: 5,
	},
	subTitle:{
        fontSize: 14,
		fontWeight: "300",
    },
});
