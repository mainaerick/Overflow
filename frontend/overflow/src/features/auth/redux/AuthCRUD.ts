import axios from "axios";
import { UserModel } from "../models/UserModel";
import { APIURLUSER } from "../../../setup/config";

const API_URL = APIURLUSER;
// const API_URL_Authorized = "https://oak-be-zxxiqnr3eq-an.a.run.app/v1/account";

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/user`;
export const LOGIN_URL = `${API_URL}/users/login`;
export const REGISTER_URL = `${API_URL}/users`;
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`;

// Server should return AuthModel
export function login(username: string, password: string) {
  let data = JSON.stringify({
    user: {
      email: username,
      password: password,
    },
  });
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: LOGIN_URL,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  return axios.request(config);
}

// Server should return AuthModel
export function register(
  username: string,
  email: string,
  password: string,
) {
  let data = JSON.stringify({
    user: {
      email: email,
      password: password,
      username:username
    },
  });
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: REGISTER_URL,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  return axios.request(config);
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email,
  });
}

export function getUserByToken(token: string) {
  let token_string =`"Bearer ${token}`
  
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: GET_USER_BY_ACCESSTOKEN_URL,
    headers: { 
      'Authorization': token_string, 
      'X-Requested-With': 'XMLHttpRequest', 
      'Content-Type': 'application/json', 
    }
  };

  
  return axios.request(config);
}
