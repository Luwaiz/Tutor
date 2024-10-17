import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppScreens from "./AppScreens";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Index = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown:false}}>
				<Stack.Screen component={AppScreens} name="AppScreens" />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Index;
