import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTab from "./HomeTab";
import Lesson from "../screens/Lesson/Lesson";
import AuthScreen from "../screens/AuthScreen";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import Quiz from "../screens/quizzes/Quiz";
import Score from "../screens/ScorePage/Score";
import ProfilePage from "../screens/Profile/Profile";
import CourseCategory from "../screens/CourseCategory/CourseCategory";

const Stack = createNativeStackNavigator();
const AppScreens = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Auth" component={AuthScreen} />
			<Stack.Screen name="Signup" component={Signup} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen component={HomeTab} name="HomeTab" />
			<Stack.Screen name="Lesson" component={Lesson} />
			<Stack.Screen name="Quiz" component={Quiz} />
			<Stack.Screen name="Quiz Result" component={Score} />
			<Stack.Screen name="Profile" component={ProfilePage} />
			<Stack.Screen name="Category" component={CourseCategory} />
		</Stack.Navigator>
	);
};

export default AppScreens;
