import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home/HomeScreen";

const Stack = createNativeStackNavigator();
const AppScreens = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown:false}}>
			<Stack.Screen component={HomeScreen} name="Home" />
		</Stack.Navigator>
	);
};

export default AppScreens;
