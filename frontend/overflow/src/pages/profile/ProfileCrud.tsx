import axios from "axios";
import { UserModel } from "../../features/auth/models/UserModel";
import { APIURL } from "../../setup/config";

const API_URL = APIURL;

export const USER_UPDATE = `${API_URL}/user/update`;

export function userupdate(user:UserModel) {
    return axios.put(`${USER_UPDATE}/${user.id}`,{
        user
    });
  }