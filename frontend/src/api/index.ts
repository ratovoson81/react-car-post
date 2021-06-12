import axios from "axios";
import { URL_API } from "../constants/config";
import { UserType } from "./types";

export async function register(form: UserType) {
  return await axios
    .post(`${URL_API}/user/register`, form)
    .then((res) => /*res.data*/ console.log(res.data))
    .catch((error) => console.log(error));
}

export async function getUser(id: String) {
  return await axios.get(`${URL_API}/users/${id}`).then((res) => res.data);
}
