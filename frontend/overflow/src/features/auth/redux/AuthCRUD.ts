import axios from "axios";
import { UserModel } from "../models/UserModel";
import { APIURLUSER } from "../../../setup/config";

const API_URL = APIURLUSER;
// const API_URL_Authorized = "https://oak-be-zxxiqnr3eq-an.a.run.app/v1/account";


export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/users/me`;
export const LOGIN_URL = `${API_URL}/users/signin`;
export const REGISTER_URL = `${API_URL}/users/signup`;
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`;

// Server should return AuthModel
export function login(username: string, password: string) {
  return axios.post(LOGIN_URL, {
    username,
    password,
  });
}

// Server should return AuthModel
export function register(
  username: string,
  email: string,
  password: string,
  appUserRoles: [string]
) {
  return axios.post(REGISTER_URL, {
    email,
    username: username,
    appUserRoles: appUserRoles,
    password:password,
    // password_confirmation
  });
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email,
  });
}

export function getUserByToken(token: string) {
  return axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    headers: {
      "Authorization": `Bearer ${token}`,
      'Token': token,  
    },
  });
}
