import Cookies from "js-cookie";
import { KEY_ACCESS_TOKEN } from "../Utility/constants";

export const header1 = (headers) => {
  const authorizationToken = Cookies.get(KEY_ACCESS_TOKEN);
  if (authorizationToken) {
    headers.set(
      "Authorization",
      `Bearer ${authorizationToken}` || "Content-Type",
      "multipart/form-data"
    );
  }

  return headers;
};
