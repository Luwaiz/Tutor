import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet,View } from "react-native";
import Index from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
	return (
		<SafeAreaProvider style={styles.container}>
			<StatusBar />
			<Index />
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
