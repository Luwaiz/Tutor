import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const BottomDiscover = () => {
	return (
        <BottomSheet
        snapPoints={["50%"]}
        backgroundStyle={{ borderRadius: 30 }}
        enablePanDownToClose={false}
        handleComponent={null}
    >
        <BottomSheetView style={styles.bottom}>
            <Text style={styles.title}>Discover</Text>
            <Text style={styles.subTitle}>
                Discover new tutors, courses, and resources
            </Text>
    
        </BottomSheetView>
    </BottomSheet>
	);
};

export default BottomDiscover;

const styles = StyleSheet.create({
	bottomContainer: {
		position: "absolute",
		bottom: 0,
		width: "100%",
		backgroundColor: "white",
	},
	bottom: {
		flex: 1,
		backgroundColor: "#F4F4F4",
		padding: 20,
		borderRadius: 30,
	},
});
