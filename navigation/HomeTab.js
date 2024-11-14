import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import Discover from "../screens/Discover/Discover";
import Courses from "../screens/Courses/Courses";

const Tab = createBottomTabNavigator();

const HomeTab = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					switch (route.name) {
						case "Home":
							iconName = focused ? "home" : "home-outline";
							break;
						case "Courses":
							iconName = focused ? "book" : "book-outline";
							break;
						case "Discover":
							iconName = focused ? "compass" : "compass-outline";
							break;
						default:
							iconName = "home";
					}
					return (
						<Ionicons
							color={focused ? "white" : "#AAC3D7"}
							name={iconName}
							size={size}
						/>
					);
				},
				tabBarLabel: ({ children, color, focused }) => (
					<Text
						style={{
							color: focused ? "white" : "#AAC3D7",
							fontWeight: "500",
							fontSize: 12,
						}}
					>
						{children}
					</Text>
				),
        tabBarItemStyle:styles.tabBarItemStyle,
				tabBarStyle: styles.tabBarStyle,
				headerShown: false,
			})}
		>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Courses" component={Courses} />
			<Tab.Screen name="Discover" component={Discover} />
		</Tab.Navigator>
	);
};

export default HomeTab;

const styles = StyleSheet.create({
	tabBarStyle: {
		backgroundColor: "#042637",
		position: "absolute",
		height: 80,
		bottom: 10,
		left: 14,
		right: 14,
		borderRadius: 20,
		borderColor:"#042637"
	},
	label: {
		fontSize: 12,
		fontWeight: "600",
		color: "white",
	},
  tabBarItemStyle: {
    paddingVertical: 18,
  },
});
