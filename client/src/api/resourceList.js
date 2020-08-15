import axios from "axios";

const API_URL = "http://localhost:3000/";


const createList = (data, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const bodyParameters = {
        ...data
    };
    return axios
        .post(
            API_URL + "list",
            bodyParameters,
            config
        )
        .then((response) => {

            /* if (response.data.accessToken) {
                //localStorage.setItem("user", JSON.stringify(response.data));
            }
 */
            return response.data;
        });
};


const getAllList = (data, token) => {

    return axios
        .get(
            API_URL + "list"
        )
        .then((response) => {

            /* if (response.data.accessToken) {
                //localStorage.setItem("user", JSON.stringify(response.data));
            }
 */
            return response.data;
        });
};

export default {
    createList,
    getAllList
};