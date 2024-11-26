import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import CircularProgress from "react-native-circular-progress-indicator";
import ActiveButton from "../../components/buttons/ActiveButton";

const Score = ({ route, navigation }) => {

	const { total, lost, score } = route.params;
    const proceed=()=>{
        navigation.navigate("Home");
    }
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topContainer}>
				<Text style={styles.title}>You have answered a total of {total} questions</Text>
				<CircularProgress
					value={score * 10}
					radius={80}
					progressValueColor={"#D4D9E2"}
					activeStrokeColor={"#042637"}
					inActiveStrokeColor={"#D4D9E2"}
					inActiveStrokeOpacity={0.5}
					inActiveStrokeWidth={20}
					activeStrokeWidth={23}
					valueSuffix={`/${total * 10}`}
					progressValueFontSize={30}
				/>
			</View>
			<View style={styles.scoreContainers}>
				<View style={[styles.scoreCont, { backgroundColor: "#042637" }]}>
					<Text style={[styles.text, { color: "#ffffff" }]}>{score}</Text>

					<Text style={[styles.text, { color: "#ffffff" }]}>correct</Text>
				</View>
				<View style={[styles.scoreCont, { backgroundColor: "#EDF0F7" }]}>
					<Text style={styles.text}>{lost}</Text>

					<Text style={styles.text}>Incorrect</Text>
				</View>
			</View>
                <ActiveButton title={"Proceed"} onPress={proceed}/>
		</SafeAreaView>
	);
};

export default Score;
