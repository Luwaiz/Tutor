import prod from "./Production"
const url = prod? "https://tutor-backend-hbov.onrender.com":""

export default{
    "signup":`${url}/api/auth/signup`,
}