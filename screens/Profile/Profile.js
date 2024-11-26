import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import BackButton from "../../components/buttons/BackButton";
import { Avatar } from "react-native-paper";
import Details from "../../components/Details";
import API from "../../constants/API";
import axios from "axios";
import ZustandStore from "../../hooks/ZustandStore";
import ActiveButton from "../../components/buttons/ActiveButton";
// import Avatar from "../../assets/svg/Frame 91profile.svg";

const ProfilePage = ({navigation}) => {

    const token = ZustandStore.useAuthStore((state) => state.token);
	const clearToken = ZustandStore.useAuthStore((state) => state.clearToken);

	const [username, setUsername] = useState("");
    const [email,setEmail] = useState("");
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
                setEmail(response.data.email)
				setLoading(false);
			} catch (e) {
				console.log(e);
				setLoading(false);
			}
		}
	};
	const LogOut=()=>{
		clearToken();
		navigation.navigate("Auth")
	}

	return (
		<View style={styles.container}>
			<BackButton text={<Text style={styles.headText}>Profile</Text>} />
			<View style={styles.avatarCont}>
				<Avatar.Image size={150}/>
			</View>
			<View style={styles.infoCont}>
            <Details text={"Username"} value={username}/>
            <Details text={"Email"} value={email}/>
            <ActiveButton title={"Log out"} onPress={LogOut}/>
			</View>
		</View>
	);
};

export default ProfilePage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
		backgroundColor: "#ffffff",
	},

	headText: {
		color: "black",
		fontSize: 24,
	},
	infoCont: {
		paddingHorizontal: 16,
		justifyContent: "center",
	},
	avatarCont: {
		alignSelf: "center",
		marginVertical: 24,
	},
});
