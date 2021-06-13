import axios from "axios";
import { TOKEN, URL_API } from "../constants/config";
import { UserType } from "./types";

const token = localStorage.getItem(TOKEN);
axios.defaults.headers.common = { Authorization: token ? `${token}` : "" };

export async function register(form: UserType) {
  return await axios
    .post(`${URL_API}/user/register`, form)
    .then((res) => res.data)
    .catch((error) => error);
}

export async function login(form: UserType) {
  return await axios
    .post(`${URL_API}/user/login`, form)
    .then((res) => res.data)
    .catch((error) => error);
}

export async function isLogged(token: string | null) {
  return await axios
    .post(`${URL_API}/user/isLogged`)
    .then((res) => res.data)
    .catch((error) => error);
}
