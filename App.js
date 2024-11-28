import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Index from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";

export default function App() {
	return (
		<GestureHandlerRootView style={styles.container}>
			<PaperProvider>
				<SafeAreaProvider style={styles.container}>
					<StatusBar />
					<Index />
				</SafeAreaProvider>
			</PaperProvider>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
