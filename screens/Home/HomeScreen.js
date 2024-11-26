import {
	ActivityIndicator,
	Image,
	Pressable,
	ScrollView,
	Text,
	View,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import BoyBook from "../../assets/svg/BoyBook2.svg";
import LadyBook from "../../assets/svg/LadyBook2.svg";
import BigHead from "../../assets/svg/BigHead.svg";
import TechBro from "../../assets/svg/TechBro.svg";
import GirlBook from "../../assets/svg/GirlBook.svg";
import axios from "axios";
import API from "../../constants/API";
import ZustandStore from "../../hooks/ZustandStore";
import { Avatar } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
	const token = ZustandStore.useAuthStore((state) => state.token);
	const [username, setUsername] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		userDetails();
	}, []);

	const userDetails = async () => {
		setLoading(true);
		if (!token) {
			console.log("No token");
			setLoading(false);
		} else {
			try {
				const response = await axios.get(API.userDetails, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setUsername(response.data.username);
				setLoading(false);
			} catch (e) {
				console.log(e);
				setLoading(false);
			}
		}
	};

	const Profile = () => {
		navigation.navigate("Profile");
	};
	const Category = (category) => {
		navigation.navigate("Category",{category});
	}
	return (
		<SafeAreaView style={styles.container}>
				<View style={styles.topContainer}>
					<View>
						<Text style={styles.welcome}>Welcome,</Text>
						{loading ? (
							<ActivityIndicator color={"#042637"} size={30} />
						) : (
							<Text style={styles.name}>{username}</Text>
						)}
					</View>
					<Pressable onPress={Profile}>
						<Avatar.Image />
					</Pressable>
				</View>
				<Text style={styles.whatText}>What do you want to learn?</Text>
				<View style={styles.subContainer}>
					<View style={styles.leftContainer}>
						<Pressable style={styles.bigBox} onPress={()=>Category("Sciences")}>
							<BoyBook width={350} height={500} style={styles.boyBook} />
							<Text style={styles.title}>Sciences</Text>
						</Pressable>
						<Pressable style={styles.smallBox} onPress={()=>Category("Literature")}>
							<Text style={styles.Title}>Literature</Text>
							<GirlBook width={180} height={200} style={styles.ladyBook} />
						</Pressable>
					</View>
					<View style={styles.rightContainer}>
						<Pressable style={styles.smallBox} onPress={()=>Category("Tech")}>
							<Text style={styles.Title}>Tech</Text>
							<TechBro width={250} height={250} style={styles.TechBro} />
						</Pressable>
						<Pressable style={styles.bigBox} onPress={()=>Category("Others")}>
							<Text style={styles.title}>Others</Text>
							<BigHead width={250} height={250} style={styles.bigHead} />
						</Pressable>
					</View>
				</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
