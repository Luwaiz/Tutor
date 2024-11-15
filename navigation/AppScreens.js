import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home/HomeScreen";
import HomeTab from "./HomeTab";
import Carousel from "../components/Carousel";
import Lesson from "../screens/Lesson/Lesson";

const Stack = createNativeStackNavigator();
const AppScreens = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen component={HomeTab} name="HomeTab" />
			<Stack.Screen name="Lesson" component={Lesson} />
		</Stack.Navigator>
	);
};

export default AppScreens;
