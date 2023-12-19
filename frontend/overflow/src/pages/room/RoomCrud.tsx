import axios from "axios";
import { APIURL } from "../../setup/config";

const API_URL = APIURL;
// const API_URL_Authorized = "https://oak-be-zxxiqnr3eq-an.a.run.app/v1/account";

export const ROOM_GET_ALL = `${API_URL}/room/all`;
export const ROOM_GET_ONE = `${API_URL}/room`;
export const ROOM_ADD = `${API_URL}/room`;
export const ROOM_UPDATE = `${API_URL}/room/update`;
export const ROOM_DELETE = `${API_URL}/room/delete`;
export const ROOM_PATICIPANT_ADD = `${API_URL}/room/1/users`;

export function roomadd(
  description: string,
  name: string,
  participants: [],
  topic: string
) {
  return axios.post(ROOM_ADD, {
    description,
    name,
    participants,
    topic,
  });
}

export function roomparticipantadd(userId:string, roomId:string) {
  return axios.post(`${API_URL}/room/${roomId}/users/${userId}`);
}
export function roomgetone(roomId:string|undefined) {
    return axios.get(`${ROOM_GET_ONE}/${roomId}`);
  }

  export function roomgetall() {
    return axios.post(ROOM_GET_ALL);
  }
  export function roomdelete(roomId:string) {
    return axios.post(`${ROOM_DELETE}/${roomId}`);
  }
  export function roomupdate(roomId:string|undefined,description: string,
    name: string,
    topic: string) {
    return axios.put(`${ROOM_UPDATE}/${roomId}`,{
        description,
        name,
        topic,
    });
  }


