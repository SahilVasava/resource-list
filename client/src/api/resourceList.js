import axios from "axios";

const API_URL = "http://localhost:3000/";

/* 
* Post API to create a resource list
*/
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

/*
* Call API to get all resource lists
*/
const getAllList = () => {

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


/*
* Call API to get single resource list
*/
const getSingleList = (urlTitle) => {

    return axios
        .get(
            `${API_URL}list/${urlTitle}`
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
    getAllList,
    getSingleList
};