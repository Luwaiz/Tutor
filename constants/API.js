import prod from "./Production"
const url = prod? "https://tutor-backend-hbov.onrender.com":""

export default{
    "signup":`${url}/api/auth/signup`,
    "login":`${url}/api/auth/login`,
    "userDetails":`${url}/api/auth/user`,
    "createCourses":`${url}/api/courses/upload`,
    "getCourses": `${url}/api/courses/allCourses`,
    "enroll": `${url}/api/courses/enroll`,
    "enrolledCourse": `${url}/api/courses/enrolled-courses`,
    "deleteCourse": `${url}/api/courses/:id`,
    "uploadImage": `${url}/api/upload/image`,
}