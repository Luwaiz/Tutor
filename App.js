import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/Home/HomeScreen";
import Index from "./navigation";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar />
			<Index />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
