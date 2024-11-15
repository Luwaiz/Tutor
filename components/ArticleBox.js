import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ArticleBox = ({item}) => {

	return (
		<View style={styles.container}>
			<Image source={item.image}  style={styles.image}/>
			<View style={styles.content}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.subTitle}>Tips for Success</Text>
            </View>
		</View>
	);
};

export default ArticleBox;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 130,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
	},
    content: {
        width: "70%",
        height:"100%",
        padding: 20,

    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    subTitle: {
        fontSize: 16,
    }
});
