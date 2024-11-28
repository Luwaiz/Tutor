import {
	ActivityIndicator,
	Button,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import QuizCard from "../../components/QuizCard";
import ZustandStore from "../../hooks/ZustandStore";
import axios from "axios";
import API from "../../constants/API";
import ActiveButton from "../../components/buttons/ActiveButton";
const Quiz = ({ route, navigation }) => {
	const token = ZustandStore.useAuthStore((state) => state.token);
	const [quiz, setQuiz] = useState([]);
	const [userAnswers, setUserAnswers] = useState({});
	const [loading, setLoading] = useState(false);
	const [saveScore, setSaveScore] = useState(false);

	const { _id, category } = route.params;
	const courseId = encodeURIComponent(_id);

	const GetQuiz = async () => {
		setLoading(true);
		try {
			const response = await axios.get(
				`${API.getQuizzes}/${courseId}/quizzes`,
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);
			setQuiz(response.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		GetQuiz();
	}, []);

	const UploadScore = async (score) => {
		setSaveScore(true);
		const req = {
			courseId,
			category,
			score,
		};
		try {
			const response = await axios.post(API.uploadQuizResults, req, {
				headers: { Authorization: `Bearer ${token}` },
			});
			console.log(response.data);
			setSaveScore(false);
		} catch (error) {
			console.log(error);
			setSaveScore(false);
		}
	};
	const handleAnswerSelected = (questionId, selectedOption) => {
		setUserAnswers((prevAnswers) => ({
			...prevAnswers,
			[questionId]: selectedOption,
		}));
	};

	const handleSubmit = async () => {
		let score = 0;

		quiz.forEach((q) => {
			q.questions.forEach((question) => {
				if (userAnswers[question._id] === question.correctAnswer) {
					score += 1;
				}
			});
		});
		let total = quiz[0].questions.length;
		let lost = quiz[0].questions.length - score;
		await UploadScore(score);
		navigation.navigate("Quiz Result", { total, lost, score });
	};

	return (
		<>
			<SafeAreaView style={styles.container}>
				<Header title={route.name} />
				{loading ? (
					<ActivityIndicator color={"#042637"} size={50} />
				) : (
					<>
						<ScrollView
							indicatorStyle="#042637"
							contentContainerStyle={{
								backgroundColor: "#ffffff",
								paddingBottom: 30,
							}}
						>
							{quiz.map((quiz) =>
								quiz.questions.map((question, index) => (
									<QuizCard
										key={index}
										question={question}
										onAnswerSelected={handleAnswerSelected}
									/>
								))
							)}
							<ActiveButton
								title="Submit Quiz"
								onPress={handleSubmit}
								loading={saveScore}
							/>
						</ScrollView>
					</>
				)}
			</SafeAreaView>
		</>
	);
};
export default Quiz;
