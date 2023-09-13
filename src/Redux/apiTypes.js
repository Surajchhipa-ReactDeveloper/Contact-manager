import { useEffect } from "react";
import { KEY_ACCESS_TOKEN } from "../Utility/constants";
// import { useParams } from "react-router-dom";
// import { useGetSingleUserQuery } from "./api/SingleUser/Single.api";

// useEffect(() => {
//   let _id = useParams(useGetSingleUserQuery);
// });
//BASE URL
export const BASE_URL = "http://localhost:5000/api/";
// export const BASE_URL_API = "http:// 192.168.1.56:5000";

// ENDPOINTS URL
export const API_ENDPOINT_USER = BASE_URL + "user/";
export const API_ENDPOINT_LOGIN = API_ENDPOINT_USER + "login";
export const API_ENDPOINT_REGISTER = API_ENDPOINT_USER + "register/";
export const API_ENDPOINT_CREATE = BASE_URL + "contacts";
export const API_ENDPOINT_UPDATE = BASE_URL + "contacts/" ;
