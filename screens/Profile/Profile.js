import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import BackButton from "../../components/buttons/BackButton";
import { Avatar } from "react-native-paper";
import Details from "../../components/Details";
import API from "../../constants/API";
import axios from "axios";
import ZustandStore from "../../hooks/ZustandStore";
import ActiveButton from "../../components/buttons/ActiveButton";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import NerdBook from "../../assets/svg/Questions.svg";

const ProfilePage = ({ navigation, route }) => {
	const token = ZustandStore.useAuthStore((state) => state.token);
	const clearToken = ZustandStore.useAuthStore((state) => state.clearToken);
	const { username, email } = route.params;

	const [loading, setLoading] = useState(false);

	const LogOut = () => {
		setLoading(true);
		clearToken();
		setLoading(false);
		navigation.navigate("Auth");
	};

	return (
		<SafeAreaView style={styles.container}>
		<View style={styles.subContainer}>

			<BackButton text={<Text style={styles.headText}>Profile</Text>} />
			<View style={styles.avatarCont}>
				<Avatar.Text
					label={username
						.split(" ")
						.map((n) => n[0])
						.join("")}
					color="#ffffff"
					style={{
						backgroundColor: "#3D0155",
						borderColor: "#042659",
						borderWidth: 1,
					}}
					size={150}
				/>
			</View>
			<View style={styles.infoCont}>
				<Text style={styles.username}>{username}</Text>
				<Text style={styles.email}>{email}</Text>
			</View>
			<ActiveButton title={"Log out"} onPress={LogOut} loading={loading} />
		</View>
			<NerdBook style={styles.NerdBook}/>
		</SafeAreaView>
	);
};

export default ProfilePage;
