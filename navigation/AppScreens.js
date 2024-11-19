import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTab from "./HomeTab";
import Lesson from "../screens/Lesson/Lesson";
import AuthScreen from "../screens/AuthScreen";
import Signup from "../screens/Signup";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();
const AppScreens = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Auth" component={AuthScreen} />
			<Stack.Screen name="Signup" component={Signup} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen component={HomeTab} name="HomeTab" />
			<Stack.Screen name="Lesson" component={Lesson} />
		</Stack.Navigator>
	);
};

export default AppScreens;
