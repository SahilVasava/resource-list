import axios from "axios";

const API_URL = "http://localhost:3000/";


const googleLogin = (code) => {
    return axios
        .post(API_URL + "auth/google", {
            code
        })
        .then((response) => {

            /* if (response.data.accessToken) {
                //localStorage.setItem("user", JSON.stringify(response.data));
            }
 */
            return response.data;
        });
};

export default {
    googleLogin
};