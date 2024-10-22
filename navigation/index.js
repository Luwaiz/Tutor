import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppScreens from "./AppScreens";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Index = () => {
	return (
		<NavigationContainer>
				<AppScreens/>
		</NavigationContainer>
	);
};

export default Index;
