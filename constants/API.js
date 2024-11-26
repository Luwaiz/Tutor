import prod from "./Production";
const url = prod ? "https://tutor-backend-hbov.onrender.com/api" : "";

export default {
	signup: `${url}/auth/signup`,
	login: `${url}/auth/login`,
	userDetails: `${url}/auth/user`,
	createCourses: `${url}/courses/upload`,
	getCourses: `${url}/courses/allCourses`,
	enroll: `${url}/courses/enroll`,
	enrolledCourse: `${url}/courses/enrolled-courses`,
	uploadImage: `${url}/upload/image`,
	getQuizzes: `${url}/courses`, ///:courseId,/quizzes
	categoryCourses: `${url}/courses/category`,
};
