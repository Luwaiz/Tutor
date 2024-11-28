import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import CircularProgress from "react-native-circular-progress-indicator";
import Gift from "../../assets/svg/Gift.svg"
import Celebrate from "../../assets/svg/Celebrate.svg"
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
					progressValueColor={"#3D0155"}
					activeStrokeColor={"#042637"}
					inActiveStrokeColor={"#3D0155"}
					inActiveStrokeOpacity={0.5}
					inActiveStrokeWidth={20}
					activeStrokeWidth={23}
					valueSuffix={`/${total * 10}`}
					progressValueFontSize={30}
				/>
			</View>
			<Celebrate height={300} width={300} style={styles.Celebrate}/>
			<View style={styles.scoreContainers}>
				<View style={[styles.scoreCont, { backgroundColor: "#042637" }]}>
					<Text style={styles.text}>{score}</Text>
					<Text style={styles.text}>correct</Text>
				</View>
				<View style={[styles.scoreCont, { backgroundColor:  "#3D0155" }]}>
					<Text style={styles.text}>{lost}</Text>
					<Text style={styles.text}>Incorrect</Text>
				</View>
			</View>
			<Gift height={200} width={200} style={styles.Gift}/>
                <ActiveButton title={"Proceed"} onPress={proceed}/>
		</SafeAreaView>
	);
};

export default Score;
