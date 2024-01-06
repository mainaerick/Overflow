import axios from "axios";
import { APIURL } from "../../../setup/config";

const API_URL = APIURL;
// const API_URL_Authorized = "https://oak-be-zxxiqnr3eq-an.a.run.app/v1/account";

export const TOPIC_GET_ALL = `${API_URL}/topic/all`;
export const TOPIC_GET_ONE = `${API_URL}/topic`;
export const TOPIC_ADD = `${API_URL}/topic`;
export const TOPIC_UPDATE = `${API_URL}/topic/update`;
export const TOPIC_DELETE = `${API_URL}/topic/delete`;
export const MESSAGE_GET_ALL = `${API_URL}/message/all`;

export function topicadd(name: string) {
  return axios.post(TOPIC_ADD, {
    name,
  });
}

export function topicgetone(topicId: string | undefined) {
  return axios.get(`${TOPIC_GET_ONE}/${topicId}`);
}

export function topicgetall() {
  return axios.get(TOPIC_GET_ALL);
}
export function topicdelete(topicId: string | undefined) {
  return axios.delete(`${TOPIC_DELETE}/${topicId}`);
}
export function topicupdate(
  topicId: string | undefined,
  name: string,
) {
  return axios.put(`${TOPIC_UPDATE}/${topicId}`, {
    name,
  });
}
// Messages section
// get all messages
export function messagegetall() {
    return axios.get(MESSAGE_GET_ALL);
  }
